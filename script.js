//Unplash API
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photosArray = [];
const count = 10;
const apiKey = 'ylpt4bSrANByBciEPMcuf00qlM4BtzyFvV5k4-4_Nss';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Helper Function to Set Attributes
function setAttribute(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

//Create Elements for Links & Photos, Add to the DOM
function displayPhotos() {
  photosArray.forEach((photo) => {
    //create <a> to link to Unsplash
    const item = document.createElement('a');
    //item.setAttribute('href', photo.links.html);
    //item.setAttribute('target', '_blank');
    setAttribute(item, {
      href: photo.links.html,
      target: '_blank',
    });
    //Create <img> for photo
    const img = document.createElement('img');
    //img.setAttribute('src', photo.urls.regular);
    //img.setAttribute('alt', photo.alt_description);
    //img.setAttribute('title', photo.alt_description);
    setAttribute(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    //Put the <im> inside <a>, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

//Get photos from unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {}
}

//On Load
getPhotos();
