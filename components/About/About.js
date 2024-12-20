import './About.css'


const template = () => {
  return `
  <section id="aboutContainer">

    <div id="card1">
      <p>At COSMOS, we believe the world isn't just a place to live—it's a treasure trove of experiences waiting to be discovered. We're here to transform your travel dreams into reality, one unforgettable journey at a time.
      </p>
    </div>

    <div id="card2">
    <img src="./public/assets/destinations-2.jpg" alt="">
    </div>

    <div id="card3">
      <p>About Us</p>
    </div>

    <div id="card4">
      <h5>Your Adventure, Your Way</h5>
      <p>
        Whether you're a seasoned globetrotter or embarking on your first big adventure, COSMOS is your trusted partner in exploring the world your way.
      </p>
      <p>
        From luxury escapes to backpacking thrills, our packages adapts to every style. And if you have something completely unique in mind? We'll help bring it to life.
      </p>
    </div>

    <div id="card5">
    </div>

    <div id="card6">  
    <img src="./public/assets/card6.jpg" alt="">
    </div>
  </section>

  `
}

const About = () => {
const about = document.createElement("article");
about.id = "About";
about.innerHTML = template();

document.querySelector("#app").appendChild(about);
}

export default About;