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

function ShowImage(){
    if(profileImage.classList.contains('profile__image_unvisiable')){
      profileImage.classList.remove('profile__image_unvisiable');
    }
    else {
      profileImage.classList.add('profile__image_unvisiable');
    }
  }