window.addEventListener("load", function() {

	//Number of Object 

	var fruitsNum = document.getElementById('fruitsNum');
	fruitsNum.innerHTML = 'Number of fruits: ' + _.size(fruits);

	var fruitsContainer = document.getElementById('fruitsContainer');

	//iterating Objects
	_.each(fruits,function(elem,index,list){
		var result = index + ' '+elem.name + ' ' +elem.taste + ' ' +elem.price + ' ' + elem.serialNo + '<br/>';
		fruitsContainer.innerHTML = fruitsContainer.innerHTML + result;
	})

	//find , where , contain 

	var fruitFind = document.getElementById('fruitFind');
	var element = _.find(fruits,function(elem){
		if(elem.name == 'Groundnut'){
			return true;
		}
	})

	console.log(element);
	fruitFind.innerHTML = JSON.stringify(element);

	var fruitWhere = document.getElementById('fruitWhere');
	var element = _.findWhere(fruits,{name:'Mango',taste:'sweet'});
	fruitWhere.innerHTML = JSON.stringify(element);	

	var fruitPluck =document.getElementById('fruitPluck');

	var pluckObj = _.pluck(fruits,'price');
	console.log(pluckObj);
 
	var element = _.contains(pluckObj,'12'); // returns true 
	var element2 = _.contains(pluckObj,'30'); // returns false 
	fruitPluck.innerHTML = JSON.stringify(element); 
	console.log(element,element2);


	//sorting

	var sortFruits = document.getElementById('sortFruits');

	function sortByPrice(item){
		return item.price;
	}

	var sortedFruits = _.sortBy(fruits,sortByPrice);
	console.log(sortedFruits)

	sortFruits.innerHTML = JSON.stringify(sortedFruits);

	//Shuffle 
	var shuffleFruits = document.getElementById('shuffleFruits');
	shuffleFruits.innerHTML =JSON.stringify(_.shuffle(fruits));

	var mapFruits = document.getElementById('mapFruits');
	var with_A_fruits = _.map(fruits,fetchFruitsStartsWithA);

	mapFruits.innerHTML = JSON.stringify(with_A_fruits);

	function fetchFruitsStartsWithA(item){
		if(item.name.charAt(0)=='A'){
			return item; 
		} else {
			return '';
		}
	}

	//filter and reject 

	var filterFruits = document.getElementById('filterFruits');

	var result = _.filter(fruits,findFruits);

	function findFruits(element){
		return parseInt(element.serialNo)%3===0;
	}

	filterFruits.innerHTML = JSON.stringify(result);

	var rejectFruits = document.getElementById('rejectFruits');

	var rejectResult = _.reject(fruits,findFruits);
	rejectFruits.innerHTML = JSON.stringify(rejectResult);

	console.log(_.every(fruits,findFruits)); // return true if all true ;
	console.log(_.some(fruits,findFruits)); // return true if any element of json satisy function




});

