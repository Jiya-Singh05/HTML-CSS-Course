// counter program
const decbut = document.getElementById("decbut")
const resetbut = document.getElementById("resetbut")
const incbut = document.getElementById("incbut")
const countlabel = document.getElementById("countlabel")
let count=0;

incbut.onclick = function() {
  count++;
  countlabel.textContent = count;
}
decbut.onclick = function() {
  count--; 
  countlabel.textContent = count;
}
resetbut.onclick = function() {
  count=0;
  countlabel.textContent = count;
}
console.log("JS file loaded");
