import './LandingPage.css'

const template = () =>{
  return `
  <section class="slider-wrapper">
  <div class="slider">
    <img id="slider-1" src="https://plus.unsplash.com/premium_photo-1666286163385-abe05f0326c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aXNsYXN8ZW58MHx8MHx8fDA%3D" alt="">
    <img id="slider-2" src="https://images.unsplash.com/photo-1664819089243-04a50cd3a667?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvbG9taXRhc3xlbnwwfHwwfHx8MA%3D%3D" alt="">
    <img id="slider-3" src="https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9tYXxlbnwwfHwwfHx8MA%3D%3D" alt="">
    <img id="slider-4" src="https://images.unsplash.com/photo-1541336032412-2048a678540d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D" alt="">
  </div>
  <div class="slider-nav">
    <a href="#slider-1"></a>
    <a href="#slider-2"></a>
    <a href="#slider-3"></a>
    <a href="#slider-4"></a>
  </div>

</section>
  `
}

const LandingPage = () =>{
  const landingPage = document.createElement("article");
  landingPage.id = "landingPage";

  document.querySelector("#app").appendChild(landingPage).innerHTML = template();
}

export default LandingPage;