console.log('js');

$(document).ready(readyNow);

// declare empty array to input new employee vals
let employeeInfo = [];
// declare variable to hold monthly cost
// let costMonthly = 

// create a constructor to create new object for each employee
class Employee {
    constructor( firstName, lastName, id, title, annualSalary ){
    this.firstName = firstName,
    this.lastName = lastName,
    this.id = id,
    this.title = title,
    this.annualSalary = annualSalary
    }
} // end Employee class

function addEmployee() {
    let employeeFirstName = $('#firstNameInput').val();
    let employeeLastName = $('#lastNameInput').val();
    let employeeId = $('#idInput').val();
    let employeeTitle = $('#titleInput').val();
    let employeeAnnualSalary = $('#annualSalaryInput').val();

}

function buttonSubmit(event) {
    console.log('Employee info has been added!');
    event.preventDefault();
    addEmployee();
}


function readyNow() {
    console.log('jq');
    $('#addToFormButton').on('click', buttonSubmit);
} // end readyNow