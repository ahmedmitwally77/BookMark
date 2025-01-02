let inputName = document.getElementById("nameBook");
let inputUrl = document.getElementById("urlBook");
let tbody = document.getElementById("content");
console.log(tbody, inputName, inputUrl);

let arr = [];

if (localStorage.getItem("book")) {
  arr = JSON.parse(localStorage.getItem("book"));
  display();
}

function add() {
  let book = {
    name: inputName.value,
    url: inputUrl.value,
  };
  arr.push(book);
  localStorage.setItem("book", JSON.stringify(arr));
  console.log(arr);
  display();
  clear();
}

function clear() {
  inputName.value = "";
  inputUrl.value = "";
}

function del(index) {
  arr.splice(index, 1);
  localStorage.setItem("book", JSON.stringify(arr));
  display();
}

function visit(index) {
  window.open(arr[index].url);
}

function display() {
  let cartona = "";
  for (let i = 0; i < arr.length; i++) {
    cartona += `
    <tr class="border-bottom">
              <td>${i + 1}</td>
              <td>${arr[i].name}</td>
              <td>
                <button type="button" onclick="visit(${i})" class="btn btn-warning text-white" data-index="0">
                  <i class="fa-solid fa-eye pe-2"></i>Visit
                </button>
              </td>
              <td>
                <button  type="button" onclick="del(${i})" class="btn btn-danger text-white pe-2" data-index="0">
                  <i class="fa-solid fa-trash-can"></i>
                  Delete
                </button>
              </td>
            </tr>
    `;
  }
  tbody.innerHTML = cartona;
}
