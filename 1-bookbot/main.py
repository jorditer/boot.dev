from stats import count_words, count_duplicates, dict_into_list
import sys

def get_book_text(path):
	with open(path) as f:
		return f.read()

def main():
	if len(sys.argv) != 2:
		print("Usage: python3 main.py <path_to_book>")
		sys.exit(1)
	path = sys.argv[1]
	text = get_book_text(path)
	count = count_words(text)
	print("============ BOOKBOT ============")
	print(f"Analizing book found at {path}...")
	print("----------- Word Count ----------")
	print(f"Found { count } total words")
	print("--------- Character Count -------")
	dict = count_duplicates(text)
	list = dict_into_list(dict)
	list.sort(reverse=True, key=lambda item: item["char"])
	for e in list:
		if e["char"].isalpha():
			print(f"{e["char"]}: {e["num"]}")

main()