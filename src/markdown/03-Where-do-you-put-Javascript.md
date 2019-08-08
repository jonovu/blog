---
title: "Where do you put Javascript?"
date: "2019-08-02"
image: "https://source.unsplash.com/150x150/?welcome"
keywords: "js, tutorial"
---

# 03. Where do you put Javascript?

Contents

---

## The `<script>` tag

In HTML, Javascript code must be inserted between the `<script>` and `</script>` tags.

    <script>
    document.getElementbyId("demo").innerHTML = "My first Javascript";
    </script>

Old Javascript examples may use `type="text/javascript"` although this is not necessary. Javascript is the default scripting language in HTML.

## Javascript Functions and Events

A Javascript **function** is a block of javascript code that can be executed when "called".

- An example of a function is when an **event** occurs, like when the user clicks a button.

## Javascript in `<head>` or `<body>`

You can place any number of scripts in an HTML document. They belong in either or both the `<head>` and `<body>` sections.

## Javascript in `<head>`

In this example, a `function` is placed in the `<head>`. The function is invoked when a button is clicked.

    <head>
    	<script>
    	function myFunction() {
    		document.getElementById("demo").innerHTML = "Paragraph changed.";
    	}
    	</script>
    </head>
    <body>
    	<p id="demo">A Paragraph.</p>
    	<button type="button" onclick="myFunction()">Try clicking this.</button>
    </body>

## Javascript in `<body>`

In this example,  a `function` is placed in the `body`.

    <body>
    	<p id="demo">A Paragraph.</p>
    	<button type="button" onclick="myFunction()">Try clicking this.</button>
    
    	<script>
    	function myFunction() {
    		document.getElementById("demo").innerHTML = "Paragraph changed.";
    	}
    	</script>
    </body>

## External Javascript

Scripts can be placed in external files. This is useful when the same code is used on multiple web pages.

- Javascript files have the file extension **.js**.

    <script src="myScript.js"></script>

The script will behave as where the `script` tags are located in the HTML.

External scripts cannot read `<script>` tags.

- External scripts can be referenced with their full url: 
`<script src="[https://www.w3schools.com/js/myScript1.js](https://www.w3schools.com/js/myScript1.js)"></script>`

## Advantages of using External Javascript

Placing scripts in external files have the following advantages:

- It separates the HTML and code.
- It makes HTML and JS easier to read and maintain.
- Cached JS can speed up page loads.