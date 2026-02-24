1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:    getElementByID is direct select one element with unique ID and return single element.
        getElementByClassName is select by className and it is return an html collection.  
        querySelector is select first one from multiple elements and its more flexible then others.
        querySelectorAll is select all matching elements and return a nodeList.

2. How do you create and insert a new element into the DOM?

Ans:    const div = document.createElement('div');
        div.innerText = "FrontEnd Developer";
        div.className = "card";
        document.body.appendChild(div);

3. What is Event Bubbling? And how does it work?

Ans:    When a event clicked on a child element it move up to parent element. because parent element listen child event. this called event bubbling. like: Button > div > body > document

4. What is Event Delegation in JavaScript? Why is it useful?

Ans:    Event Delegation means don't adding event listener to many child elements, do on parent, its work perfect. its more useful for cleaner code, easy to maintain and add few event with better performance.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:    preventDefault > it use for browser default behavior like form submission etc.
        stopPropagation > it stop event bubbling to parent element.