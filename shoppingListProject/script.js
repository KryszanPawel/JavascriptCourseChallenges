const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const clearButton = document.querySelector("#clear");
const itemFilter = document.querySelector(".filter");
const formBtn = document.querySelector(".btn");

let isEditMode = false;
let isItemAlreadyInList = false;

const shoppingItems = "shoppingItems";

items = getFromLocalStorage() || [];

items.forEach((item) => itemList.appendChild(createNewItem(item)));

itemForm.addEventListener("submit", addNewElement);

itemList.addEventListener("click", onItemClick);

clearButton.addEventListener("click", removeAllItems);

itemFilter.addEventListener("input", filterItems);

checkUI();

function checkIfItemExist(valueToCheck) {
  items.forEach((item) => {
    if (item.trim().toLowerCase() == valueToCheck) {
      isItemAlreadyInList = true;
    }
  });
}

function filterItems(e) {
  const text = e.target.value.toLowerCase();
  itemsInItemList = Array.from(itemList.children);
  itemsInItemList.forEach((item) => {
    itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.includes(text)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function clearEditMode() {
  formBtn.innerHTML = `<i class="fa-solid fa-plus"></i> Add Item`;
  formBtn.style.removeProperty("background-color");
  itemList.querySelector(".edit-mode").classList.remove("edit-mode");
  itemInput.value = "";
  isEditMode = false;
}

function setItemToEdit(itemToEdit) {
  itemList
    .querySelectorAll("li")
    .forEach((item) => item.classList.remove("edit-mode"));
  isEditMode = true;
  itemToEdit.classList.add("edit-mode");
  formBtn.innerHTML = `<i class="fa-solid fa-pen"></i> Update Item`;
  formBtn.style.backgroundColor = "green";
  itemInput.value = itemToEdit.firstChild.textContent;
}

function checkUI() {
  if (isStateClear()) {
    clearButton.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearButton.style.display = "block";
    itemFilter.style.display = "block";
  }
}

function isStateClear() {
  return items.length == 0 ? true : false;
}

function removeAllItems() {
  if (confirm("Are you sure you want to remove all items?")) {
    Array.from(itemList.children).forEach((item) => deleteItemFromList(item));
    saveToLocalStorage();
  }
}

function onItemClick(e) {
  isEditMode && clearEditMode();
  if (e.target.tagName == "I") {
    deleteItemFromList(e.target.parentNode.parentNode);
    saveToLocalStorage();
  } else if (e.target.tagName == "LI") {
    setItemToEdit(e.target);
  }
}

function addNewElement(e) {
  e.preventDefault();
  if (isEditMode) {
    const itemToEdit = itemList.querySelector(".edit-mode");

    items[items.indexOf(itemToEdit.firstChild.textContent)] = itemInput.value;
    itemToEdit.firstChild.textContent = itemInput.value;
    saveToLocalStorage();
    clearEditMode();
    return;
  }

  if (itemInput.value.trim() == "") {
    alert("Please provide item!");
    itemInput.value = "";
    return;
  }

  checkIfItemExist(itemInput.value.trim().toLowerCase());

  if (isItemAlreadyInList) {
    alert("Item is already in your list!");
    isItemAlreadyInList = false;
    return;
  }

  const newLi = createNewItem(itemInput.value);
  items.push(itemInput.value);
  saveToLocalStorage();
  itemInput.value = "";
  itemList.appendChild(newLi);
}
function createNewItem(newItemText) {
  const newLi = document.createElement("li");
  newLi.textContent = newItemText;
  const closeButton = document.createElement("button");
  closeButton.classList.add("remove-item", "btn-link", "text-red");
  const crossIcon = document.createElement("i");
  crossIcon.classList.add("fa-solid", "fa-xmark");
  closeButton.appendChild(crossIcon);
  newLi.appendChild(closeButton);
  return newLi;
}

function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem(shoppingItems));
}

function saveToLocalStorage() {
  localStorage.setItem(shoppingItems, JSON.stringify(items));
  checkUI();
}

function deleteItemFromList(nodeToDelete) {
  const indexToDelete = items.indexOf(nodeToDelete.firstChild.textContent);
  nodeToDelete.remove();
  items.splice(indexToDelete, 1);
}
