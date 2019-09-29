# Practice Projects
# Fantasy Game Inventory.

import pprint

stuff = {'rope': 1, 'torch': 6, 'gold coin': 42, 'dagger': 1, 'arrow': 12}


def displayInventory(inventory):

    print("Inventory: ")

    item_total = 0
    for k, v in inventory.items():
        print(str(v) + " " + k)
        item_total = item_total + v

    print("Total number of items: " + str(item_total))


pprint.pprint(displayInventory(stuff))


inv = {'gold coin': 42, 'rope': 1}
dragonLoot = ['gold coin', 'dagger', 'gold coin', 'gold coin', 'ruby']


def addToInventory(inventory, addedItems):
    for i in range(len(addedItems)):
        inv.setdefault(addedItems[i], 0)
        inv[addedItems[i]] = inv[addedItems[i]] + 1

    return inv


inv = addToInventory(inv, dragonLoot)


pprint.pprint(displayInventory(inv))