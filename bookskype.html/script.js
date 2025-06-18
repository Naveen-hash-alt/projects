//select the addbutton, popup-overlay, popup-main
var popupoverlay = document.querySelector(".popup-overlay")
var popupmain = document.querySelector(".popup-main")
var addpopupbutton = document.getElementById("add-popup-btn")

addpopupbutton.addEventListener("click", function() {
  popupoverlay.style.display="block"
  popupmain.style.display="block"
})

//select the cancel button
var cancelButton = document.getElementById("cancel-book")
cancelButton.addEventListener("click", function(event) {
  event.preventDefault();
  popupoverlay.style.display="none"
  popupmain.style.display="none"
})


//select the conatiner, add-book, book-title-input, book-author-input
var container = document.querySelector(".container")
var addBook = document.getElementById("add-book")
var bookTitleInput = document.getElementById("book-title-input")
var bookAuthorInput = document.getElementById("book-author-input")
var bookdescriptionInput = document.getElementById("book-description-input")

addBook.addEventListener("click", function(event) {
  event.preventDefault()
  var div = document.createElement("div")
  div.setAttribute("class", "book-container")
  div.innerHTML=` <h2>${bookTitleInput.value}</h2>
      <h5>${bookAuthorInput.value}</h5>
      <p>${bookdescriptionInput.value}</p>
      <button onclick='deleteButton(event)'>Delete</button>`
  container.append(div)
  popupoverlay.style.display="none"
  popupmain.style.display="none"

})
var addPopUpButton = document.getElementById("add-popup-btn")
addPopUpButton.addEventListener("click", function() {
// Show the popup
  popupoverlay.style.display = "block";
  popupmain.style.display = "block";

  // Clear all input fields each time the popup opens
  bookTitleInput.value = "";
  bookAuthorInput.value = "";
  bookdescriptionInput.value = "";
})
  
function deleteButton(event) {
  event.target.parentElement.remove()
}