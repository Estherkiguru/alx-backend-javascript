interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName = 'Esther'
  lastName = 'Wambui'
  age = '23'
  location = 'Mars',
};

const student1: Student = {
  firstName = 'Shalom'
  lastName = 'Ciinga'
  age = '18'
  location = 'Venus',
};

const studentsList: Student[] = [student1, student2]

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach(student => {
  const row = document.createElement('tr');
  const Cell1 = document.createElement('td');
  const Cell2 = document.createElement('td');

Cell1.textContent = student.firstName;
Cell2.textContent = student.location;

row.appendChild(Cell1);
row.appendChild(Cell2);
tbody.appendChild(row);

});

table.appendChild(tbody);
document.body.appendChild(table);
