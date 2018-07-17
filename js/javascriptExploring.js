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
h1_id_header_title.style.borderBottom = "3px solid #337ab7";

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