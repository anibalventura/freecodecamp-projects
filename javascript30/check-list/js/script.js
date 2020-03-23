const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];
const removeAllItems = document.querySelector("#remove");

//Add items submit to an array
function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false
  };
  //Put the items on the arrey and empty the input text field
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

//Adding the items to the html form
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
      <li>
      <input type="checkbox" data-index=${i} id="items${i}" ${
        plate.done ? "checked" : ""
      } />
        <label for="items${i}">${plate.text}</label>
      </li>
    `;
    })
    .join("");
}

//If target = Add Item button, sets items to local storage and sets their done property
function toggleDone(e) {
  if (!e.target.matches("input")) return; //Skip this unless its an input

  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

//Remove items from list and local storage
function removeItems() {
  localStorage.clear();
  items.length = 0;
  window.location = window.location;
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
removeAllItems.addEventListener("click", removeItems);

populateList(items, itemsList);