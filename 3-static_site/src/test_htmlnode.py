import unittest
from htmlnode import HTMLNode

class TestHTMLNode(unittest.TestCase):
    def test_initialization(self):
        """Test that the HTMLNode initializes correctly."""
        node = HTMLNode(tag="div", value="Hello", children=["child1", "child2"], props={"class": "container"})
        self.assertEqual(node.tag, "div")
        self.assertEqual(node.value, "Hello")
        self.assertEqual(node.children, ["child1", "child2"])
        self.assertEqual(node.props, {"class": "container"})

    def test_props_to_html(self):
        """Test that props_to_html generates the correct HTML string."""
        node = HTMLNode(tag="div", props={"class": "container", "id": "main"})
        props_html = node.props_to_html()
        self.assertEqual(props_html, ' class: "container" id: "main"')

    def test_repr(self):
        """Test the __repr__ method."""
        node = HTMLNode(tag="div", value="Hello", children=["child1"], props={"class": "container"})
        repr_output = repr(node)
        self.assertEqual(repr_output, "TextNode(div, Hello, ['child1'], {'class': 'container'})")

if __name__ == "__main__":
    unittest.main()