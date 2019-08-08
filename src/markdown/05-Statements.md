---
title: "Statements"
date: "2019-08-03"
image: "https://source.unsplash.com/150x150/?welcome"
keywords: "js, tutorial"
---

# 05. Statements

Contents

---

Example set of statements:

    var x, y, z; //Statement 1
    var 
    	a,
    	b,
    	c
    ; //Statement 2
    x = 5; //Statement 3
    c = 6; //Statement 4
    z = x + c //Statement 5

## Javascript Programs

- A **program** is  list of "instructions" to be "executed".
- In a programming language, these instructions are called **statements**.
    - A **Javascript program** is a list of programming **statements**.

In HTML, **Javascript programs** are "executed" by the web browser.

## Javascript Statements

Javascript statements are composed of:

- Values
- Operators
- Expressions
- Keywords
- Comments

Javascript statements are executed in the same order that they are written, one by one.

## Semicolons

- Semicolons separate Javascript statements.
- Semicolons belong at the end of each executable statement.
- When separated by semicolons, multiple statements on one line are allowed:

    a = 5; b = 6; c = a + b;

Although semicolons are not required, they are best practice.

## White Space

Javascript ignores multiple spaces. You can add white space to your script to structure it and make it more readable.

It is good practice to put spaces around operators:

    var x = y + z;

## Line Length and Line Breaks

- For best readability, programmers often like to avoid code lines longer than 80 characters.
- If a Javascript statement doesn't fit one line, the best place to break it is after an operator:

    doument.getEementById("demo").innerHTML =
    "Hello Dolly!";

## Code Blocks

Javascript statements can be grouped inside curly braces or brackets: `{...}`. These blocks define statements that are to be executed together.

    function myFunction() {
    	document.getElementById("demo1).innerHTML = "Hello Dolly!";
    	dcument.getElementById("demo2").innerHTML = "How are you?";
    }

## Javascript Keywords

Javascript statements often start with a **keyword** to identify the action to be performed.

Here is a list of common keywords:

[Copy of Javascript Keywords](https://www.notion.so/6dfb2bb083e942e396c99731c13514d2)