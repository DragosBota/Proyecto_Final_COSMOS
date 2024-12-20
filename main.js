import './style.css'
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Destinations from './components/Destinations/Destinations';
import TravelPackages from './components/TravelPackages/TravelPackages';
import About from './components/About/About';
//import{gsap} from "gsap";


const create = () => {
  Header();
  LandingPage();
  Destinations();
  TravelPackages();
  About();
  
  scrollHeaderListener();
  initSlider();
  NavBurguer();
  destinationScrollToggle();
}

//Fixed navbar while scrolling
const scrollHeaderListener = () => {
  window.addEventListener("scroll", () => {
    const headerSection = document.getElementById("header-section");
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 100) {
      headerSection.classList.remove("fixed");
      headerSection.classList.add("scroll");
    }else {
      headerSection.classList.remove("scroll");
      headerSection.classList.add("fixed");
    }
  });
};

//Frontpage image slider
const initSlider = () => {
  const slides = document.querySelectorAll(".slide");
  const navButtons = document.querySelectorAll(".nav-btn");
  let currentSlide = 0;

  const goToSlide = (index) => {
    slides[currentSlide].classList.remove("active");
    slides[currentSlide].classList.add("exit");
    setTimeout(() => {
      slides[currentSlide].classList.remove("exit");
    },0.3);

    slides[index].classList.add("active");
    navButtons[currentSlide].classList.remove("active");
    navButtons[index].classList.add("active");
    currentSlide = index;
  };

  navButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => goToSlide(i));
  });
};

//NavBurguer function
const NavBurguer = () => {

const bars = document.querySelector("#bars"),
close = document.querySelector(".close"),
menu = document.querySelector("#navBurguer");


bars.addEventListener("click", () => {
    menu.classList.add("active");
    gsap.from(".menu", {
        opacity: 0,
        duration: .3
    })

    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    })
});

close.addEventListener("click", () => {
    menu.classList.remove("active")
});
};


const destinationScrollToggle = () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl_description = gsap.timeline({
    scrollTrigger: {
      trigger: ".description",
      start: "top 90%",
      end: "top 80%%",
      toggleActions: "restart none none none",
      scrub: true
    }
  })

  const tl_box1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".box1",
      start: "top 90%",
      end: "top 80%%",
      toggleActions: "restart none none none",
      scrub: true
    }
  })

  const tl_box2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".box2",
      start: "top 90%",
      end: "top 80%%",
      toggleActions: "restart none none none",
      scrub: true
    }
  })

  const tl_box3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".box3",
      start: "top 90%",
      end: "top 80%%",
      toggleActions: "restart none none none",
      scrub: true
    }
  })

  const tl_box4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".box4",
      start: "top 90%",
      end: "top 80%%",
      toggleActions: "restart none none none",
      scrub: true
    }
  })
  
  const tl_box5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".box5",
      start: "top 90%",
      end: "top 80%%",
      toggleActions: "restart none none none",
      scrub: true
    }
  })

  tl_description.to(".description", {opacity: 1, duration: 0.5})
  tl_box1.to(".box1", {x: 2000, opacity: 1, duration: 1})
  tl_box2.to(".box2", {x: 2000, opacity: 1, duration: 1})
  tl_box3.to(".box3", {x: 2000, opacity: 1, duration: 1})
  tl_box4.to(".box4", {x: 2000, opacity: 1, duration: 1})
  tl_box5.to(".box5", {x: 2000, opacity: 1, duration: 1})
};


create();