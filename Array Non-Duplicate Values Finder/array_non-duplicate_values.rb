def array_non_duplicate_values(input_array)
	new_array = []
	for i in input_array
		if input_array.count(i) == 1
			new_array << i
        end
    end
    return new_array
end