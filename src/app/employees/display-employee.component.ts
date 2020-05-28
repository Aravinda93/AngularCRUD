import { Component, OnInit, Input} from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
	@Input() 	employee:Employee;
	public selectedEmployeeId: number;
	//@Output()	notify: EventEmitter<Employee> = new EventEmitter<Employee>();

	constructor(private _route:ActivatedRoute) { }

	ngOnInit(): void {
		this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
	}

	/*private _employeeId: number;
	@Input()
	set employeeId(val: number){
		console.log('Previous Value '+ this._employeeId);
		console.log('Current Value '+ JSON.stringify(val));
		this._employeeId = val;
	}
	get employeeId():number{
		return this._employeeId;
	}

	private _employee: Employee;

	@Input()
	set employee(val: Employee){
		console.log('Previous Value '+ this._employee);
		console.log('Current Value '+ JSON.stringify(val));
		this._employee = val;
	}
	get employee():Employee{
		return this._employee;
	}*/
}
