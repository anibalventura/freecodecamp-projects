# Practice Project.
# The Collatz Sequence.


def collatz(number):

    if number % 2 == 0:   # If the number is even.
      return number // 2

    elif number % 2 == 1:   # If the number is odd.
      return 3 * number + 1


print('Enter number:')

num = 0
while num != 1:
    try:
      num = int(input())
      print(collatz(num))
      num = num
    except:
      print('Please enter a number:')
      continue

    if collatz(num) == 1:
      break