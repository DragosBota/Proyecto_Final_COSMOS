import './TravelPackages.css'

const template = () => {
 return `
 <h4>Travel Packages</h4>
 <div id="travelContainer">
  
 </div>
 `
};

const TravelPackages = () => {
  const packages = document.createElement("article");
  packages.id = "TravelPackages";
  packages.innerHTML = template();

  document.querySelector("#app").appendChild(packages);
}

export default TravelPackages;