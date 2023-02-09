//? ///////////////////////// OOP /////////////////////////////////////

//OOP => Object-Oriented Programing is a programing pardigm on the consept of object
//! paradigm => style of code

//we use objects to model (describe) real-world of abstract feature
//! abstract => hide implementation which is not important for other user
//! I will explain abstraction fully later

//objects may contain data(properties) and code(methods) by using objects, we pack
//and the corresponding behavior into one block

//interaction happen throgh a public interface (API) methods that the code outside of
//the object can access and use to communicate with object

//OOP => was developed with the goal of organize Code to make it more flexible
//and easier to maintain
//to avoid spaghetti code

//! spaghetti code => code with lots of mess

//traditional OOP => CLASS => like blueprint(Abstract plan) which we can create new object
//for using this CLASS we just create new object
//so whats the feature => we can create many instance from one plan(CLASS)

//? ///////////////// 4 fundamental principle ///////////////////////////

//the 4 fundamental principle of Object-Oriented Programing

//* 1 => Abstraction
//* 2 => Encapsulation
//* 3 => Inheritance
//* 4 => Polymorphism

//! notice => this principles can be use outside of OOP
//! We have seen some of these principles before

//? //////////////////////// Abstraction ////////////////////////////////

//Abstraction => ignoring or hiding details that do not matter(for other user)
//allowing us to get an overview perespective of the thing were implementing,
//instead of messing with detail that do not really matter to our implementation

//consider this example
//we have phone with lots of details
////////////////////
/* phone          */
/*                */
/*  charge        */
/*  volume        */
/*  vortage       */
/*  homeBtn       */
/*  temperature   */
/*  volumeBtn     */
/*  Screen        */
/*  ...           */
////////////////////

// but in Abstraction

////////////////////
/* phone          */
/*                */
/*  charge        */
/*  volume        */
/*  homeBtn       */
/*                */
/*  volumeBtn     */
/*  Screen        */
/*  ...           */
////////////////////

//We only show the part that is important for users(hide details)
//This is the definition of abstraction that we did earlier
//when we create for example functions in our code

//? ////////////////////// Encapsulation ////////////////////////////////

//Encapsulation => keeping properties and methods private inside the calss
//so they are not accessible from outside the class. Some
//method can be exposed as a publick interface. API

//consider this example
//we have user with private information
//which is we wanna not accessible outside of class
/////////////////////////////////////////////////
/* user                                        */
/*                                             */
/*  userName                                   */
/*  private password                           */
/*  private Email                              */
/*  login(word) { this.password === word}      */
/*                                             */
/*   ...                                       */
/*                                             */
/////////////////////////////////////////////////

//! notice: private syntac not exist in javascript

//so the question is why do we private our fields ?
//there is two main reason

//* 1 => prevent external code from accidentally manipulatin internal properties
//* 2 => Allow to change internal implementation without the risk of breaking external code

//? ////////////////////// Inheritance ////////////////////////////////

//Inheritance => making all properties and methods of a certain class
//available to a child class. foming a hierachical relation between classes.
//this allows us to reuse common login and model real-world relation ship

//consider this example
//we have user with many properties(variable) and behavior(methods)
/////////////////////////////////////////////////
/* user                                        */
/*                                             */
/*  userName                                   */
/*  password                                   */
/*  Email                                      */
/*  login(word) { login logic}                 */
/*  sendMessage(word) { send Message logic}    */
/*                                             */
/*   ...                                       */
/*                                             */
/////////////////////////////////////////////////

//but in this real-world example we have admin
//which is also is a user with more accessible

/////////////////////////////////////////////////
/* admin  inherited from user                  */
/*                                             */
/*  userName                                   */
/*  password                                   */
/*  Email                                      */
/*  login(word) { login logic}                 */
/*  sendMessage(word) { send Message logic}    */
/*  deleteUser(user) { delete logic}           */
/*                                             */
/*   ...                                       */
/*                                             */
/////////////////////////////////////////////////

//admin => Inherit => user + own properties
//user is parent
//admin is child

//? ////////////////////// Polymorphism ////////////////////////////////

//! greek word => means => many shape

//polymorphis => is subset of inheritance a child class which can overwrite a method
//it inherited from a parent class [its, more complex that, but enough for our purpose]

//consider this example
//in this case we have user which is parent and author which is child and again
//we have admin with more accesibellity
/////////////////////////////////////////////////
/* user                                        */
/*                                             */
/*  userName                                   */
/*  password                                   */
/*  Email                                      */
/*  login(word) { login logic}                 */
/*  sendMessage(word) { send Message logic}    */
/*                                             */
/*   ...                                       */
/*                                             */
/////////////////////////////////////////////////

/////////////////////////////////////////////////
/* admin  inherited from user                  */
/*                                             */
/*  userName                                   */
/*  password                                   */
/*  Email                                      */
/*  login(word,key) { login logic}             */
/*  sendMessage(word) { send Message logic}    */
/*  deleteUser(user) { delete logic}           */
/*                                             */
/*   ...                                       */
/*                                             */
/////////////////////////////////////////////////

/////////////////////////////////////////////////
/* author  inherited from user                 */
/*                                             */
/*  userName                                   */
/*  password                                   */
/*  Email                                      */
/*  Posts                                      */
/*  login(pass) { login logic}                 */
/*  sendMessage(word) { send Message logic}    */
/*  writePost(post) { write post logic}        */
/*                                             */
/*   ...                                       */
/*                                             */
/////////////////////////////////////////////////

//? ////////////////////// overview ////////////////////////////////

//Class => like blueprint(Abstract plan) which we can create new object
//for using this CLASS we just create new object

//Abstraction => ignoring or hiding details that do not matter(for other user)

//Encapsulation => that the internal state of an object is hidden from the outside world,
//and the object's behavior is defined by its methods.
//This allows for better control of the data and methods

//Inheritance => allows one class to inherit properties and methods from another class,
//which means that you can create a new class that inherits the properties and methods
//from an existing class and add new properties and methods to it.

//Polymorphism =>  that a single method or property can have multiple forms.
//It allows an object to respond to the same method call in different ways depending
//on the type of object it is.

//? /////////////////// OOP in Java Script //////////////////////////

/////////////////////////////////////////////////
/*                                             */
/*  Prototype     => contain Methods           */
/*                                             */
/*      ^                                      */
/*     ||                                      */
/*                                             */
/*  object        => can access methods        */
/*                                             */
/*                                             */
/////////////////////////////////////////////////

//object are linked to a prototype object
//protype inheritance : the prototype contain methods that are accessible
//to all objects linked to that prototype.

//for example Array.prototype.map();
//const num = [1,2,3];
//num.map(v=>v*2)

//but question is how do we actually create prototypes ?

//there is 3 way to achive that

//* 1.constructor function
//Technique to create objects from a function
//this is how built-in objects like Array,map,sets

//* 2.ES6 Classes
//modern alternative to constructor function syntax
//! syntactic-sugar => classes work exactly like constructor function
//! its not like classic OOP

//* 3.object.Create()
//the easiest and most straight forward way of linking an object to a prototype object.

//? ////////////////////////// END //////////////////////////////////

//? let's dive into the next section which is we will implement all these things
//? with cool and real-world example in Java Script
