// Sample array of image data
const imageData = [
  { name: 'hotelplan', link: './img/customers-icons/hotelplan.svg' },
  { name: 'ef', link: './img/customers-icons/ef.svg' },

  { name: 'air canada', link: './img/customers-icons/air-canada.svg' },
  { name: 'jitjatjo', link: './img/customers-icons/jitjatjo.svg' },

  { name: 'audley', link: './img/customers-icons/audley.svg' },
  { name: 'tallink', link: './img/customers-icons/tallink.svg' },

  { name: 'dohop', link: './img/customers-icons/dohop.svg' },
  { name: 'tourcompass ', link: './img/customers-icons/tourcompass.svg' },
  { name: 'versonix ', link: './img/customers-icons/versonix.svg' },

];

const galleryContainer = document.getElementById('customers-map');

imageData.forEach(image => {
  const imageBlock = document.createElement('div');
  imageBlock.classList.add('customer-logo-container');

  const imgElement = document.createElement('img');
  imgElement.src = image.link;
  imgElement.alt = `${image.name} logo`;

  imageBlock.appendChild(imgElement);

  galleryContainer.appendChild(imageBlock);
});