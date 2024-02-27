const insertAfter = (newElement, existingElement) => {
  if (!existingElement) return;
  const nextSiblingElement = existingElement.nextElementSibling;
  const parentElement = existingElement.parentElement;
  nextSiblingElement
    ? parentElement.insertBefore(newElement, nextSiblingElement)
    : parentElement.appendChild(newElement);
};

const newElement = document.createElement("li");
newElement.textContent = "New Element!!!";
insertAfter(newElement, document.querySelector("ul :nth-child(5)"));
