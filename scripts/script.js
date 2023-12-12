let profileName = document.querySelector('#profile__input_name');
console.log(`Значение p1 = ${profileName.placeholder}`);

let profileAbout = document.querySelector(`#profile__input_About`);
console.log(`Значение p1 = ${profile__input_About.placeholder}`);

let profileButton = document.querySelector('.profile__add');

console.log(`Значение button = ${profileButton}`);

function showClick() {
    console.log(`Имя = ${profileName.value}\nО себе = ${profileAbout.value}`);
}

profileButton.addEventListener('click', showClick);

let profilePhoto = document.querySelector('.profile__photo');

function showPhoto() {
   let profilePhoto = document.querySelector('#profilePhoto');
   profilePhoto.addEventListener('click', profilePhoto);
   if (profilePhoto.style.display == "none"){
        profilePhoto.style.display = "block";
    } else {
        profilePhoto.style.display = "none";
    }
}

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}
function checkClickCard(elem){
  elem.addEventListener('click',zoomCard);
}
function zoomCard() {
  let zoom_image=document.querySelector(".zoom-image");
  zoom_image.src=this.src;
  modal.style.display = "block";
}

function removeParent(){
  let revDiv = this.parentElement;
  revDiv.remove();
  deleteFromCards(this.parentElement.id);
}

function createEventLForDelete(elem) {
  elem.addEventListener('click', removeParent);
}

function createEventForLike(elem) {
  elem.addEventListener('click', setLike);
}

function setLike(){
  if(this.classList.contains('card__like_checked')){
    this.classList.remove('card__like_checked');
  } else {
    this.classList.add('card__like_checked');
}    
}