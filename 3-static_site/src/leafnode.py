from htmlnode import HTMLNode

class LeafNode(HTMLNode):
	def __init__(self, tag, value, props):
		super