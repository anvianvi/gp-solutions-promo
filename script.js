const custimersLogo = [
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

// categories - list



const customersLogoGrid = document.getElementById('customers-map');

custimersLogo.forEach(logo => {
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('customer-logo-container');

  const logoImg = document.createElement('img');
  logoImg.src = logo.link;
  logoImg.alt = `${logo.name} logo`;

  logoContainer.appendChild(logoImg);

  customersLogoGrid.appendChild(logoContainer);
});