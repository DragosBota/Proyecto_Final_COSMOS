import './TravelPackages.css'

const template = () => {
    const packagesData = [
      { 
        id: 1, 
        name: "Maldives: Luxury Over Water", 
        price: "$3,999", 
        image: "/assets/travelpackage-1.avif"
      },
      { 
        id: 2, 
        name: "Paris: The City of Love", 
        price: "$2,499", 
        image: "/assets/travelpackage-2.avif"
      },
      { 
        id: 3, 
        name: "Santorini: Magical Sunsets", 
        price: "$2,799", 
        image: "/assets/travelpackage-3.avif"
      },
      { 
        id: 4, 
        name: "Bali: Tropical Eden", 
        price: "$2,299", 
        image: "/assets/travelpackage-4.avif"
      },
      { 
        id: 5, 
        name: "Venice: Gondola Rides", 
        price: "$2,199", 
        image: "/assets/travelpackage-5.avif"
      },
      { 
        id: 6, 
        name: "Kyoto: Beauty and Serenity", 
        price: "$2,899", 
        image: "/assets/travelpackage-6.avif"
      },
      { 
        id: 7, 
        name: "Maui: Hawaiian Getaway", 
        price: "$3,199", 
        image: "/assets/travelpackage-7.avif"
      },
      { 
        id: 8, 
        name: "Zanzibar: African Paradise", 
        price: "$2,599", 
        image: "/assets/travelpackage-8.webp"
      }
    ];
  

  const travelItems = packagesData.map((pkg) => `
      <div class="package" id="package-${pkg.id}">
        <img src="${pkg.image}" alt="${pkg.name}" />
        <h5>${pkg.name}</h5>
        <p>Price: ${pkg.price}</p>
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