const userLogIn = prompt("Username:");

localStorage.setItem("username", userLogIn);

newEl = (el) => document.createElement(el);

const navEl = newEl("nav");
const titleEl = newEl("h3");
const nameEl = newEl("p");

navEl.className = "navbar";

document.body.append(navEl, nameEl);

navEl.append(titleEl, nameEl);

titleEl.textContent = "Username:" + userLogIn;

try {
  if (localStorage.getItem("username") === "Ciao") {
    titleEl.textContent = "Username:" + userLogIn;
  } else {
    throw new Error;
  }
} catch (error) {
  console.log("no name found");
}
