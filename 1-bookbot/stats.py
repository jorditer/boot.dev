def count_words(s):
	return len(s.split())

def count_duplicates(s):
	out = {}
	for c in s:
		c = c.lower()	
		if not c in out:
			out[c] = 1
		else:
			out[c] += 1
	return out

def dict_into_list(dict):
	paired = []
	for e in dict:
		paired.append({"char": e, "num": dict[e]})
	return paired
