function SeatReservation(name, selectedMeal){
	var self = this;
		self.name = name;
		self.meal = ko.observable(selectedMeal);
	}
function AppViewModel(){
	var self = this;
	self.firstName = ko.observable("Sandeep");
	self.lastName=ko.observable("Nalla");
	self.firstName2 = ko.observable("Sujith");
	self.lastName2=ko.observable("Kumar");
	
	self.fullName=ko.computed(function(){
		return self.firstName2()+" "+self.lastName2();
	},self);
	self.sb=ko.observable("Siva Naadh Bazi");
	self.capitalizefirstName = function(){
		var curr=self.sb();
		self.sb(curr.toUpperCase());
	};

	self.availableMeals = 
	[
		{mealName:"Veg Biryani", price: 40},
		{mealName:"Egg Biryani", price: 50},
		{mealName:"Chicken Biryani", price: 100}
	];
	self.seats=ko.observableArray([
		new SeatReservation("Sandeep",self.availableMeals[2]),
		new SeatReservation("Bazi",self.availableMeals[1]),
		new SeatReservation("Sujith",self.availableMeals[0])
	]);
	self.stds = ko.observableArray([{rollno:1,std_name:"Ashok"},{rollno:2,std_name:"Chandu"}]);
	self.stdid_new = ko.observable(3);
	self.stdname_new = ko.observable("Makanth");
	self.addStud = function(){
		self.stds.push({rollno: self.stdid_new(),std_name: self.stdname_new()});
	};
	self.removeStd = function(std){
		self.stds.remove(std);
	};
	self.removePass = function(seat){
		self.seats.remove(seat);
	};
	self.folders = ['Inbox','Archive','Sent','Draft','Spam'];
	self.chosenFolderId = ko.observable();
	self.chosenFolderData = ko.observable();
	self.chosenMailData = ko.observable();

	self.goToFolder = function(folder){
		self.chosenFolderId(folder);
		self.chosenMailData(null);
		$.get('http://learn.knockoutjs.com/mail',{folder:folder},self.chosenFolderData);
	};
	self.getMail = function(mail){
		self.chosenFolderId(mail.folder);
		self.chosenFolderData(null);
		$.get('http://learn.knockoutjs.com/mail',{mailId:mail.id},self.chosenMailData);
	};
	self.goToFolder('Inbox')
}


ko.applyBindings(new AppViewModel());