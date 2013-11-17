<h1>Linq</h1>

IEnumerable Implementation for JavaScript. I based this on 
<a href="http://msdn.microsoft.com/en-us/library/system.linq.enumerable_methods( v=vs.110 ) .aspx">Microsoft's IEnunermable documentation</a>.
I've found this really handy when doing back-end programming in C# and decided I'd like something like this for JavaScript. 
It doesn't use C#'s implemetation of lambda functions so developers still need to have some understanding of JavaScript's 
functions.

<h2>Implementation Examples</h2>
How thins work and examples. All functions should be function( element ) { [some execution] return [some result];} unless otherwise
specified. 
<br>
Variables in brackets are optional.
<br>
To use this,  create an array and put it through the Linq function. var linqObj = Linq( AnArray ) ;
<h4>Any( [fn] )  - Boolean</h4>
Returns true or false based on whether any element returns true for the function fn.
<h4>Average( [fn] )  - Number</h4>
Calculates the average of the array. If there a function is passed,  it uses the value returned by the function to calculate the average.
<h4>Concat( array )  - Linq</h4>
Takes an array and concatenates it to the end of the Linq object's array and returns a new Linq object.
<h4>Contains( object[, compareFn] )  - Boolean</h4>
<h4>Contains( object, [fn( element, object ) ] )  - Boolean</h4>
<h4>Distinct( [fn] )  - Linq</h4>
<h4>ElementAt( number )  - Object</h4>
<h4>ElementAtOrDefault( number )  - Object</h4>
<h4>Except( linq[, fn] )  - Linq</h4>
<h4>First( [fn] )  - Object</h4>
<h4>FirstOrDefault( [fn] )  - Object</h4>
<h4>Intersect( [fn] )  - Linq</h4>
<h4>Join( array, outerSelectorFn, innerSelectorFn, resultFn&lt;innerElement, outerElement&gt;[, compareFn] )  - Linq</h4>
<h4>Last( [fn] )  - Object</h4>
<h4>LastOrDefault( [fn] )  - Object</h4>
<h4>Max( [fn] )  - Number</h4>
<h4>Min( [fn] ) - Number</h4>
<h4>OrderBy( [fn] )  - Linq</h4>
<h4>Reverse(  )  - Linq</h4>
<h4>Select( [fn] )  - Linq</h4>
<h4>SelectMany( [fn] )  - Linq</h4>
<h4>Single( [fn] )  - Object</h4>
<h4>SingleOrDefault( [fn] )  - Object</h4>
<h4>Skip( number )  - Linq</h4>
<h4>SkipWhile( [fn] )  - Linq</h4>
<h4>Sum( [fn] )  - Number</h4>
<h4>Take( number ) </h4>
<h4>TakeWhile( [fn] )  - Linq</h4>
<h4>Union( array, [fn( element, inputArrayElement ) ] )  - Linq</h4>
<h4>Where( [fn] )  - Linq</h4>