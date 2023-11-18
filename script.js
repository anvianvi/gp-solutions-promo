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
