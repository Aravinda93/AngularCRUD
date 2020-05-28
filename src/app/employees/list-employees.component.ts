import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
import { EmployeeFilterPipe } from './employee-filter.pipe';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

	employees:Employee[];
	searchTerm: string;
	//employeeToDisplay: Employee;
	//private arrayIndex = 1;
	
	constructor(private _employeeService: EmployeeService, private _router:Router) { }

	ngOnInit(): void {
		this.employees = this._employeeService.getEmployees();
		//this.employeeToDisplay = this.employees[0];
	}

	onClick(employeeId: number){
		this._router.navigate(['/employees',employeeId]);
	}

	/*
	nextEmployee(): void{
		if(this.arrayIndex <= 2)
		{
			this.employeeToDisplay = this.employees[this.arrayIndex];
			this.arrayIndex++;
		}
		else 
		{
			this.employeeToDisplay = this.employees[0];
			this.arrayIndex = 1;
		}
	}*/
}
