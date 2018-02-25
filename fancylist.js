"use strict";

const FancyList = function() {
  this._checkValidArgs = function(array_src) {
    let array = array_src;
    let firstType = typeof array[0];
    let diffType = false;

    // when passing an array
    if (array.length === 1 && typeof array[0] === 'object') {
      array = array[0];
      firstType = typeof array[0];
    }

    // check type of all items
    for (let i = 1; i < array.length; i++) {
      if (typeof array[i] !== firstType) {
        diffType = true;
        break;
      }
    }

    if (diffType) {
      throw new TypeError('Multiple types found.');
      return [];
    } else {
      return array;
    }
  };

  this._array = this._checkValidArgs(Array.prototype.slice.call(arguments));
  this._arrayType = typeof this._array[0];
};

FancyList.prototype.getItemAt = function(index) {
  return this.getItemsAt(index, 1);
};

FancyList.prototype.getItemsAt = function(index, numberOfItems) {
  if (isNaN(index) || isNaN(numberOfItems)) {
    console.warn('Enter only numbers please.');
  } else {
    if (index >= this._array.length || index < 0 || numberOfItems < 1) {
      console.warn('Nothing there.');
    } else {
      let output = [];

      for (let i = index; i < this._array.length; i++) {
        numberOfItems--;
        output.push(this._array[i]);

        if (numberOfItems < 1) {
          break;
        }
      }
      return output;
    }
  }
};

FancyList.prototype.addItem = function(item) {
  this.insertItemsAt(this._array.length, item);
};

FancyList.prototype.addItems = function() {
  let items = this._checkValidArgs(Array.prototype.slice.call(arguments));
  this.insertItemsAt(this._array.length, items);
};

FancyList.prototype.insertItemAt = function(index, item) {
  this.insertItemsAt(index, item);
};

FancyList.prototype.insertItemsAt = function() {
  let args = Array.prototype.slice.call(arguments),
      index = args.shift(),
      values = this._checkValidArgs(args);

  if (isNaN(index)) {
    console.warn('Enter only numbers please.');
    return ;
  }

  if (this._arrayType === 'undefined' || this._arrayType === typeof values[0]) {
    if (this._array.length === index) {
      for (let i = 0; i < values.length; i++) {
        this._array.push(values[i]);
      }
    } else {
      let swiped_values = this._array.splice(index, this._array.length);

      for (let i = 0; i < values.length; i++) {
        this._array[index + i] = values[i];
      }
      Array.prototype.push.apply(this._array, swiped_values);
    }

    if (this._arrayType === 'undefined') {
      this._arrayType = typeof values[0];
    }
  } else {
    throw new TypeError('Wrong type. ' + this._arrayType + ' expected.');
  }
};

FancyList.prototype.removeItemAt = function(index) {
  this.removeItemsAt(index, 1);
};

FancyList.prototype.removeItemsAt = function(index, numberOfItems) {
  if (isNaN(index) || isNaN(numberOfItems)) {
    console.warn('Enter only numbers please.');
  } else {

    if (index >= this._array.length || index < 0 || numberOfItems < 1) {
      console.warn('Nothing to delete.');
    } else {
       this._array.splice(index, numberOfItems);
    }
  }
};

FancyList.prototype.removeItem = function(item) {
  this.removeItems(item);
};

FancyList.prototype.removeItems = function() {
  let items = this._checkValidArgs(Array.prototype.slice.call(arguments));

  for (let i = 0; i < items.length; i++) {
    if (this._array.indexOf(items[i]) > 0) {
      this._array.splice(this._array.indexOf(items[i]), 1);
    }
  }
};


