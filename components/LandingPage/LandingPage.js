import './LandingPage.css'

const template = () =>{
  return `
  <section id="CONTAINER">
  <div id="slide-1" class="slide active">
    <img id="slider-1" src="./public/assets/beachcomber_island_fiji-wallpaper-2560x1440.jpg" alt="">
    <div id="content">
      <h1>Bali<br> <span>Island 1</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maxime consectetur tenetur cum laborum vel cumque aspernatur sed illum iste ex hic et beatae quam, voluptas, error culpa laboriosam? Dolor.</p>
      <a href="#">Read More</a>
    </div>
  </div>

  <div id="slide-2" class="slide">
  <img id="slider-2" src="./public/assets/destinations-1.jpg" alt="">
    <div id="content">
      <h1>Wonderful <br> <span>Island 2</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maxime consectetur tenetur cum laborum vel cumque aspernatur sed illum iste ex hic et beatae quam, voluptas, error culpa laboriosam? Dolor.</p>
      <a href="#">Read More</a>
    </div>
  </div>

  <div id="slide-3" class="slide">
    <img id="slider-3" src="https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9tYXxlbnwwfHwwfHx8MA%3D%3D" alt="">
    <div id="content">
      <h1>Wonderful <br> <span>Island 3</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maxime consectetur tenetur cum laborum vel cumque aspernatur sed illum iste ex hic et beatae quam, voluptas, error culpa laboriosam? Dolor.</p>
      <a href="#">Read More</a>
    </div>
  </div>

  <div id="slide-4" class="slide">
    <img id="slider-4" src="https://images.unsplash.com/photo-1541336032412-2048a678540d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D" alt="">
    <div id="content">
      <h1>Wonderful <br> <span>Island 4</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maxime consectetur tenetur cum laborum vel cumque aspernatur sed illum iste ex hic et beatae quam, voluptas, error culpa laboriosam? Dolor.</p>
      <a href="#">Read More</a>
    </div>
  </div>

  <section id="slider-nav">
    <div class="nav-btn active"></div>
    <div class="nav-btn"></div>
    <div class="nav-btn"></div>
    <div class="nav-btn"></div>
  </section>

  <div id="media-icons">
    <a href="#">
      <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
      </svg>
    </a>
    <a href="#">
      <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
      </svg>      
    </a>
    <a href="#">
      <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
      </svg>      
    </a>
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