// get the header element and put text inside
let headerText = document.getElementById("myHeader");
headerText.innerText="Employee Lookup";

// just my array of employees
const employees = [
  { firstName: "John", lastName: "Doe", email: "john.doe@example.com", employeeID: 1 },
  { firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", employeeID: 2 },
  { firstName: "Michael", lastName: "Johnson", email: "michael.johnson@example.com", employeeID: 3 },
  { firstName: "Emily", lastName: "Williams", email: "emily.williams@example.com", employeeID: 4 },
  { firstName: "Daniel", lastName: "Brown", email: "daniel.brown@example.com", employeeID: 5 },
  { firstName: "Olivia", lastName: "Jones", email: "olivia.jones@example.com", employeeID: 6 },
  { firstName: "David", lastName: "Taylor", email: "david.taylor@example.com", employeeID: 7 },
  { firstName: "Sophia", lastName: "Miller", email: "sophia.miller@example.com", employeeID: 8 },
  { firstName: "James", lastName: "Anderson", email: "james.anderson@example.com", employeeID: 9 },
  { firstName: "Ava", lastName: "Thomas", email: "ava.thomas@example.com", employeeID: 10 },
  { firstName: "Matthew", lastName: "Hall", email: "matthew.hall@example.com", employeeID: 11 },
  { firstName: "Isabella", lastName: "Wilson", email: "isabella.wilson@example.com", employeeID: 12 },
  { firstName: "Joseph", lastName: "Clark", email: "joseph.clark@example.com", employeeID: 13 },
  { firstName: "Emma", lastName: "Lewis", email: "emma.lewis@example.com", employeeID: 14 },
  { firstName: "Andrew", lastName: "Young", email: "andrew.young@example.com", employeeID: 15 },
  { firstName: "Mia", lastName: "Walker", email: "mia.walker@example.com", employeeID: 16 },
  { firstName: "Benjamin", lastName: "Harris", email: "benjamin.harris@example.com", employeeID: 17 },
  { firstName: "Ella", lastName: "Martin", email: "ella.martin@example.com", employeeID: 18 },
  { firstName: "William", lastName: "Thompson", email: "william.thompson@example.com", employeeID: 19 },
  { firstName: "Sofia", lastName: "Garcia", email: "sofia.garcia@example.com", employeeID: 20 }
];



/*
commenting out old function to use employeeFilter instead

// for loop to populate the container element
for (let i = 0; i <employees.length; i++) {
  const myObject = employees[i];
  const div = document.createElement("div");
  div.innerHTML = `
  <h2> ${myObject.firstName} ${myObject.lastName}  </h2>
 
  <p>Email: ${myObject.email}</p> 
  <p>Employee ID: ${myObject.employeeID}</p>   
`;
container.appendChild(div);

}
*/

// get the submit form elements and store them in the form variables
let form = document.getElementById("submitForm");
let form2 = document.getElementById("submitForm2");
// function to filter the array for the user entered number and display that employees information

  function employeeFilterRewrite(idNumber) {

    let chosenEmployee = employees.find(employee => Number(employee.employeeID) === Number(idNumber));
    if (chosenEmployee) {
      // Construct the HTML content with the employee information
      let employeeInfoHTML = `
        <h2>${chosenEmployee.firstName} ${chosenEmployee.lastName}</h2>
        <p>Email: ${chosenEmployee.email}</p>
        <p>Employee ID: ${chosenEmployee.employeeID}</p>
      `;
      
      // Update the content of the "employeeInfo" element
      document.getElementById("employeeInfo").innerHTML = employeeInfoHTML;
    } else {
      // display that no matching employee is found
      document.getElementById("employeeInfo").innerHTML = "Employee ID not found";
    }
  
  
    
  };
// function to filter the array for first names
  function firstNameFilter(fName) {

   // filter any array items with a matching firstName into new array nameArray
    let nameArray = employees.filter(employee => employee.firstName == fName);
    if (nameArray.length > 0) {
      // Construct the HTML content with the employee information
      let employeeNameHTML = '';
      nameArray.forEach(employee => {
        employeeNameHTML += `
        <h2>${employee.firstName} ${employee.lastName}</h2>
        <p>Email: ${employee.email}</p>
        <p>Employee ID: ${employee.employeeID}</p>
      `;
      });
      
      // Update the content of the "employeeName" element
      document.getElementById("employeeName").innerHTML = employeeNameHTML;
    } else {
      // display that no matching employee is found
      document.getElementById("employeeName").innerHTML = "Employee First Name not found";
    }
  };
  



// event listener for click and then perform actions on the number
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Access the input field by its id
    var numberInput = document.getElementById('numberInput');

    // Get the value entered by the user
    var number = numberInput.value;
    // call the employeeFilterRewrite function and pass number to it
    employeeFilterRewrite(number);

    // Clear the input field
    numberInput.value = '';
  });
  // second event listener for click and then perform actions on the first name entered
  form2.addEventListener('submit', function(event) {
    event.preventDefault();

    // Access the input field by its id
    var nameInput = document.getElementById('nameInput');

    // Get the value entered by the user
    var effName = nameInput.value;
    // call the firstNameFilter function and pass name to it
    firstNameFilter(effName);

    // Clear the input field
    numberInput.value = '';
  });

