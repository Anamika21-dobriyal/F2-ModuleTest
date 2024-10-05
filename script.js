let employees = [];
let employeeId = 1;

document.getElementById('addEmployeeBtn').addEventListener('click', addEmployee);

function addEmployee() {
  const name = document.getElementById('name').value.trim();
  const profession = document.getElementById('profession').value.trim();
  const age = document.getElementById('age').value.trim();
  const messageEl = document.getElementById('message');
  
  // Clear previous messages
  messageEl.innerText = '';
  messageEl.classList.remove('error', 'success');
  
  // Validation
  if (name === '' || profession === '' || age === '') {
    messageEl.innerText = 'Please fill out all fields!';
    messageEl.classList.add('error');
    return;
  }
  
  // Add new employee
  const newEmployee = {
    id: employeeId,
    name: name,
    profession: profession,
    age: parseInt(age)
  };
  
  employees.push(newEmployee);
  employeeId++;
  
  messageEl.innerText = 'Employee added successfully!';
  messageEl.classList.add('success');
  
  // Clear form inputs
  document.getElementById('name').value = '';
  document.getElementById('profession').value = '';
  document.getElementById('age').value = '';
  
  renderEmployees();
}

function renderEmployees() {
  const employeeList = document.getElementById('employeeList');
  employeeList.innerHTML = ''; // Clear previous entries
  
  employees.forEach(employee => {
    const employeeDiv = document.createElement('div');
    employeeDiv.className = 'employee';
    
    const employeeInfo = document.createElement('div');
    employeeInfo.className = 'info';
    employeeInfo.innerText = `${employee.id}. ${employee.name}, ${employee.profession}, ${employee.age} years old`;
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => deleteEmployee(employee.id));
    
    employeeDiv.appendChild(employeeInfo);
    employeeDiv.appendChild(deleteButton);
    
    employeeList.appendChild(employeeDiv);
  });
}

function deleteEmployee(id) {
  employees = employees.filter(employee => employee.id !== id);
  renderEmployees();
}
