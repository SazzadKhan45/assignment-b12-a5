1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?


### getElementById(id)

    Purpose: Selects a single element by its ID.

    Returns: A single Element object or null if not found.

    (getElementById -->ID only -->Element or null -->Static Single).

### getElementsByClassName(className)

    Purpose: Selects all elements with a given class name.

    Returns: A live HTMLCollection of elements.

    (getElementsByClassName -->Class only -->HTMLCollection -->Live -->Multiple).

### querySelector(selector)

    Purpose: Selects the first element that matches a CSS selector.

    Returns: A single Element or null if not found.

    (querySelector -->CSS selector -->Element or null -->Static -->Single).

### querySelectorAll(selector)

    Purpose: Selects all elements that match a CSS selector.

    Returns: A static NodeList of elements.

    (querySelectorAll -->CSS selector -->NodeList -->Static -->Multiple).

2. How do you **create and insert a new element into the DOM**?
Answer :- To create and insert a new element into the DOM, you generally follow three main steps:
    * Create the element(Use document.createElement() to create a new HTML element.)
    *Customize the element (You can add text, attributes, classes, styles, etc.)
    *Insert the element into the DOM (appendChild(), prepend(), insertBefore(), after() / before() ).

3. What is **Event Bubbling** and how does it work?
Answer :- Event bubbling is a behavior in the DOM where an event that occurs on a child element "bubbles up" (propagates) through its parent elements — all the way up to the <html> element.
    *Capturing phase (top → down) ← rarely used
    *Target phase (event reaches target element)
    *Bubbling phase (bottom → up) ← most common.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer :- Event delegation is a technique where you attach a single event listener to a parent element, and use it to handle events for multiple child elements, even if those children are added later.

        ##Use Cases

        ## Clicks on items in a list or table

        ## Toggling menus or dropdowns

        ## Handling form inputs dynamically

        ## Drag & drop elements

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer :- preventDefault()
    Prevents the default browser action (example- following a link, submitting a form).

    stopPropagation()
    Stops the event from bubbling up to parent elements.
