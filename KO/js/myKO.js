function SeatReservation(name, selectedMeal){
	var self = this;
		self.name = name;
		self.meal = ko.observable(selectedMeal);
	}
function AppViewModel(){
	var jujupi = this;
	jujupi.firstName = ko.observable("Sandeep");
	jujupi.lastName=ko.observable("Nalla");
	jujupi.firstName2 = ko.observable("Sujith");
	jujupi.lastName2=ko.observable("Kumar");
	
	jujupi.fullName=ko.computed(function(){
		return jujupi.firstName2()+" "+jujupi.lastName2();
	},jujupi);
	jujupi.sb=ko.observable("Siva Naadh Bazi");
	jujupi.capitalizefirstName = function(){
		var curr=jujupi.sb();
		jujupi.sb(curr.toUpperCase());
	};

	jujupi.availableMeals = 
	[
		{mealName:"Veg Biryani", price: 40},
		{mealName:"Egg Biryani", price: 50},
		{mealName:"Chicken Biryani", price: 100}
	];
	jujupi.seats=ko.observableArray([
		new SeatReservation("Sandeep",jujupi.availableMeals[2]),
		new SeatReservation("Bazi",jujupi.availableMeals[1]),
		new SeatReservation("Sujith",jujupi.availableMeals[0])
	]);
	jujupi.stds = ko.observableArray([{rollno:1,std_name:"Ashok"},{rollno:2,std_name:"Chandu"}]);
	jujupi.stdid_new = ko.observable(3);
	jujupi.stdname_new = ko.observable("Makanth");
	jujupi.addStud = function(){
		jujupi.stds.push({rollno: jujupi.stdid_new(),std_name: jujupi.stdname_new()});
	};
	jujupi.removeStd = function(std){
		jujupi.stds.remove(std);
	};
	jujupi.removePass = function(seat){
		jujupi.seats.remove(seat);
	};
}


ko.applyBindings(new AppViewModel());



// function ReservationsViewModel(){
// 	jujupi.availableMeals = [{mealName:"Veg Biryani", price: 40},{mealName:"Egg Biryani", price: 50},{mealName:"Chicken Biryani", price: 100}];
// 	jujupi.seats=ko.observableArray([
// 		new SeatReservation("Sandeep",jujupi.availableMeals[2]),
// 		new SeatReservation("Bazi",jujupi.availableMeals[1]),
// 		new SeatReservation("Sujith",jujupi.availableMeals[0])
// 	]);
// }
//ko.applyBindings(new ReservationsViewModel());