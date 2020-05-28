import { Injectable } 	from '@angular/core';
import { Employee } 	from '../models/employee.model';

@Injectable()
export class EmployeeService{
	private listEmployees: Employee[] = [

		{
			id:					1,
			name:				'Name1',
			gender:				'Male',
			contactPreference:	'Email',
			email:				'name1@name.com',
			dateOfBirth:		new Date('05/20/1995'),
			department:			'1',
			isActive:			true,
			photoPath:			'assets/images/name1.png',
			password:			'',
			confirmPassword:	''
		},
		{
			id:					2,
			name:				'SV',
			gender:				'Female',
			contactPreference:	'Phone',
			phoneNumber:		19949949948884,
			dateOfBirth:		new Date('04/20/1990'),
			department:			'2',
			isActive:			true,
			photoPath:			'assets/images/name2.png',
			password:			'',
			confirmPassword:	''
		},
		{
			id:					3,
			name:				'Jaggesh',
			gender:				'Male',
			contactPreference:	'Email',
			email:				'vivek@vivek.com',
			dateOfBirth:		new Date('02/29/1992'),
			department:			'3',
			isActive:			false,
			photoPath:			'assets/images/name3.png',
			password:			'',
			confirmPassword:	''
		}

	];

	getEmployees(): Employee[]{
		return this.listEmployees;
	}

	getEmployee(id: number): Employee{
		return this.listEmployees.find(e=>e.id === id);
	}

	save(employee: Employee){
		this.listEmployees.push(employee);
	}
}