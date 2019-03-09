console.log('js');

$(document).ready(readyNow);

// declare empty array to input new employee vals
let employeeInfo = [];
// declare variable to hold monthly cost
// let costMonthly =

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


function buttonSubmit(event) {
    console.log('Employee info has been added!');
    event.preventDefault();
    addEmployee();
}
