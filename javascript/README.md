# Java Script and html css 
#CSS

In this example we will review JavaScripting. Javascript is Object oriented programing language. Which mostly used fronted or creating effects on the web browser (your page).

## Create variable on the JavaScript.
This example how to create variable. To use this variable on the html code we have to crate script container. 
``` 
var myvariable  = 'Somesting'; 
```


Script example looks like this. Script container will content our JavaScript make sure you put inside this script container.
```
<script>
var myvariable  = 'Somesting'; 

// You all JavaScript code 
</script>
```


We haven't use this variable anywhere. Let's try to show on the console inside our browser. Code will look like:
```
var myvariable  = 'Somesting'; 
console.log(myvariable);
```



# Work with array or list in JavaScript.
We will create array which will content empty array. let's call it `myList`.
```
var myList = [];
```


### Adding item to the array 

We will add string to our array. To add we will use `push()` method.  This method can add one or more item to the array. 
``` 
var myList = [];
myList.push('Apple');
myList.push('Banana', 'Orange', 'kiwi');
console.log(myList);
``` ["Apple", "Banana", "Orange", "kiwi"]

### Deleting item from the array

`pop()` method will delete last item from array. example bellow
```
var myList = ["Apple", "Banana", "Orange"];
myList.pop();
console.log(myList); 
```


### Splice method which can be used for adding or deleting item from Array

Adding two item to the Array . Example bellow .
```
var myList = ["Apple", "Banana", "Orange"];
myList.splice(2, 0, "Lemon", "Kiwi");
```
The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.







