document.addEventListener("DOMContentLoaded", function () {
  loadItems();
});

const input = document.getElementsByClassName("input");

function addItem() {
  let inputField = document.getElementById("input-field");
  let inputValue = inputField.value.trim();

  if (inputValue !== "") {
    let newItem = document.createElement("div");
    newItem.textContent = inputValue;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "delet";
    deleteButton.onclick = function () {
      deleteItem(newItem);
    };

    newItem.appendChild(deleteButton);

    document.getElementById("word-list").appendChild(newItem);
    inputField.value = "";

    saveItems();
  }
}

function deleteItem(item) {
  item.remove();

  saveItems();
}

function saveItems() {
  let itemsContainer = document.getElementById("word-list");
  let items = [];

  itemsContainer.childNodes.forEach(function (node) {
    if (node.nodeType === 1) {
      items.push(node.textContent);
    }
  });

  localStorage.setItem("words", JSON.stringify(items));
}

function loadItems() {
  const itemsContainer = document.getElementById("word-list");
  const savedItems = localStorage.getItem("words");
  if (savedItems) {
    savedItems = JSON.parse(savedItems);

    savedItems.forEach(function (text) {
      const newItem = document.createElement("div");
      newItem.textContent = text;

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "delet";
      deleteButton.onclick = function () {
        deleteItem(newItem);
      };

      newItem.appendChild(deleteButton);
      itemsContainer.appendChild(newItem);
    });
  }
}


//?getItem - ключ менен тартып алуу 1 параметр кабыл алат

//?setItem - 

//?remove