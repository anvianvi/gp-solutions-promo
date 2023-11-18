const custimersLogo = [
  { name: "hotelplan", link: "./img/customers-icons/hotelplan.svg" },
  { name: "ef", link: "./img/customers-icons/ef.svg" },
  { name: "air canada", link: "./img/customers-icons/air-canada.svg" },
  { name: "jitjatjo", link: "./img/customers-icons/jitjatjo.svg" },
  { name: "audley", link: "./img/customers-icons/audley.svg" },
  { name: "tallink", link: "./img/customers-icons/tallink.svg" },
  { name: "dohop", link: "./img/customers-icons/dohop.svg" },
  { name: "tourcompass ", link: "./img/customers-icons/tourcompass.svg" },
  { name: "versonix ", link: "./img/customers-icons/versonix.svg" },
];

const customersCategories = [
  {
    name: "Tour Operators",
    link: "./img/customer-categories-icons/tour-operators.svg",
  },
  {
    name: "DMCs",
    link: "./img/customer-categories-icons/dmcs.svg",
  },
  {
    name: "OTAs",
    link: "./img/customer-categories-icons/otas.svg",
  },
  {
    name: "TMCs",
    link: "./img/customer-categories-icons/tmcs.svg",
  },
  {
    name: "Cruise Companies",
    link: "./img/customer-categories-icons/cruise-companies.svg",
  },
  {
    name: "Travel Startups",
    link: "./img/customer-categories-icons/travel-startups.svg",
  },
];


const employeeList = [{
  photo: './img/employee-photo/rodion.png',
  avatar: './img/employee-photo/rodion-round.png',
  name: 'Rodion Zhitomirsky',
  role: 'Chairman of the Board, Co-founder'
},
{
  photo: './img/employee-photo/sergey.png',
  avatar: './img/employee-photo/sergey-round.png',
  name: 'Sergey Zubekhin',
  role: 'CEO, Co-founder'
}, {
  photo: './img/employee-photo/maria.png',
  avatar: './img/employee-photo/maria-round.png',
  name: 'Maria Bondarenko',
  role: 'VP Product, Shareholder'
}, {
  photo: './img/employee-photo/eugene.png',
  avatar: './img/employee-photo/eugene-round.png',
  name: 'Eugene Boiko',
  role: 'VP Software Development, Shareholder'
}, {
  photo: './img/employee-photo/fred.png',
  avatar: './img/employee-photo/fred-round.png',

  name: 'Fred Bean',
  role: 'Chief Partnership Officer'
}]


const customersLogoGrid = document.getElementById("customers-map");

custimersLogo.forEach((logo) => {
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("customer-logo-container");

  const logoImg = document.createElement("img");
  logoImg.src = logo.link;
  logoImg.alt = `${logo.name} logo`;

  logoContainer.appendChild(logoImg);

  customersLogoGrid.appendChild(logoContainer);
});

const customersCategoriesGrid = document.getElementById("categories-list");

customersCategories.forEach((category) => {
  const categoryContainer = document.createElement("div");
  categoryContainer.classList.add("category-container");

  const categoryLogo = document.createElement("img");
  categoryLogo.src = category.link;
  categoryLogo.alt = `${category.name} icon`
  categoryLogo.classList.add('category-logo')

  const nextIcon = document.createElement("img")
  nextIcon.src = "./img/customer-categories-icons/arrow-icon.svg"
  nextIcon.alt = "icon with arrow"
  nextIcon.classList.add('next-icon')

  const categoryName = document.createElement("span");
  categoryName.textContent = category.name;

  categoryContainer.appendChild(categoryLogo);
  categoryContainer.appendChild(categoryName);
  categoryContainer.appendChild(nextIcon)

  customersCategoriesGrid.appendChild(categoryContainer);

});

const employeesList = document.getElementById('employees-list');

employeeList.forEach(employee => {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.background = `linear-gradient(72deg, rgba(0, 39, 123, 0.7) 0%, rgba(5, 83, 177, 0.7) 100%), url(${employee.photo})`;


  const faceCircle = document.createElement('div');
  faceCircle.className = 'face-circle';
  faceCircle.style.background = `url(${employee.avatar}) center no-repeat`;


  const infoBlock = document.createElement('div');
  infoBlock.className = 'info-block';

  const inIkon = document.createElement('img')
  inIkon.className = 'in-icon';
  inIkon.src = './img/employee-photo/linked-in-icon.svg';
  inIkon.alt = `linkedIn icon`;

  const nextIcon = document.createElement("img")
  nextIcon.src = "./img/employee-photo/go-next-icon.png"
  nextIcon.alt = "icon with arrow"
  nextIcon.classList.add('go-in-icon')

  const nameParagraph = document.createElement('p');
  nameParagraph.className = 'name';
  nameParagraph.textContent = employee.name;

  const positionParagraph = document.createElement('p');
  positionParagraph.className = 'position';
  positionParagraph.textContent = employee.role;

  nameParagraph.appendChild(nextIcon)
  nameParagraph.appendChild(inIkon)

  infoBlock.appendChild(nameParagraph);
  infoBlock.appendChild(positionParagraph);

  card.appendChild(faceCircle)
  card.appendChild(infoBlock);

  employeesList.appendChild(card);
});
