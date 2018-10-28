var header = document.getElementsByTagName("header");
console.log(header);

var section = document.querySelectorAll("section");

console.log(section);

var current = document.getElementsByTagName("current");

console.log(current);

var sectionCurrent = document.getElementsByClassName("current");
var sectionCurrentAfter = sectionCurrent[0].nextElementSibling;

console.log(sectionCurrentAfter)

var textFirstSelection = document.querySelector("section").children;

console.log(textFirstSelection)

var h2highlight = document.getElementsByClassName("highlight")
var div = h2highlight[0].parentElement.parentElement;

console.log(div);

var sectionh2 = Array.from(document.querySelectorAll("section h2")).map(function(item){
  return item.parentElement;
});

console.log(sectionh2);
