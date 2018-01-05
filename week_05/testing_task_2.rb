def func1(val)
  if val == 1
    return true
  else
    return false
  end
end

def max(a, b)
  if a > b
    return a
  else
    return b
  end
end

def looper
  for i in 1..10
    puts i
  end
end

failures = 0

if looper.include?(10)
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
end

if func1(3) == true
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end

if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "max(100,1) failed"
  failures = failures + 1
end

if failures > 0
  puts "Test Failed"
else
  puts "Test Passed"
end
