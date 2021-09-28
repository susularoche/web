// creates a footer element on every page
const footer = document.createElement("footer"); // Create a <button> element
footer.innerHTML = "S LAROCHE ©";
const body = document.querySelector("body");
body.appendChild(footer);
