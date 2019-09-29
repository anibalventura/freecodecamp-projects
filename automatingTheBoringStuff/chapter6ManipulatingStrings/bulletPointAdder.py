#! /usr/bin/python3

# Project: Adding Bullets to Wiki Markup, page 139.

"""
When editing a Wikipedia article, you can create a bulleted list by putting 
each list item on its own line and placing a star in front. But say you have 
a really large list that you want to add bullet points to. You could just type 
those stars at the beginning of each line, one by one. Or you could automate this task with a short Python script.

The bulletPointAdder.py script will get the text from the clipboard, add 
a star and space to the beginning of each line, and then paste this new 
text to the clipboard.
"""

import pyperclip

text = pyperclip.paste()


# Separate lines and add stars.
lines = text.split('\n')
for i in range(len(lines)):  # loop through all indexes in the "lines" list
  lines[i] = '* ' + lines[i]  # add star to each string in "lines" list

text = '\n'.join(lines)


pyperclip.copy(text)