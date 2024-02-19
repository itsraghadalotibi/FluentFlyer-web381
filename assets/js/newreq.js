// NEW REQUEST
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
// const prevBtnSec = document.querySelector(".prev-1");
// const nextBtnSec = document.querySelector(".next-1");
const knowMoreBtn = document.querySelector(".btn.btn-primary");
const prevBtnThird = document.querySelector("#prev");
const nextBtnThird = document.querySelector("#nxt");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector("#PayButton");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");

document.addEventListener('DOMContentLoaded', function() {
  // Select all list items within the .dropdown ul
  var dropdownItems = document.querySelectorAll('.dropdown ul li');

  // Iterate over each list item and add a click event listener
  dropdownItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // First, remove 'selected' class from all list items
      dropdownItems.forEach(function(innerItem) { 
        innerItem.classList.remove('selected');
      });
      // Add 'selected' class to the clicked list item
      this.classList.add('selected');

      // Select the .dropdown h1 element
      var dropdownHeader = document.querySelector('.dropdown h1');
      // Set the HTML of the h1 to the HTML of the clicked list item
      dropdownHeader.innerHTML = this.innerHTML;

      // Remove all 'selected-' classes from the h1
      for (var i = 1; i <= dropdownItems.length; i++) {
        dropdownHeader.classList.remove('selected-' + i);
      }
      // Add the 'selected-n' class to the h1 based on the clicked list item's index
      dropdownHeader.classList.add('selected-' + (Array.prototype.indexOf.call(dropdownItems, this) + 1));
    });
  });
});

let current = 1;
nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
knowMoreBtn.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
// 
document.addEventListener('DOMContentLoaded', function() {
  // Attach the click event listener to a static parent of dropdown2 items
  document.querySelector('.dropdown2').addEventListener('click', function(event) {
    // Ensure the clicked element is a list item
    if (event.target.tagName.toLowerCase() === 'li') {
      var clickedItem = event.target;
      var dropdownItems2 = document.querySelectorAll('.dropdown2 ul li');

      // Remove 'selected' class from all list items
      dropdownItems2.forEach(function(item) {
        item.classList.remove('selected');
      });

      // Add 'selected' class to the clicked item
      clickedItem.classList.add('selected');

      // Update the .dropdown2 h1 content
      var dropdownHeader2 = document.querySelector('.dropdown2 h1');
      dropdownHeader2.innerHTML = "Duration: " + clickedItem.innerHTML;

      // Optional: Remove and add 'selected-n' classes if needed
    }
  });
});



// 
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Request Completed Successfully ");
    location.reload();
  },800);
});
prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});


