import './Destinations.css'

const template = () =>{
  return `
  <h4>destinations</h4>

  <section class="description">
    <h2 class="dest-title">City Escape And Nature Retreats</h2>
    <div class="content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero culpa pariatur iusto sequi, ut expedita soluta nihil est quaerat itaque corporis maiores in, at id officiis tempore. Harum vitae fugit itaque expedita asperiores vero delectus?</p>

      <a href="#"> Explore More 
      
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 12H5m14 0-4 4m4-4-4-4"/>
        </svg>
    

      </a>
    </div>
  </section>

  <section class="gallery">

    <div class="box box1">
      <img src="/assets/home-background.jpg" alt="">
      <div class="text">
        <h2>East Nusa Tenggara</h2>
      </div>
    </div>

    <div class="box box2">
      <img src="/assets/destinations-1.jpg" alt="">
      <div class="text">
        <h2>Bali</h2>
      </div>
    </div>

    <div class="box box3">
      <img src="/assets/destinations-2.jpg" alt="">
      <div class="text">
        <h2>Bali</h2>
      </div>
    </div>

    <div class="box box4">
      <img src="/assets/destinations-3.jpg" alt="">
      <div class="text">
        <h2>East Java</h2>
      </div>
    </div>

    <div class="box box5">
      <img src="/assets/destinations-4.jpg" alt="">
      <div class="text">
        <h2>West Papua</h2>
      </div>
    </div>
  </section>
  `
};

const Destinations = () => {
  const dest = document.createElement("article");
  dest.id = "Destinations";
  dest.innerHTML = template();

  document.querySelector("#app").appendChild(dest);
};

export default Destinations;