def count_char(text, char):
  count = 0
  for c in text:
    if c == char:
      count += 1
  return count

def initial_message():
    print()
    print("Welcome to text analyzer, we have the following options:")
    print()
    print("1. Number of time that a character is repeat in the text.")
    print("2. What percentage of the text each character of the alphabet occupies.")
    print()




initial_message()
user_input = input("Enter the number of the option: ")
print()


if user_input == "1":
    filename = str(input("Enter a filename: "))
    char = char_input = input("Enter the character: ")
    with open(filename) as f:
        text = f.read()
    print("* The number of time that the character " + char_input + " repeat is: " + str(count_char(text, char)))


if user_input == "2":
    filename = input("Enter a filename: ")
    print("* The percentage of each character is: ")
    with open(filename) as f:
        text = f.read()    
    
    for char in "abcdefghijklmnopqrstuvwxyz":
        perc = 100 * count_char(text, char) / len(text)
        print("{0} - {1}%".format(char, round(perc, 2)))
