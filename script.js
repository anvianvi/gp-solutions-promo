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

const employeeList = [
  {
    photo: "./img/employee-photo/rodion.png",
    avatar: "./img/employee-photo/rodion-round.png",
    name: "Rodion Zhitomirsky",
    role: "Chairman of the Board, Co-founder",
  },
  {
    photo: "./img/employee-photo/sergey.png",
    avatar: "./img/employee-photo/sergey-round.png",
    name: "Sergey Zubekhin",
    role: "CEO, Co-founder",
  },
  {
    photo: "./img/employee-photo/maria.png",
    avatar: "./img/employee-photo/maria-round.png",
    name: "Maria Bondarenko",
    role: "VP Product, Shareholder",
  },
  {
    photo: "./img/employee-photo/eugene.png",
    avatar: "./img/employee-photo/eugene-round.png",
    name: "Eugene Boiko",
    role: "VP Software Development, Shareholder",
  },
  {
    photo: "./img/employee-photo/fred.png",
    avatar: "./img/employee-photo/fred-round.png",

    name: "Fred Bean",
    role: "Chief Partnership Officer",
  },
];

const tehnologyList = [
  {
    title: "GP Travel Enterprise",
    description:
      "GP Travel Enterprise is an innovative and powerful travel automation solution for Tour Operators, OTAs, DMCs, TMCs and Wholesalers, which helps hundreds of companies across the  globe to run and grow their businesses.",
    img: "./img/tehnology/enterprise.png",
  },
  {
    title: "GP Travel Hub",
    description:
      "GP Travel Hub is a unified API aggregator designed for saving your time, keeping money in your pocket and helping you to launch faster.",
    img: "./img/tehnology/hub.png",
  },
  {
    title: "Product-based Implementaation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu pellentesque vestibulum, augue sodales.",
    img: "./img/tehnology/implementation.png",
  },
];

const clientReview = [{
  photo: "./img/clients-review/claus.png",
  name: "Claus Palmgren Jessen",
  position: "Managing Director at Afrika-safari",
  logo: "./img/clients-review/claus-logo.svg",
  description: `“Due to their experience in travel IT we’ve selected GP Solutions to work on a custom project for Afrika-safari, which involved interaction with Amadeus. We found GP team to be professional, dependable and responsive. We are pleased to recommend GP Solutions GmbH as a reliable travel technology partner.”`,
}, {
  photo: "./img/clients-review/marc.jpeg",
  name: "Marc Blaser",
  position: "Director Projects & E-Business, Hoteplan Management AG, Switzerland",
  logo: "./img/clients-review/holtepan.png",
  description: `“Although metrics are skewed by the pandemic, GP Solutions delivered high-quality work. They demonstrated the ability to quickly allocate new resources as needed and clearly care about our needs. Their expertise in travel-oriented development and their team’s wide range of skills has been huge for us.”`,
}, {
  photo: "./img/clients-review/dennis.png",
  name: "Dennis Behnsen",
  position: "Vice President, EF Education First, Switzerland",
  logo: "./img/customers-icons/ef.svg",
  description: `“Our companies project required customization to fit our needs. Our unique requests and developments were handled very efficiently by GP Solutions. The analysists, developers and business managers at GP Solutions were always on top of things – providing detailed information and high levels of attention to detail to ensure a top quality product was produced.”`,
},
{
  photo: "./img/clients-review/stepan.jpeg",
  name: "Stan Nazarenko",
  position: "CEO, Piprate, Ireland",
  logo: "./img/clients-review/papirate.png",
  description: `“With tight deadlines looming, GP Solutions delivered the proof of concept on time, drawing praise from clients. Though initially unfamiliar with the programming language, they spent ample time to learn. Their professionalism and dedication were vital components of the project’s success.”`,
},]


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
  categoryLogo.alt = `${category.name} icon`;
  categoryLogo.classList.add("category-logo");

  const nextIcon = document.createElement("img");
  nextIcon.src = "./img/customer-categories-icons/arrow-icon.svg";
  nextIcon.alt = "icon with arrow";
  nextIcon.classList.add("next-icon");

  const categoryName = document.createElement("span");
  categoryName.textContent = category.name;

  categoryContainer.appendChild(categoryLogo);
  categoryContainer.appendChild(categoryName);
  categoryContainer.appendChild(nextIcon);

  customersCategoriesGrid.appendChild(categoryContainer);
});

const employeesList = document.getElementById("employees-list");

employeeList.forEach((employee) => {
  const card = document.createElement("div");
  card.className = "card";
  card.style.background = `linear-gradient(72deg, rgba(0, 39, 123, 0.7) 0%, rgba(5, 83, 177, 0.7) 100%), url(${employee.photo})`;

  const faceCircle = document.createElement("div");
  faceCircle.className = "face-circle";
  faceCircle.style.background = `url(${employee.avatar}) center no-repeat`;

  const infoBlock = document.createElement("div");
  infoBlock.className = "info-block";

  const inIkon = document.createElement("img");
  inIkon.className = "in-icon";
  inIkon.src = "./img/employee-photo/linked-in-icon.svg";
  inIkon.alt = `linkedIn icon`;

  const nextIcon = document.createElement("img");
  nextIcon.src = "./img/employee-photo/go-next-icon.png";
  nextIcon.alt = "icon with arrow";
  nextIcon.classList.add("go-in-icon");

  const nameParagraph = document.createElement("p");
  nameParagraph.className = "name";
  nameParagraph.textContent = employee.name;

  const positionParagraph = document.createElement("p");
  positionParagraph.className = "position";
  positionParagraph.textContent = employee.role;

  nameParagraph.appendChild(nextIcon);
  nameParagraph.appendChild(inIkon);

  infoBlock.appendChild(nameParagraph);
  infoBlock.appendChild(positionParagraph);

  card.appendChild(faceCircle);
  card.appendChild(infoBlock);

  employeesList.appendChild(card);
});

const tehList = document.getElementById("teh-list");

tehnologyList.forEach((item) => {
  const card = document.createElement("div");
  card.className = "teh-card";

  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = `ilustration for ${item.title} card`;

  imgContainer.appendChild(img);

  const infoContainer = document.createElement("div");
  infoContainer.className = "info-container";

  const h4 = document.createElement("h4");
  h4.className = "h4";
  h4.textContent = item.title;

  const description = document.createElement("p");
  description.className = "description";
  description.textContent = item.description;

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Learn More";
  button.className = "teh-button";

  infoContainer.appendChild(h4);
  infoContainer.appendChild(description);
  infoContainer.appendChild(button);

  card.appendChild(imgContainer);
  card.appendChild(infoContainer);

  tehList.appendChild(card);
});

function createSlide(review) {
  const slideContainer = document.createElement('div');
  slideContainer.classList.add('slide-container');

  const slide = document.createElement('div');
  slide.classList.add('slide');

  const feedbackHeader = document.createElement('div');
  feedbackHeader.classList.add('feedback-header');

  const photoClient = document.createElement('div');
  photoClient.classList.add('client-photo');
  const clientPhoto = document.createElement('img');
  clientPhoto.src = review.photo;
  clientPhoto.alt = `pfoto of ${review.name}`;
  clientPhoto.classList.add('client-img')
  photoClient.appendChild(clientPhoto);

  const clientData = document.createElement('div');
  clientData.classList.add('client-data');
  const name = document.createElement('div');
  name.classList.add('name');
  name.textContent = review.name;
  const position = document.createElement('div');
  position.classList.add('position');
  position.textContent = review.position;
  clientData.appendChild(name);
  clientData.appendChild(position);

  const companyLogo = document.createElement('div');
  companyLogo.classList.add('company-logo');
  const logo = document.createElement('img');
  logo.src = review.logo;
  logo.alt = 'Company Logo';
  logo.classList.add('logo-img');
  companyLogo.appendChild(logo);

  const feedbackDescription = document.createElement('p');
  feedbackDescription.classList.add('feedback-description');
  feedbackDescription.textContent = review.description;

  feedbackHeader.appendChild(photoClient);
  feedbackHeader.appendChild(clientData);
  feedbackHeader.appendChild(companyLogo);

  slide.appendChild(feedbackHeader);
  slide.appendChild(feedbackDescription);

  slideContainer.appendChild(slide);

  return slideContainer;
}

let currentSlideIndex = 0;
const dots = document.querySelectorAll(".dot")

function initSlides(currentSlideIndex) {
  const slideList = document.getElementById('slider-list');
  const currentSlide = createSlide(clientReview[currentSlideIndex])
  currentSlide.classList.add('current-slide')
  const nextSlide = createSlide(clientReview[currentSlideIndex + 1])
  nextSlide.classList.add('next-slide')

  slideList.appendChild(currentSlide)
  slideList.appendChild(nextSlide)
  dots[currentSlideIndex].classList.add('active')
};
initSlides(currentSlideIndex);

function nextSlide() {
  const slideList = document.getElementById('slider-list');
  const slider = document.querySelectorAll('.slide-container');

  slideList.removeChild(slideList.firstChild);

  slider.forEach(element => {
    element.classList.toggle('current-slide')
    element.classList.toggle('next-slide')
  });

  let nextSlideIndex
  switch (currentSlideIndex) {
    case 0:
      nextSlideIndex = 2
      break;
    case 1:
      nextSlideIndex = 3
      break;
    case 2:
      nextSlideIndex = 0
      break;
    case 3:
      nextSlideIndex = 1
      break;
    default: console.log('error')
      break;
  }
  const nextSlide = createSlide(clientReview[nextSlideIndex])
  nextSlide.classList.add('next-slide')
  slideList.appendChild(nextSlide)

  currentSlideIndex += 1
  if (currentSlideIndex > 3) {
    currentSlideIndex = 0
  }
  dots.forEach(element => {
    element.classList.remove('active')
  });
  dots[currentSlideIndex].classList.add('active')
}

function prevSlide() {
  const slideList = document.getElementById('slider-list');
  const slider = document.querySelectorAll('.slide-container');
  slideList.removeChild(slideList.lastChild);
  slider.forEach(element => {
    element.classList.toggle('current-slide')
    element.classList.toggle('next-slide')
  });
  let priviusSlideIndex
  switch (currentSlideIndex) {
    case 0:
      priviusSlideIndex = 3
      break;
    case 1:
      priviusSlideIndex = 0
      break;
    case 2:
      priviusSlideIndex = 1
      break;
    case 3:
      priviusSlideIndex = 2
      break;
    default: console.log('error')
      break;
  }
  const priviusSlide = createSlide(clientReview[priviusSlideIndex])
  priviusSlide.classList.add('current-slide')
  slideList.insertBefore(priviusSlide, slideList.firstChild);

  currentSlideIndex -= 1
  if (currentSlideIndex < 0) {
    currentSlideIndex = 3;
  }
  dots.forEach(element => {
    element.classList.remove('active')
  });
  dots[currentSlideIndex].classList.add('active')
}

function currentSlide(index) {
  console.log(index)

  const slideList = document.getElementById('slider-list');

  currentSlideIndex = index;
  while (slideList.firstChild) {
    slideList.removeChild(slideList.firstChild);
  }
  if (currentSlideIndex < 2
  ) {
    initSlides(currentSlideIndex)
  }

  const currentSlide = createSlide(clientReview[currentSlideIndex])
  currentSlide.classList.add('current-slide')
  const nextSlide = createSlide(clientReview[0])
  nextSlide.classList.add('next-slide')

  slideList.appendChild(currentSlide)
  slideList.appendChild(nextSlide)

  console.log(currentSlideIndex)
}


