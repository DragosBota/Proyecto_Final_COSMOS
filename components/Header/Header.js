import './Header.css'


const template = () => {
  return `
    <sectrion id="header-section" class="fixed">
    <div id="container">
      <a href="#" id="logo">COSMOS</a>

      <div id="bars">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-width="1.7" d="M5 7h14M5 12h14M5 17h10"/>
        </svg>
      </div>

      <div id="navBurguer">
        <div class="close">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18 17.94 6M18 18 6.06 6"/>
          </svg>      
        </div>
        <ul>
          <li><a href="#Destinations">Destinatons</a></li>
          <li><a href="#TravelPackages">Travel Packages</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#SignUp">Sign Up</a></li>
        </ul>
      </div>

      <nav id="navList">
        <a href="#Destinations" class="active">Destinations</a>
        <a href="#TravelPackages">Travel Packages</a>
        <a href="#About">About Us</a>
        <a href="#SignUp">Sign Up</a>
      </nav>
    </div>
    </section>
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