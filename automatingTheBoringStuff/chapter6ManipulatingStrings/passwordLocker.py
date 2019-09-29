#! /usr/bin/python3

# Projet: Password Locker, page 136.
# An insecure password locker program.

import sys, pyperclip

PASSWORDS = {'email': 'Prueba01ContrasenaMail',
             'blog': 'Prueba02ContrasenaBlog',
             'gmail': '@gmail.com'}


if len(sys.argv) < 2:
  print('Usage: python PasswordLocker.py [account] - copy account password')
  sys.exit()


account = sys.argv[1]  # first command line arg is the account name


if account in PASSWORDS:
  pyperclip.copy(PASSWORDS[account])
  pyperclip.paste()
  print('Password for ' + account + ' copied to clipboard.')
else:
  print('There is no account named ' + account)
