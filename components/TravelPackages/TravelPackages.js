import './TravelPackages.css'

const template = () => {
    const packagesData = [
      { 
        id: 1, 
        name: "Maldives: Luxury Over Water", 
        price: "$3,999", 
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" 
      },
      { 
        id: 2, 
        name: "Paris: The City of Love", 
        price: "$2,499", 
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" 
      },
      { 
        id: 3, 
        name: "Santorini: Magical Sunsets", 
        price: "$2,799", 
        image: "https://images.unsplash.com/photo-1560272564-9f0dbfd53873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" 
      },
      { 
        id: 4, 
        name: "Bali: Tropical Eden", 
        price: "$2,299", 
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" 
      },
      { 
        id: 5, 
        name: "Venice: Gondola Rides", 
        price: "$2,199", 
        image: "https://images.unsplash.com/photo-1506973035872-a4f40b3a51c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" 
      },
      { 
        id: 6, 
        name: "Kyoto: Beauty and Serenity", 
        price: "$2,899", 
        image: "https://images.unsplash.com/photo-1576410840833-ecfe5b637d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" 
      },
      { 
        id: 7, 
        name: "Maui: Hawaiian Getaway", 
        price: "$3,199", 
        image: "https://images.unsplash.com/photo-1508280777628-5b29f03dba5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" 
      },
      { 
        id: 8, 
        name: "Zanzibar: African Paradise", 
        price: "$2,599", 
        image: "https://images.unsplash.com/photo-1570032257800-89f3095a5d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" 
      }
    ];
  

  const travelItems = packagesData.map((pkg) => `
      <div class="package" id="package-${pkg.id}">
        <img src="${pkg.image}" alt="${pkg.name}" />
        <h5>${pkg.name}</h5>
        <p>Price: ${pkg.price}</p>
        <img>
      </div>
    `
  ).join(""); // Unimos el array en un solo string

  return `
    <h4>Travel Packages</h4>
    <section id="travelContainer">
      ${travelItems}
    </section>
  `;
};

const TravelPackages = () => {
  const packages = document.createElement("article");
  packages.id = "TravelPackages";
  packages.innerHTML = template();

  document.querySelector("#app").appendChild(packages);
}

export default TravelPackages;