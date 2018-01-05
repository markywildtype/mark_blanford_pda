post('/albums/sell_stock') do
  album = Album.find(params['select'].to_i)
  if album.stock() >= params['stock'].to_i
    album.sell_stock(params['stock'].to_i)
    album.update()
    redirect to "/albums/#{params['select'].to_i}"
  else
    erb(:"albums/error")
  end
end
