for number in (1..100)
	if (number % 3 == 0) && (number % 5 == 0)
		print "FizzBuzz"
	elsif (number % 3 == 0)
		print "Fizz"
	elsif (number % 5 == 0)
		print "Buzz"
	else
		print number
	end
end	