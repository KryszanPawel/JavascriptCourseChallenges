document.addEventListener("keydown", readKey);

function readKey(event) {
  event.preventDefault();
  const insert = document.querySelector("#insert");
  while (insert.firstChild) {
    insert.firstChild.remove();
  }

  const eventObj = {
    "e.key": event.key === " " ? "Space" : event.key,
    "e.keyCode": event.keyCode,
    "e.code": event.code,
  };
  for (let key in eventObj) {
    const keyDiv = document.createElement("div");
    keyDiv.classList.add("key");
    keyDiv.textContent = eventObj[key];
    const small = document.createElement("small");
    small.textContent = key;
    keyDiv.appendChild(small);
    insert.appendChild(keyDiv);
  }
}
