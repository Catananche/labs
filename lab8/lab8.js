	function Employee(name, surname, baseSalary, experience){
		this.name = name;
		this.surname = surname;
		this.baseSalary = baseSalary;
		this.experience = experience;
	};

	Employee.prototype.getSalary = function() {
		let countedSalary  = this.baseSalary;
		if (this.experience >= 2 && this.experience < 5) {
			countedSalary  = countedSalary  + 200;
		}
		else if (this.experience >= 5) {
			countedSalary  = countedSalary  * 1.2 + 500;
		}
		return countedSalary ;
	}

	Employee.prototype.giveSalary  = function() {
		return document.write("<p>" + this.name + " " + this.surname + " отримав " + this.getSalary() + " &#8362 " + "</p>")
	}

	function Developer(name, surname, baseSalary, expirience){
		Employee.call(this, name, surname, baseSalary, expirience);
	}

	Developer.prototype = Object.create(Employee.prototype);

	function Designer(name, surname, baseSalary, expirience, effCoeff){
		Employee.call(this, name, surname, baseSalary, expirience);
		this.effCoeff = effCoeff;
	};

	Designer.prototype = Object.create(Employee.prototype);

	Designer.prototype.getSalary = function() {
		let countedSalary  = Employee.prototype.getSalary.call(this);
		return countedSalary  * this.effCoeff;
	}

	function Manager(name, surname, baseSalary, expirience, team){
		Employee.call(this, name, surname, baseSalary, expirience);
		this.team = team;
	};

	Manager.prototype = Object.create(Employee.prototype);

	Manager.prototype.getSalary = function() {
		let countedSalary  = Employee.prototype.getSalary.call(this);
    
		if (this.team.length >= 5 && this.team.length < 10) {
			countedSalary  = countedSalary  + 200;
		}
		else if (this.team.length >= 10) {
			countedSalary  = countedSalary  + 300;
		}

		let fw = 0;
		for(key in this.team){
			if(this.team[key] instanceof Developer ){
				fw++;
			}
		}
		if (fw > (this.team.length / 2)) {
			countedSalary   *= 1.1;
		}
		return countedSalary ;
	}

	function Department() {
		this.managers = [];
	}

	Department.prototype.giveSalary = function() {
		this.managers.forEach( function (manager){
			manager.giveSalary();
			manager.team.forEach(function (empls)  {
			empls.giveSalary();
			});
		});
	}

	function main() {
		const Dev1 = new Developer("First", "Emp", 500, 1);
		const Dev2 = new Developer("Second", "Emp", 500, 3);
		const Dev3 = new Developer("Third", "Emp", 500, 19);
		const Dev4 = new Developer("Fourth", "Emp", 500, 5);
		const Des1 = new Designer("Fifth", "Emp", 1000, 1, 0.2);
		const Des2 = new Designer("Sixth", "Emp", 1000, 13, 0.8);
		const manager = new Manager("Seventh", "Emp", 1500, 30, [Dev1, Dev2, Dev3, Dev4,Des1,Des2]);
  
		const departmen = new Department();
		departmen.managers.push(manager);
		departmen.giveSalary();
	}

	main();