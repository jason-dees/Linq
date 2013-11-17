var Linq = function(arr){
    if(arr.IsEnumerable){return arr;}
    arr.IsEnumerable = true;
	var generic_fn = function(fn, eachFn){
		fn = fn || function(element){return element;};
		return return_linq_fn(eachFn);
	}
	var return_linq_fn = function(eachFn){
		var retArray = [];
		arr.forEach(eachFn.bind(this,retArray));
		return Linq(retArray);
	}
	arr.Any = function(fn){
		return generic_fn(fn,function(arry,element){
			if(fn(element)){
				array.push(element);
			}
		});
	}
	arr.Average = function(fn){
		var total = 0;
		arr.forEach(function(element, index){
			total += fn(element);
		});
		return total/arr.length;
	}
	arr.Concat = function(otherLinq){
		return Linq(arr.concat(otherLinq));
	}
	arr.Contains = function(obj,compareFn){
        var strObj = JSON.stringify(obj);
        compareFn = compareFn || function(element,obj){ return strObj == JSON.stringify(element);}
        for(var i = 0; i<arr.length; i++){
            var element = arr[i];
            if(compareFn(element,obj)){return true; }
        }
        return false;
	}
	arr.Count = function(fn){//Count of elements that match function
        if(fn == null){return arr.length;}
        var result = generic_fn(fn,function(array, element){
            if(fn(element)){
                array.push(element);
            }
        });
        return result.length;
    }
	arr.Distinct = function(fn){//Returns distinct elements based on some quantifier
        var fnArray = Linq([]);
        return generic_fn(fn, function(array,element){
            var fnEvaled = fn(element);
            if(!fnArray.Contains(fnEvaled)){
                fnArray.push(fnEvaled);
                array.push(element)
            }
        });
	}
	arr.ElementAt = function(index){
		return arr[index];
	}
	arr.ElementAtOrDefault = function(index){
		return arr.ElementAt(index);
	}
	arr.Except = function(otherArray,compareFn){
       otherArray = Linq(otherArray);
       compareFn = compareFn || function(element){return !otherArray.Contains(element);};
       return generic_fn(function(element){},function(array,element){
           if(compareFn(element)){array.push(element);}
       });
    }
	arr.First = function(fn){ 
        fn = fn || function(element){return true;}
        for(var i =0; i<arr.length; i++){
            var element = arr[i];
            if(fn(element)){return element;}
        }
        return null;
    }
	arr.FirstOrDefault = function() { return arr.ElementAtOrDefault(0);}
	arr.GroupBy = function(){console.log("Not Implemented");}
	arr.GroupJoin = function(){console.log("Not Implemented");}
	arr.Intersect = function(otherArray){
       otherArray = Linq(otherArray);
       compareFn = compareFn || function(element){return otherArray.Contains(element);};
       return generic_fn(function(element){},function(array,element){
           if(compareFn(element)){array.push(element);}
       });
    }
	arr.Join = function(inner,outerSelectorFn, innerSelectorFn, resultFn){
        inner = Linq(inner);
        var finalData = [];
        var outerSelect = arr.Select(outerSelectorFn);
        var innerSelect = arr.Select(innerSelectorFn);
        outerSelect.forEach(function(a,indexA){
            var outerVal = outerFn(a);
            innerSelect.forEach(function(b,indexB){
                if(a == b){
                    finalData.push(resultFn(arr[indexA], inner[IndexB]));
                }
            });
        });
        return Linq(finalData);
    }
	arr.Last = function(fn){
        fn = fn || function(element){return true;}
        for(var i =arr.length-1; i>-1; i--){
            var element = arr[i];
            if(fn(element)){return element;}
        }
        return null;
    }
	arr.LastOrDefault = function(fn){
        if(arr.length >0){
            return arr.Last(fn);
        }
    }
	arr.Max = function(fn){
        return generic_fn(fn,function(array, element){
            if(array.length ==0){array.push[fn(element)];}
            else{
                var first = array[0];
                var newValue = fn(element);
                if(first > newValue){array[0] = newValue;}
            }
        })[0];
    }
	arr.Min = function(fn){
        return generic_fn(fn,function(array, element){
            if(array.length ==0){array.push[fn(element)];}
            else{
                var first = array[0];
                var newValue = fn(element);
                if(first < newValue){array[0] = newValue;}
            }
        })[0];
    }
	arr.OrderBy = function(fn){
		fn = fn || function(element){return element;};
		var retArray = [];
		var sort_fn = function(a,b){
			var fnA = fn(a),fnB = fn(b);
			if(fnA>fnB){return 1;}
			if(fnA<fnB){return -1;}
			return 0;
		}
		retArray = arr.sort(sort_fn);
		return Linq(retArray);
	}
	arr.Reverse = function(){
        return Linq(arr.reverse());
    }
	arr.Select = function(fn){
		return generic_fn(fn,function(array,element){
			array.push(fn(element));
		});
	}
	arr.SelectMany = function(fn){
		return generic_fn(fn,function(array, element){
			var propArray = fn(element);
			if(propArray.length != null){
				propArray.forEach(function(ele,i){array.push(ele);});
			}
		});
	}
	arr.Single = function(fn){
        var finalArray = generic_fn(fn,function(array, element){
            if(fn(element)){
                array.push(element);
            }
        });
        if(finalArray.length>1 || finalArray.length ==0){
            var message = "No elements matched the condition.";
            if(finalArray.length>1){message = "More than one value met the conditions.";}
            throw{
                name: "InvalidOperationException",
                level: "Bad Exception",
                message: message
            };
        }
        return finalArray[0];
    }
	arr.SingleOrDefault = function(fn){
        return arr.Single(fn);
    }
	arr.Skip = function(n){
		return Linq(arr.slice(n));
	}
	arr.SkipWhile = function(fn){
        return generic_fn(fn, function(array, element){
            if(!fn(element)){array.push(element);}
        });
	}
	arr.Sum = function(fn){
        fn = fn || function(element){return element;}
		var total = 0;
        for(var i =0; i<arr.length; i++){
            total += fn(arr[i]);
        }
        return total;
	}
	arr.Take = function(n){
		return Linq(arr.slice(0,n));
	}
	arr.TakeWhile = function(fn){
        return generic_fn(fn, function(array, element){
            if(fn(element)){array.push(element);}
        });
    }
	arr.Union = function(otherArray,equalsFn){
        var finalArray = Linq(arr.slice(0));
        var testFn = function(element,compareArray){
            return compareArray.Contains(element,equalsFn);    
        }; 
        otherArray = Linq(otherArray);
        for(var i = 0; i< otherArray.length; i++){
            if(!testFn(otherArray[i],finalArray)){
                finalArray.push(otherArray[i]);
            }
        }
        return finalArray;
    }
	arr.Where = function(fn){
		return generic_fn(fn,function(array,element){
			if(fn(element)){
				array.push(element);
			}
		});
	};
	return arr;	
}
