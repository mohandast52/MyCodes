/* 
dir : returns all the properties and attributes of the 'document'
where document is the root element in DOM
*/

// console.dir(document);

/*
to get everything in corrent order in array format
*/

// console.log(document.all);

// we can see list of properties
// exploring very few now
// 1. domain
console.log(document.domain);

// 2. URL
console.log(document.URL);

// 3. title
console.log(document.title);
// we can also change it
document.title = "Mohan Das";

// 4. grab head element
console.log(document.head);

// 5. grab body element
console.log(document.body);

// collections of forms inside our DOM
console.log(document.forms);

/* SELECTORS */
// 1. getElementById
var div_id_main = document.getElementById("main");
console.log(div_id_main);
// custom attribute 'data-name' is retrived here
console.log(div_id_main.getAttribute("data-name"));

var h1_id_header_title = document.getElementById("header-title");
// both almost return same output except one change
console.log("textContent : " + h1_id_header_title.textContent);
console.log("innerHTML : " + h1_id_header_title.innerHTML);

// adding element inside element using 'innerHTML'
h1_id_header_title.innerHTML = "<h3>Mohan Das from Javascript</h3>";

// changing style
h1_id_header_title.style.borderBottom = "3px solid #303F9F";

// 2. getElementByClassName

var items = document.getElementsByClassName("list-group-item");
// returns collections of elements having specified class name
console.log(items);
// change text
items[1].textContent = "from Javascript File";
items[1].style.fontWeight = "bold";

// changing background for collections
for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "#eee";
}

// same can be done using getElementByTagName
console.log("TagName" + document.getElementsByTagName('li'));

// 3. querySelector
/*
 querySelector() returns the first Element within the document 
 that matches the specified CSS selector
*/
// "first matched <li> is returned"
console.log(document.querySelector('li'));

// see the button value changed to 'DASU'
var submitButton = document.querySelector("input[type='submit']");
submitButton.value = "DASU";

// how to change last li ?
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'red';

// 4. querySelectorAll : selects all
console.log(document.querySelectorAll('.title'));

// 5. parentNode: return parent element
var parentNodeExample = document.querySelector('#items').parentNode;
parentNodeExample.style.backgroundColor = "#337ab7";

// 6. parentElement :  exactly same as parentNode
// then what's the difference? Ans below : 
// https://stackoverflow.com/questions/8685739/difference-between-dom-parentnode-and-parentelement















console.log();
console.log('{ 7. childNodes, 8. children }');
// 7. childNodes
console.log(parentNodeExample.childNodes);
// we can see '#text' in the ouput which is line break i.e newLine

// 8. children
/*
 what;s the difference? 
    -it won't give '#text' i.e line break is not considered
    -childNodes returns NodeList and children returns Collection
 */
console.log(parentNodeExample.children);

// 9. firstElementChild: gives firstChild
// 10. firstChild: same but gives '#text' if it has line breaks;
// 11. lastElementChild
// 12. lastChild

// 13. nextElementSibling: return sibling
// 14. nextSibling: same but gives '#text' if it has line breaks;


// CREATE

var newDiv = document.createElement('h1');
newDiv.className = 'helloCreationClass';
newDiv.id = 'helloCreationId';
newDiv.setAttribute("hello-data", "hello-value");
var setValueToNewDiv = document.createTextNode("Inside Hello Creation");
newDiv.appendChild(setValueToNewDiv);

var parentContainer = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

// parent.insertBefore(elementCreated, whichElement);
parentContainer.insertBefore(newDiv, h1);
console.log(newDiv);














// eventListener
console.log("--{ eventListener }--");
var buttonClick = document.getElementById("button").addEventListener('click', buttonClickFunction);
// event is passed as a parameter
function buttonClickFunction(eventpassed) {
    console.log(eventpassed);
    console.log(eventpassed.target); // target: which element is pressed
    console.log(eventpassed.target.id); // return ID
    console.log(eventpassed.target.classList); // list of classes
    console.log(eventpassed.type);
    console.log("clientX : " + eventpassed.clientX); // value of x-axis from browser window;
    console.log("clientY : " + eventpassed.clientY); // value of y-axis from browser window;
    console.log("offsetX : " + eventpassed.offsetX); // value of x-axis from actual element inside;
    console.log("offsetY : " + eventpassed.offsetY); // value of y-axis from actual element inside;

    // are we holding keyboard keys while clicking the button?
    console.log("alt button ? " + eventpassed.altKey);
    console.log("ctrl button ? " + eventpassed.ctrlKey);
    console.log("shift button ? " + eventpassed.shiftKey);
}

// some of different event listener
/*
    1. dblclick : on double click
    2. mouseDown : on mouse pressed
    3. mouseUp : on mouse released after pressing
    4. mouseEnter : on mouse enter over a element 
    5. mouseLeave : on mouse leaving over a element
    6. mouseOver : when hover textContext or child of the element
    7. mouseOut : when leaving textContext or child of the element
    8. keydown
    9. keyup
    10. keypress
    11. focus : e.g. when we click inside the textbox
    12. blur : e.g. when we came out of the textbox
    13. cut : when we actually cut a text
    14. paste : when we acutally paste a text
    15. input : whenever we input something 
    16. change : e.g. when we SELECT from dropdown
    17. submit

    preventDefault();   prevents from happening something e.g. href in <a> tag wont work
                        if it has preventDefault in <a> on click event.

    OTHER drag events
    https://www.html5rocks.com/en/tutorials/dnd/basics/
*/

var box = document.getElementById("box");
var output = document.createElement("h3");
box.appendChild(output);
box.addEventListener('mousemove', function (event) {
    output.textContent = "X : " + event.offsetX + " Y : " + event.offsetY;
    box.style.backgroundColor = "rgb(" + event.offsetX + "," + event.offsetY + ", 40)";
});



/*
   // 'use strict'
   
   function(){
       ...
       x = 10; //  this will define itself in global scope because,
                   we haven't specified 'var'.
       ..
   }
   - if we put 'use strict' it will give us error that variable x is not defined.
   - also tells the brower to use latest functionality.
*/

// --- prototypal inheritance (simple parent child inheritance) ---
/*
 
*/

var parent = {
    value: "parentValue",
    obj: {
        objValue: "parentObjValue"
    },
    walk: function () {
        console.log('walking');
    }
};

var child = Object.create(parent);
console.log("child.value: " + child.value);
console.log("child.obj.objValue: " + child.obj.objValue);
console.log("parent.value: " + parent.value);
console.log("paren.obj.objValue: " + parent.obj.objValue);
console.log(child); // see the <prototype> in console, which is actually parent object.
console.log(parent);

child.value = "childValue";
child.obj.objValue = "childObjValue";
console.log("child.value: " + child.value);
console.log("child.obj.objValue: " + child.obj.objValue);
console.log("parent.value: " + parent.value);
console.log("paren.obj.objValue: " + parent.obj.objValue);

console.log("child.value === parent.value?: " + (child.value === parent.value));
console.log("child.obj === parent.obj?: " + (child.obj === parent.obj));
// similarly for grand children.

// Function Constructors

function Dog(name) {
    this.name = name;
    console.log("'this' is: ", (this)); // retirns the myDog object
}

// new keyword is necessary to actually create object.
// function name starting with capital letter is mostly Function constructor.
var myDog = new Dog("Max1");
console.log("myDog: ", myDog);

// not being used as a function constructor
Dog("Max2"); // this will return a global scope which is window object.




// Difference between object literal and object constructor.
/*
Object literal: they are singleton object, if we change the object it will affect all the other object.
*/

var emp = {
    name: "John"
}
var newEmp = emp;
console.log("emp name " + emp.name);
newEmp.name = "Mohan"; // change in newEmp, emp is also changed
console.log("emp name " + emp.name);

/*

Object constructor: Object defined with a function constructor lets us have multiple instances.
eg. 
var emp = function(){
    this.name = "Mohan";
}
var employee = new emp();
var NewEmployee = new emp();
*/















/* const vs let vs var */

/*
const: as the name suggests, it is used to assing Constant values and unchangable.
eg. const variableName; // throws error that it hasn't initialized
eg. const variableName = 1; 
    variableName = 10; // throws error, cannot reassign the value
*/
console.log('--{ const vs let vs var }--');
const Pi = 3.14
const constArray = [1, 2];
constArray.push(3);
console.log('value pushed to const array ', constArray);
// Pi = 1; if i try to change it, it will give an error!


//  if accessed here : console.log(i); throws error
for (let i = 0; i < 5; i++) {
    console.log(i);
}
/*
console.log(i);
if we try to access it, we will get error. (means, it is accessible only inside a block)
*/

// if accessed here : console.log(j); it knows the variable j is defined but it can't find it; 
for (var j = 0; j < 5; j++) {
    console.log(j);
}
console.log("var accessed " + j);
// we can access it and use that outside block too.


/*
    difference b/w null and undefined?
    - if we dont assign a variable, its automatically assigned as undefined by Javascript.
    - null, assigned by us and used to clean up the value

    - typeof(undefined) is undefined
    - typeof(null) is object
*/













console.log('--{ callback function }--');
/*
Callbacks : 
    - functions are first-class objects, ie. they are of the type OBJECT
    hence, can be stored in variables, passed as arguments to functions, returned from functions 
    - its basically 'call at the back' (better name would be "call after" function)
    */

// eg 1
function greetings(name) {
    console.log("hey, " + name + " from callback function :) ");
}

function processUserInput(functionNamePassedHere) {
    console.log('hey!! fun');
    let name = 'Mohan'
    functionNamePassedHere(name);
}

// we just know the function name, but the args are hidden to user! 
processUserInput(greetings);

// eg 2

function add(num1, num2) {
    return "Addition of " + num1 + " and " + num2 + " : " + (num1 + num2);
}

function sub(num1, num2) {
    return "Subtraction of " + num1 + " and " + num2 + " : " + (num1 - num2);
}

function calc(num1, num2, operationName) {
    // checks if user passed the real function name or some garbage
    if (typeof operationName === "function") {
        return operationName(num1, num2);
    }
    return "Not a valid function name";
}

console.log(calc(5, 10, add)); // we know which function to call, but not the logic inside it

// exactly same as above add function
console.log(calc(5, 10, function (a, b) {
    // this is a callback function
    return a + b;
}));

/*
    sort function internally uses callback function and give the programmer 
    to sort in asecending or desending order

    array.sort(function(val1, val2){
        if(val1.str > val2.str){
            return -1;
        } else {
            return 1;
        }
    });
*/













console.log('--{ Promises }--');
// eg 1
let promise = new Promise(function (resolve, reject) {
    let gotDataFromResource = false;
    if (gotDataFromResource) {
        resolve('take the data buddy!!');
    } else {
        reject('Sorry, URL is down');
    }
});

promise.then(function (data) {
    console.log(data);
}).catch(function (rejectedData) {
    console.log(rejectedData);
});

// eg 2

let cleanRoom = function () {
    return new Promise(function (resolve, reject) {
        resolve('Cleaned the room');
    });
};


let removeGarbage = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + ' | remove garbage');
    });
};


let winIcecream = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + ' | won icecream');
    });
};

// nested promise (one after the other, and takes time) 
cleanRoom()
    .then(function (message) {
        return removeGarbage(message); // returns a promise
    })
    .then(function (message) {
        return winIcecream(message);
    })
    .then(function (message) {
        console.log('NESTED : finally all promise done!');
        console.log(message);
    });

// all the promises to be executed parallel
Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function (message) {
    console.log(message); // return array of messages[]
    console.log('PARALLEL : promises executed!');
});

// any one resolved (when we target for different web servers and even if one return, we are done)
Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function (message) {
    console.log(message); // return array of messages[]
    console.log('RACE : promises executed!');
});
















// async
console.log('--{ Async/Await }--');

// to use aysnc, function add async keyword before function
async function promiseAlternative() {
    const userResponse = (await fetch('https://jsonplaceholder.typicode.com/users'));
    const userJsonData = await userResponse.json();
    console.log(userJsonData); // will be executed after cleanRoom() function completely executes.
}
promiseAlternative();

















console.log('--{ IIFE and Closure }--');
/*                        
    Immediately Invoked Function Expression (IIFE) : 
    - its JS function runs as soon as it is defined
    - seperated global and local variables.

    var a = 2; // global
    (function (){
        console.log('Mohan Das');
        var a = 5;
        console.log(a); // local
        // scope is separated.
    })();
    console.log(a);

    some ways of writing IIFE:
    1.   !function(){

            }();

    2.   -function(){

            }();

    3.   +function(){

            }();

    - used in minification! 

    (function($){

    })(window.JQuery);
    - in the above code, window,JQuery is passed as argument and assigned to dollar,
    and we can use $ instead of window.JQuery (this is what jquery internally does!)


    - frameworks use this technique so that program and library function 
    or variable names don't conflict.

    Dependency Injection (DI) is a Design pattern which implements Inversion of Control (IoC)
*/


// IIFE below is executed only once, then we use 'get()' and 'increment()' functions
var counter = (function () {
    let i = 0; // local variable which can be used to track of counter! (we dont require global variable)
    return {

        // 'get()' and 'increment()' are closure
        get: function () {
            return i;
        },
        increment: function () {
            ++i;
        }
    }

    /* CLOSURE : closure is a inner function that has access to outer function's variables, it's own variables and global variables. */
})();

console.log(counter); // returns the inner expressions!
counter.increment();
counter.increment();
console.log('IIFE counter : ' + counter.get());


/*
splice(index, numberOfItemsFromIndex, Optional - add item in that gap)
*/