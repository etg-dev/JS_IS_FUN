## What are data strutures?

A data structure is a specialized format for organizing, processing, retrieving and storing data. There are several basic and advanced types of data structures, all designed to arrange data to suit a specific purpose.

we saw earlier some examples of built-in JavsScript data structures
like Array or Objects

## The other important question its why we need data structures ?

The anwser is soo simple we always work with data and we need to or better word we have to manage our data and for specific purpose we should use proper data structure

**1. Data Structure allow us to manage data**
**2. easier find , delete or update data**

There is 4 built-in data structure in javaScript

**1. Array => Ordered list of data, Duplicate allowed, itrable**
**2. Set => Unordered list of data, No duplicates, not itrable**
**3. Objects => Key-value of un-ordered data, not itrable**
**4. Map => Key-value pair of ordered, itrable**

---

# Array

```javascript
const array = [1, 2, 3, 4, 5, 11, 2, 2];

//or
const array = new Array(100);
array.push(1, 2, 3, 4, 5, 11, 2, 2);
```

1. **Insertion order is kept**
2. **Element access via index**
3. **Size(length) adjasts dynamically**
4. **Duplicate values are allowed**

---

# Set

```javascript
const food = new Set();

food.set("pizza");
food.set("burger");
food.set("pizza"); // not added
```

1. **Insertion order is not stored**
2. **Element access and extraction via method**
3. **Itrable => you can use the for-of loop**
4. **Duplicate values are not allowed**

---

# Object

```javascript
const person = new Object();

person.fName = "Erfan";
person.lName = "Taghinia";

//or
const person = {
  fName: "Erfan",
  lName: "Taghinia",
};
```

1. **Un-ordered key-value pairs of data**
2. **Not iterable** => just use for-in loop
3. **Element access via key**
4. **Keys are unique, values are not**
5. **Keys have to be strings,numbers or symbols**
6. **Can store data functionality(methods)**

---

# Map

```javascript
// To create a Map in JavaScript,
// you can use the Map constructor or the Map literal syntax.
// Here's an example of using the constructor to create a new Map:
const myMap = new Map();

//You can then add key-value pairs to the map using the set() method:
myMap.set("key1", "value1");
myMap.set("key2", "value2");
```

1. **Ordered key-value pairs of data**
2. **Elements access via key**
3. **Itrable -> can use for-of loop**
4. **Keys are unique, values are not**
5. **Keys can be anything**
6. **pure data storage, optimize for data**

---

In JavaScript, a map and an object are both used to store collections of key-value pairs, but they have some important differences in terms of their features and use cases.

Keys can be any type in a Map, but only strings or symbols in an Object: While both maps and objects store key-value pairs, maps allow any value to be used as a key, whereas object keys are limited to strings or symbols.

Map keys are ordered, while object keys are not: In a map, the keys are ordered based on the order in which they were added. In contrast, object keys are not ordered, and the order in which they are accessed is not guaranteed.

Maps have a built-in size property, while object size has to be manually tracked: Maps have a built-in size property that returns the number of key-value pairs in the map. In contrast, with objects, you need to manually track the number of key-value pairs by keeping a count of keys or using the Object.keys() method.

Maps can be iterated using forEach() or for...of, while objects are iterated using for...in loop: To iterate over the key-value pairs in a map, you can use the forEach() or for...of loop. In contrast, to iterate over the key-value pairs in an object, you use the for...in loop.

Overall, while both maps and objects store collections of key-value pairs in JavaScript, they have some important differences in terms of their features and use cases. Maps are typically used when the keys are not limited to strings or when the order of the keys is important, while objects are more commonly used for storing structured data with string keys.

---

##further we also write our custom data structure
