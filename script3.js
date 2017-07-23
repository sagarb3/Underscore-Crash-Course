window.addEventListener("load", function(e) {


	//iteration function 

	_.times(4,function(index){
		console.log(index);
	})

	//Random Numbers

	console.log('Random from 0 to 10' , _.random(10));
	console.log('Random from 10 to 20',_.random(10,20));

	console.log('ID with no prefix'+ _.uniqueId());
	console.log('ID with no prefix'+ _.uniqueId());
	console.log('ID with no prefix'+ _.uniqueId());
	console.log('ID with no prefix'+ _.uniqueId());


	// Binding 

	 var obj = {
	 	id: 1 ,
	 	name : 'Sagar',
	 	lName : 'Bhattacharya'
	 };

	 function print_data(){
	 	console.log(this.id+ '' + this.name);
	 }

	 var ref = _.bind(print_data,obj);
	 ref();


	 //Creating own underscore function 

	 _.mixin({
	 	hello : function(str){
	 		return str.replace(str,'Hello ' +str);
	 	}
	 });

	 console.log(_.hello('Sagar'));

});
