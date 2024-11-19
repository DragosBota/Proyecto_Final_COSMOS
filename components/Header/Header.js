import './Header.css'

const template = () => {
return `
<a href="#" id="logo">COSMOS</a>

<div id="navBurguer">
    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-width="1.7" d="M5 7h14M5 12h14M5 17h10"/>
  </svg>
  </div>

<nav id="navList">
  <a href="#Destinations" class="active">Destinations</a>
  <a href="#AboutUs">About Us</a>
  <a href="#SignUp">Sign Up</a>
</nav>
`
};
        

//Function that will implement homepage
const Header = () => {
//We create a header section
  const header = document.createElement("header");

//We paint it in the #app
  document.querySelector("#app").
    appendChild(header).
    innerHTML = template();
};

export default Header;