function AppViewModel(){
	this.firstName = ko.observable("Sandeep");
	this.lastName=ko.observable("Nalla");
	this.firstName2 = ko.observable("Sujith");
	this.lastName2=ko.observable("Kumar");
	
	this.fullName=ko.computed(function(){
		return this.firstName2()+" "+this.lastName2();
	},this);
	this.sb=ko.observable("Siva Naadh Bazi");
	this.capitalizefirstName = function(){
		var curr=this.sb();
		this.sb(curr.toUpperCase());
	};

	function SeatReservation(name, selectedMeal){
		this.name = name;
		this.meal = ko.observable(selectedMeal);
	}
	this.availableMeals = [{mealName:"Veg Biryani", price: 40},{mealName:"Egg Biryani", price: 50},{mealName:"Chicken Biryani", price: 100}];
	this.seats=ko.observableArray([
		new SeatReservation("Sandeep",this.availableMeals[2]),
		new SeatReservation("Bazi",this.availableMeals[1]),
		new SeatReservation("Sujith",this.availableMeals[0])
	]);
	this.stds = ko.observableArray([{rollno:1,std_name:"Ashok"},{rollno:2,std_name:"Chandu"}]);
	this.stdid_new = ko.observable(3);
	this.stdname_new = ko.observable("Makanth");
	this.addStud = function(){
		this.stds.push({rollno: this.stdid_new(),std_name: this.stdname_new()});
	};
	this.removeStd = function(std){
		this.stds.remove(std);
	};
}


ko.applyBindings(new AppViewModel());



// function ReservationsViewModel(){
// 	this.availableMeals = [{mealName:"Veg Biryani", price: 40},{mealName:"Egg Biryani", price: 50},{mealName:"Chicken Biryani", price: 100}];
// 	this.seats=ko.observableArray([
// 		new SeatReservation("Sandeep",this.availableMeals[2]),
// 		new SeatReservation("Bazi",this.availableMeals[1]),
// 		new SeatReservation("Sujith",this.availableMeals[0])
// 	]);
// }
//ko.applyBindings(new ReservationsViewModel());