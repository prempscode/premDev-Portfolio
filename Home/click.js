const meBtn = document.querySelector(".me");
const projectBtn = document.querySelector(".projects");
const skillsBtn = document.querySelector(".skills");
const contactBtn = document.querySelector(".contact");

meBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

projectBtn.addEventListener("click", () => {
  window.location.href = "./project/project.html";
});

skillsBtn.addEventListener("click", () => {
  window.location.href = "./skills/skill.html";
});

contactBtn.addEventListener("click", () => {
  window.location.href = "./contact/contact.html";
});
