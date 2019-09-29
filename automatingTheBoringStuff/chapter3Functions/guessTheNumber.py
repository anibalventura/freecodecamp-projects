# Chapter 3, page 72.
# This code is a "Guess the number" game.


# This is a guess the number game.
import random
secretNumber = random.randint(1, 20)
print()
print("Hello! Let's play a game.")
print('I am thinking of a number between 1 and 20.')

# Ask the player to guess 6 times.
for guessesTaken in range(1, 7):
    guess = int(input('Take a guess: '))

    if guess < secretNumber:
       print()
       print('Your guess is too low.')

    elif guess > secretNumber:
        print()
        print('Your guess is too high.')

    else:
        break  # This condition is the correct guess!


if guess == secretNumber:
    print()
    print('Good job! You guessed my number in ' +
          str(guessesTaken) + ' guesses!')

else:
    print()
    print('Nope. The number I was thinking of was ' + str(secretNumber))
