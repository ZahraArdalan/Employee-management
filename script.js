let employees = [];

const addbutton = document.getElementById("addbtn");
addbutton.addEventListener("click", addEmployee);

function addEmployee() {
  const name = document.getElementById("name").value;
  const job = document.getElementById("job").value;
  const age = document.getElementById("age").value;

  if (name && job && age) {
    const employee = { name, job, age };
    employees.push(employee);

    document.getElementById("name").value = "";
    document.getElementById("job").value = "";
    document.getElementById("age").value = "";
    displayEmployees();
  } else {
    alert("لطفا همه فیلد  را پر کنید");
  }
}

function displayEmployees() {
  const employeelist = document.getElementById("employeelist");
  employeelist.innerHTML = "";
  employees.forEach((employee, index) => {
    const employeeitem = document.createElement("div");
    employeeitem.className = "employee-item";

    employeeitem.innerHTML = `<span>${employee.name}-${employee.job}-${employee.age}سال</span> 
        <button onclick="deleteEmployee(${index})">حذف</button>`;
    employeelist.appendChild(employeeitem);
  });
}
function deleteEmployee(index) {
  employees.splice(index, 1);
  displayEmployees();
}

console.log(esaed);
