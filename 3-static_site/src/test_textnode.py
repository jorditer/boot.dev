import unittest

from textnode import TextNode, TextType


class TestTextNode(unittest.TestCase):
	def test_eq(self):
		node = TextNode("This is a text node", TextType.BOLD)
		node2 = TextNode("This is a text node", TextType.BOLD)
		self.assertEqual(node, node2)
	
	def test_not_eq(self):
		node1 = TextNode("This is a text node", TextType.BOLD, None)
		node2 = TextNode("This is a different text node", TextType.BOLD, None)
		node3 = TextNode("This is a text node", TextType.BOLD, "https://example.com")
	
		self.assertNotEqual(node1, node2)
		self.assertNotEqual(node1, node3)
	
	def test_repr(self):
		node1 = TextNode("This is a text node", TextType.BOLD, None)
		text1 = repr(node1)
		text2 = "TextNode(This is a text node, bold, None)"
		self.assertEqual(text1, text2)

if __name__ == "__main__":
	unittest.main()