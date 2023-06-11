// leaving the original employees array commented out in case I want it later?
// const employees = [
//     { firstName: "Alice", lastName: "Johnson", email: "alice.johnson@example.com", employeeID: 1 },
//     { firstName: "Bob", lastName: "Smith", email: "bob.smith@example.com", employeeID: 2 },
//     { firstName: "Charlie", lastName: "Williams", email: "charlie.williams@example.com", employeeID: 3 },
//     { firstName: "Diana", lastName: "Brown", email: "diana.brown@example.com", employeeID: 4 },
//     { firstName: "Ella", lastName: "Jones", email: "ella.jones@example.com", employeeID: 5 },
//     { firstName: "Frank", lastName: "Taylor", email: "frank.taylor@example.com", employeeID: 6 },
//     { firstName: "Grace", lastName: "Miller", email: "grace.miller@example.com", employeeID: 7 },
//     { firstName: "Henry", lastName: "Anderson", email: "henry.anderson@example.com", employeeID: 8 },
//     { firstName: "Isabella", lastName: "Thomas", email: "isabella.thomas@example.com", employeeID: 9 },
//     { firstName: "Jack", lastName: "Hall", email: "jack.hall@example.com", employeeID: 10 },
//     { firstName: "Kate", lastName: "Wilson", email: "kate.wilson@example.com", employeeID: 11 },
//     { firstName: "Luke", lastName: "Clark", email: "luke.clark@example.com", employeeID: 12 },
//     { firstName: "Mia", lastName: "Lewis", email: "mia.lewis@example.com", employeeID: 13 },
//     { firstName: "Noah", lastName: "Young", email: "noah.young@example.com", employeeID: 14 },
//     { firstName: "Olivia", lastName: "Walker", email: "olivia.walker@example.com", employeeID: 15 },
//     { firstName: "Peter", lastName: "Harris", email: "peter.harris@example.com", employeeID: 16 },
//     { firstName: "Quinn", lastName: "Martin", email: "quinn.martin@example.com", employeeID: 17 },
//     { firstName: "Ryan", lastName: "Thompson", email: "ryan.thompson@example.com", employeeID: 18 },
//     { firstName: "Sophie", lastName: "Garcia", email: "sophie.garcia@example.com", employeeID: 19 },
//     { firstName: "Thomas", lastName: "Davis", email: "thomas.davis@example.com", employeeID: 20 }
//   ];
  // I shuffled the employeeID values since they were corresponding to the alphabetically sorted firstName now I can use my sort by ID function too
  const employees = [
    { firstName: "Alice", lastName: "Johnson", email: "alice.johnson@example.com", employeeID: 8 },
    { firstName: "Bob", lastName: "Smith", email: "bob.smith@example.com", employeeID: 15 },
    { firstName: "Charlie", lastName: "Williams", email: "charlie.williams@example.com", employeeID: 4 },
    { firstName: "Diana", lastName: "Brown", email: "diana.brown@example.com", employeeID: 12 },
    { firstName: "Ella", lastName: "Jones", email: "ella.jones@example.com", employeeID: 20 },
    { firstName: "Frank", lastName: "Taylor", email: "frank.taylor@example.com", employeeID: 11 },
    { firstName: "Grace", lastName: "Miller", email: "grace.miller@example.com", employeeID: 5 },
    { firstName: "Henry", lastName: "Anderson", email: "henry.anderson@example.com", employeeID: 3 },
    { firstName: "Isabella", lastName: "Thomas", email: "isabella.thomas@example.com", employeeID: 14 },
    { firstName: "Jack", lastName: "Hall", email: "jack.hall@example.com", employeeID: 17 },
    { firstName: "Kate", lastName: "Wilson", email: "kate.wilson@example.com", employeeID: 1 },
    { firstName: "Luke", lastName: "Clark", email: "luke.clark@example.com", employeeID: 6 },
    { firstName: "Mia", lastName: "Lewis", email: "mia.lewis@example.com", employeeID: 19 },
    { firstName: "Noah", lastName: "Young", email: "noah.young@example.com", employeeID: 9 },
    { firstName: "Olivia", lastName: "Walker", email: "olivia.walker@example.com", employeeID: 18 },
    { firstName: "Peter", lastName: "Harris", email: "peter.harris@example.com", employeeID: 7 },
    { firstName: "Quinn", lastName: "Martin", email: "quinn.martin@example.com", employeeID: 16 },
    { firstName: "Ryan", lastName: "Thompson", email: "ryan.thompson@example.com", employeeID: 10 },
    { firstName: "Sophie", lastName: "Garcia", email: "sophie.garcia@example.com", employeeID: 2 },
    { firstName: "Thomas", lastName: "Davis", email: "thomas.davis@example.com", employeeID: 13 }
  ];
  
  


   
    
    console.clear();
    //const funk = x => x * x + 25;
    //const add = (a,b) => a * b;
    //console.log(funk(5));
    //console.log(add(10,4));
    // hard coded sorter function for employees array
    employees.sort((a,b) => {
        let fa = a.firstName.toLowerCase();
        let fb = b.firstName.toLowerCase();
        if (fa < fb) {
            return 1;
        }
        if (fa > fb) {
            return -1;
        }
        return 0;
    
    });
    // print each employee
    // employees.forEach((e) => {
    //     console.log(`
    //     ${e.firstName} ${e.lastName} Employee ID: ${e.employeeID}
    //     `);
    // });
    //sorter function for any array that takes an array input and a property input
    function stringSorter(arr, prop) {
        const sortedArr = arr.sort((a,b) => {
            let o1 = a[prop].toLowerCase();
            let o2 = b[prop].toLowerCase();
            if (o1 < o2) {
                return -1;
            }
            if (o1 > o2) {
                return 1;
            }
            return 0;
            
            
        });
        return sortedArr;
        
        

    };
    function numberSorter(arr, prop) {
        const sortedArr = arr.sort((a,b) => {
            let o1 = a[prop];
            let o2 = b[prop];
            if (o1 < o2) {
                return -1;
            }
            if (o1 > o2) {
                return 1;
            }
            return 0;
            
            
        });
        return sortedArr;
        
        

    };
    // variable to store array sorted by firstName property
    // const sortedEmp = stringSorter(employees, "firstName");
    // function that will call stringSorter to sort array by firstName property
    function buttonClicked(buttonIndex) {
        switch (buttonIndex) {
          case 1:
            const sortedByFirstName = stringSorter(employees, "firstName");
            displayResults(sortedByFirstName);
            break;
          // Add cases for other button indices (2, 3, 4) if needed
          case 2:
            const sortedByLastName = stringSorter(employees, "lastName");
            displayResults(sortedByLastName);
            break;
          case 3:
            const sortedByIdNumber = numberSorter(employees, "employeeID");
            displayResults(sortedByIdNumber);
            break;
            case 4:
              displayAllResults(employees);
              break;
          case 5:
              clearDiv();
              break;
        }
      };

      function displayResults(sortedArr) {
          // get the resultsGrid div so the employees can be inserted there
        const resultsGrid = document.getElementById("resultsGrid");
        resultsGrid.innerHTML = ""; // Clear previous results
      
        sortedArr.forEach((employee) => {
          const employeeDiv = document.createElement("div");
          employeeDiv.textContent = `${employee.firstName} ${employee.lastName}`;
          resultsGrid.appendChild(employeeDiv);
        });
      };
      function displayAllResults(unsortedArr) {
        // get the resultsGrid div so the employees can be inserted there
      const resultsGrid = document.getElementById("resultsGrid");
      resultsGrid.innerHTML = ""; // Clear previous results
    
      unsortedArr.forEach((employee) => {
        const employeeDiv = document.createElement("div");
        employeeDiv.textContent = `${employee.firstName} ${employee.lastName} email: ${employee.email} employee ID: ${employee.employeeID}`;
        resultsGrid.appendChild(employeeDiv);
      });
    };
      
      function clearDiv() {
        const resultsGrid = document.getElementById("resultsGrid");
        resultsGrid.innerHTML = "";

      }


    
    
   
