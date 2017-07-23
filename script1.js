window.addEventListener("load", function() {

    var arr = [1, 2, 3, 4, 5, 6];
    var arr1 = [1, 2, 3, 'A', 'C', 'E', 5, 6];

    //Basic Set Operations union , intersection , diff ,without
    var union = document.getElementById('union');
    var intersection = document.getElementById('intersection');
    var diff = document.getElementById('diff');
    var without = document.getElementById('without');

    var unified = union.innerHTML = _.union(arr, arr1);
    var arrIntersect = intersection.innerHTML = _.intersection(arr, arr1);
    var complement = diff.innerHTML = _.difference(arr, arr1);
    var exclude = without.innerHTML = _.without(arr1, 'A', 'E ');
    console.log(unified, arrIntersect, complement, exclude);


    //first,last,initial,rest
    var basicArr = [1, 2, 3, 4, 5, 6];
    var first = document.getElementById('first');
    var last = document.getElementById('last');
    var initial = document.getElementById('initial');
    var rest = document.getElementById('rest');

    var firstElement = first.innerHTML = _.first(arr);
    var lastElement = last.innerHTML = _.last(arr);
    var intialElements = initial.innerHTML = _.initial(arr, 2); //leave last 2 elements 
    var restElements = rest.innerHTML = _.rest(arr, 2) //everything but first 2 elements
    console.log(firstElement, lastElement, intialElements, restElements);

    //pick , omit , keys , values 

    var pick = document.getElementById('pick')
    var omit = document.getElementById('omit')
    var keys = document.getElementById('keys')
    var values = document.getElementById('values');

    var pickObject = _.pick(fruits[0], 'taste');
    pick.innerHTML = pickObject.taste;
    var ommitObject = _.omit(fruits[1], 'taste');
    omit.innerHTML = ommitObject.name + ommitObject.price;
    var keysObject = keys.innerHTML = _.keys(fruits[0]);
    var valuesObject = values.innerHTML = _.values(fruits[1]);

    console.log(pickObject, ommitObject, keysObject, valuesObject);

    //extend,clone

    var extend = document.getElementById('extend');
    var clone = document.getElementById('clone');

    _.each(fruits, function(element, index, list) {
        _.extend(element, { healthy: true });
    })

    console.log(fruits);

    _.each(fruits, function(element, index, list) {
        var result = index + ':' + element.name + ',' +
            'taste:' + element.taste + ',' + 'price:' + element.price +
            ',' + 'serialNo:' + element.serialNo + 'healthy:' + element.healthy + '<br/>';
        extend.innerHTML = extend.innerHTML + result;
    })


    //Shallow copy using clone 

    /* Shallow and deep copy difference , 
    in shallow copy we copy the object without creating new memory refernce  , 
    in deep copy we copy the values and create new references ,
    in shallow copy if the value of the parent of the clone is changed , 
    the changed value is reflected in the cloned copy also , 
    but in deep copy if we change the master or the clone copy individually 
    then it will not update the reference for each other,
    cloning is a shallow copy , new object can be used to create a brand new object*/

    var clonedObject = _.clone(fruits[1]);

    clone.innerHTML = clonedObject.name + 'taste:' + clonedObject.taste + 'price' + clonedObject.serialNo + 'healthy:' + clonedObject.healthy;

    console.log(clonedObject);

});