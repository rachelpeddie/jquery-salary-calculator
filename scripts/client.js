console.log('js');

$(document).ready(readyNow);

// declare empty array to input new employee vals
let employeeInfo = [];

function readyNow() {
    console.log('jq');
    $('#addToFormButton').on('click', buttonSubmit);
} // end readyNow

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

// function to add new employee with properties to array from inputs
function addEmployee() {
    // declared variables equal to input values for legibility
    let employeeFirstName = $('#firstNameInput').val();
    let employeeLastName = $('#lastNameInput').val();
    let employeeId = $('#idInput').val();
    let employeeTitle = $('#titleInput').val();
    let employeeAnnualSalary = $('#annualSalaryInput').val();
    
    //create a new employee object with variables
    let newEmployee = new Employee ( employeeFirstName, employeeLastName, employeeId, employeeTitle, employeeAnnualSalary );

    // push new object to array and log for confirmation
    employeeInfo.push(newEmployee);
    console.log('New Employee: ', employeeInfo);
    addEmployeeToTable();
}

// function to append new row with new employee info when called
function addEmployeeToTable() {
    let employeeElement = $('#newEmployeeInfo');
    // empties all existing value
    employeeElement.empty();
    // for loop to append all items in array to table
    for ( info of employeeInfo ){
        $('#newEmployeeInfo').append(`<tr><td>${info.firstName}</td><td>${info.lastName}</td><td>${info.id}</td><td>${info.title}</td><td>${info.annualSalary}</td></tr>`);
        monthlyCosts();
    }
} // end addEmployeeToTable

// function to prevent default form clear and run addEmployee function
function buttonSubmit(event) {
    console.log('Employee info has been added!');
    event.preventDefault();
    addEmployee();
    // clears input values for next input
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');
} // end buttonSubmit

// function to add salaries together and calculate monthly costs
function monthlyCosts() {
    let totalMonthlyCost = 0;
    for( let i=0; i<employeeInfo.length; i++){
        totalMonthlyCost += (employeeInfo[i].annualSalary) / 12;
    }
    console.log(totalMonthlyCost.toFixed(2));
    return totalMonthlyCost.toFixed(2);
    totalCostAppend(); // might not want this here...
}

// use .splice()