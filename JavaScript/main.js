let icon = document.querySelector(".icon");
let list = document.querySelector("ul.list");

console.log(list);

icon.addEventListener("click", function () {
  list.classList.toggle("click");
  list.style.cssText = "top: 45px; right: 0px; ";
});
