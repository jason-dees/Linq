<h1>Linq</h1>

IEnumerable Implementation for JavaScript. I based this on 
<a href="http://msdn.microsoft.com/en-us/library/system.linq.enumerable_methods(v=vs.110).aspx">Microsoft's IEnunermable documentation</a>.
I've found this really handy when doing back-end programming in C# and decided I'd like something like this for JavaScript. 
It doesn't use C#'s implemetation of lambda functions so developers still need to have some understanding of JavaScript's 
functions.

<h2>Implementation Examples</h2>
How thins work and examples. All functions should be function(element){ [some execution] return [some result];} unless otherwise
specified. 
<br>
Variables in brackets are optional.
<br>
To use this, create an array and put it through the Linq function. var linqObj = Linq(AnArray);
<h4>Any([fn])<h4>
<b>Boolean</b><br>
Returns true or false based on whether any element returns true for the function fn.
<h4>Average([fn])</h4>
<b>Number</b><br>
Calculates the average of the array. If there a function is passed, it uses the value returned by the function to calculate the average.
<h4>Concat(array)</h4>
<b>Linq</b><br>
Takes an array and concatenates it to the end of the Linq object's array and returns a new Linq object.