### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.

#indentation bad:
def func1 val #val should be in brackets with no space after func1
  if val = 1  #should be ==
  return true
  else
  return false
  end
end

#indentation bad:
dif max a b #def misspelled, should be def max(a, b)
  if a > b
      return a
  else
  b #should be return b to avoid implicit return
  end
end
end #extra end

#indentation bad:
def looper
  for i in 1..10
  puts i
  end
end

failures = 0

if looper == 10 #looper prints numbers 1-10, so this is inherently false - use looper.include?(10)
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
#no end keyword for this if/else statement

if func1(3) == false # should be == true - otherwise pass and fail responses are the wrong way round if the purpose of the function is to only pass if the value passed in is 1
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"  #string not relevant to this function - "max(100,1) failed" instead
  failrues = failures + 1 #failures misspelled as failrues
end


if failures #this will always evaluate to true unless qualified, eg. if failures > 0
  puts "Test Failed"
else
  puts "Test Passed"
end
