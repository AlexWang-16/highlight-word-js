# highlight-word-js
A function that takes a search word from user, processes words in an HTML paragraph and returns a HTML span with a CSS class that highlights the searched word.

This is based on [a question asked on stack overflow](https://stackoverflow.com/questions/48251618/how-to-correctly-highlight-words-using-original-javascript/48252858#48252858). It was a fun exercise to practice JavaScript and refresh my memory in regular expression.

Notice in the code, I've used 2 types of regular expression declaration. There's one with `/` literals while the other creates an object instance. This is done deliberately to optimize processing time. With the `/` literals, the compiler optimizes the code at compile time. On the other hand, creating an instance of RegExp will cause the compiler to process that expression during run-time. If the regular expression is known ahead of time, it is more efficent to use the literals to compile the code ahead of time. If the regular expression depends on user input, the run-time method is preferred.

## Requirements
1. Node JS / Any modern browser capable of loading ES2015 JavaScript

## Usage
Node JS
1. Clone the repository
2. Navigate to the folder
3. Execute `node highlight_word.js`
