'use strict';

document.addEventListener("DOMContentLoaded", function(){
	// 1) Retrieve the "button" elements from the DOM and store them in a variable

	let press = document.getElementsByTagName("button");

	// 2) Create a function that retrieves the "data-color" attribute's value of
	//    the pre-existing "this" object, and set the body's background color to
	//    the new color value

	function changecolor(){
		let color= this.getAttribute("data-color")
		document.querySelector("body").style.backgroundColor = color
		console.log()
	};

	
	// 3) Use either the Array.forEach method or a for...of loop to attach a mouse
	//    click event listener to each "button" element in your variable from (1),
	//    and supply it with (2)'s function as the callback function

	for( let button of press){
		button.addEventListener("click", changecolor);
	}

	// 4) Create a new "Person" object constructor function that:
	//    - Takes a name and an age as parameters and stores them on the object
	//      as properties using the "this" keyword (you can name the properties
	//      the same as the parameters or give them unique identifiers)
	//    - Also using the "this" keyword, add a method to your object called
	//      "speak" which does the following:
	//      - Uses another "this" keyword to console log the "Person" object's
	//        own name and age

	function person(name, age){
		this.name = name;
		this.age = age;
		this.speak = function (){
			this.name;
			this.age;
			console.log(this.name, this.age);
		};

	};



	// 5) Create two different "Person" objects with different names and ages and
	//    store them in an array

	let mary = new person ("mary", 78);
	mary.speak()
	let craig = new person ("craig", 37);
	craig.speak()
	// 6) Loop through the array calling "speak" on each "Person" object in
	//    (5)'s array

	

	
});

