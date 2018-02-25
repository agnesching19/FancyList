# FancyList - Coding Test

Build a JS class called "FancyList" that simulates a list and provides all methods and properties to manage the list and retrieving vital information about the list.

The list should secretly host an Array which is private to the FancyList class.

This array is the actual storage of FancyList.

The List should also forbid the use of multiple types in the same list. Hence, when adding items to FancyList for the first time, the class should introspect the items and the 1st item determines the type.

Eg:
If items are [1,2,3,4,5] then FancyList is restricted to Number.
If I did, myList.add('name');, it should throw an Error, because 'name' is a String.

As such, I also cannot do myList.add([1,2,3,'name']);

Once the type is established, FancyList should always check that the correct type is being used when adding/inserting elements in the list.
Eg: I cannot create a FancyList for 'number' s, then decide to add a boolean as my next item.

# Constructor

The constructor should be flexible. It should allow:

1. Passing no items

2. Passing 1 item

3. Passing many items (comma delimited)

4. Passing many items (as an Array)


Eg:

let myList1 = new FancyList();

let myList2 = new FancyList(3);

let myList3 = new FancyList(3, 4);

let myList4 = new FancyList([5, 6]);

# Methods

<constructor> (see above)

getItemAt(index); (0 is 1st item)

getItemsAt(index, numberOfItems);

addItem(item);

addItems(item1, ...); (accepts 1 item too)

addItems([item1, item2, ... itemN]);

insertItemAt(index, item); (index is where the item is inserted, i.e, the position)

insertItemsAt(index, item1, ...);

insertItemsAt(index, [item1, item2, ... itemN]);

removeItemAt(index);

removeItemsAt(index, numberOfItems);

removeItem(item); (if there are duplicates, should remove 1st item found)

removeItems(item1, ...); (accepts 1 item too)

removeItems([item1, item2, ... itemN]);
