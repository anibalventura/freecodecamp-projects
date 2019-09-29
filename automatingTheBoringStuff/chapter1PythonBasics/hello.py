# Chapter 1, page 21-22.
# This program say hello, that ask your name and say the lenght of it and ask for your age and say how old you will be in one year.

print()
print('Hello World!')  # Say hello.
print()


myName = input('What is your name? ')  # Ask for their name.

print('It is good to meet you, ' + myName)
print('The length of yout name is: ' + str(
    len(myName)))  # Tell le lenght of the name.
print()


myAge = input('What is your Age? ')  # Ask for their age.

print('You will be ' + str(int(myAge) + 1) +
      ' in a year.')  # How old will be in one year.
