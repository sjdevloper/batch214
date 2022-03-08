// 1 Table with styles you want to add
const tableInfo = [
  {
    studentName: "John",
    Age: 19,
    Phone: "455 - 983 - 0903",
    Address: "123 Ave, San Francisco, CA, 94011",
  },
  {
    studentName: "Alex",
    Age: 21,
    Phone: "455 - 983 - 0912",
    Address: "456 Rd, San Francisco, CA, 94012",
  },
  {
    studentName: "Josh",
    Age: 22,
    Phone: "455 - 345 - 0912",
    Address: "789 Dr, Newark, CA, 94016",
  },
  {
    studentName: "Matt",
    Age: 23,
    Phone: "321 - 345 - 0912",
    Address: "223 Dr, Sunnyvale, CA, 94016",
  },
];

const table = document.querySelector("table");
const data = Object.keys(tableInfo[0]);

// const newTable = arr.map((elm) => ({ Phone‘#’: elm.Phone}));

function generateHead(table, data) {
  let head = table.createTHead();
  let row = head.insertRow();
  for (let key of data) {
    let tableHead = document.createElement("th");
    tableHead.style.border = "1px solid blue";
    let text = document.createTextNode(key);
    tableHead.appendChild(text);
    row.appendChild(tableHead);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (let key in element) {
      let cell = row.insertCell();
      cell.style.border = "1px solid blue";
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

generateHead(table, data);
generateTable(table, tableInfo);

// 2. Given the array and generate order list and unordered list as following:

// order list
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

let orderList = document.getElementById("orderList");

list.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  orderList.appendChild(li);
});

// unorder list
let unorderList = document.getElementById("unorderList");

list.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  unorderList.appendChild(li);
});

// 3. Given a array and implement a dropdown list with the following options(please find the
//     screenshot/mockup below)

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const selectList = document.getElementById("select").options;
dropDownList.forEach((option) =>
  selectList.add(new Option(option.content, option.value))
);
