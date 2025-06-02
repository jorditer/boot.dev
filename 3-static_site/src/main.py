from textnode import TextNode, TextType
from htmlnode import HTMLNode

def main():
	print(TextNode("this is a test", TextType.NORMAL, "https://test.com"))
	print(TextNode("This is a text node", TextType.BOLD, None))
	print(HTMLNode("h1", "testing", "children", "props"))

main()
