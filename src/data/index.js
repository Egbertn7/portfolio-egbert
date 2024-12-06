// import KelasImage1 from "../assets/img/kelas/kelas-1.jpg";
// import KelasImage2 from "../assets/img/kelas/kelas-2.jpg";
// import KelasImage3 from "../assets/img/kelas/kelas-3.jpg";
// import KelasImage4 from "../assets/img/kelas/kelas-4.jpg";
// import KelasImage5 from "../assets/img/kelas/kelas-5.jpg";
// import KelasImage6 from "../assets/img/kelas/kelas-6.jpg";
// import KelasImage7 from "../assets/img/kelas/kelas-7.jpg";
// import KelasImage8 from "../assets/img/kelas/kelas-8.jpg";
// import KelasImage9 from "../assets/img/kelas/kelas-9.jpg";

// portofolioPage
import { Link } from 'react-router-dom';
import Image1 from '../assets/img/sertifikat1.svg';
import Image2 from '../assets/img/sertifikat2.svg';
import Image3 from '../assets/img/sertifikat3.svg';
import Image4 from '../assets/img/sertifikat4.svg';
import Image5 from '../assets/img/sertifikat5.svg';
import Image6 from '../assets/img/sertifikat6.svg';
import Image7 from '../assets/img/sertifikat7.svg';
import Image8 from '../assets/img/sertifikat8.svg';

// project
import Project1 from '../assets/img/project/project1.svg';

// testinialPage 
import client1 from "../assets/img/testimonial/client1.svg";
import { Placeholder } from 'react-bootstrap';


// ini namanya  API buat looping data artinya tinggal ambil data dari file index.js 
export const navLinks = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "about", 
    text: "About", 
  },
  {
    id: 3,
    path: "portofolio",
    text: "Portfolio",
  },
  {
    id: 4,
    path: "testimonial",
    text: "Testimonial",
  },
  {
    id: 5,
    path: "faq",
    text: "FAQ",
  },
  // {
  //   id:6,
  //   path: "project",
  //   text: "Project"
  // }
];

export const semuaKelas = [
  {
    id: 1,
    image: Image1,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star-half-stroke",
    title: "Character Illustration with Adobe Illustrator",
    price: "Rp. 300.000",
    buy: "Beli Kelas",
    delay: "",
  },
  {
    id: 2,
    image: Image2,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "UI UX Website Design for Beginner with Figma",
    price: "Rp. 340.000",
    buy: "Beli Kelas",
    delay: "",
  },
  {
    id: 3,
    image: Image3,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Mastering Web Developer Bootstrap 5",
    price: "Rp. 280.000",
    buy: "Beli Kelas",
    delay: "",
  },
  {
    id: 4,
    image: Image4,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Mastering Logo with Adobe Illustrator",
    price: "Rp. 420.000",
    buy: "Beli Kelas",
    delay: "",
  },
  {
    id: 5,
    image: Image5,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "3D Modelling for Beginner with 3D Blender",
    price: "Rp. 380.000",
    buy: "Beli Kelas",
    delay: "",
  },
  {
    id: 6,
    image: Image6,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Mastering Icon Design with Adobe Illustrator",
    price: "Rp. 300.000",
    buy: "Beli Kelas",
    delay: "",
  },
  {
    id: 7,
    image: Image7,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star-half-stroke",
    title: "Design Vektor with Corel Draw CC for Beginner",
    price: "Rp. 340.000",
    buy: "Beli Kelas",
    delay: "",
  },
   {
     id: 8,
     image: Image8,
     star1: "fa-solid fa-star",
     star2: "fa-solid fa-star",
     star3: "fa-solid fa-star",
     star4: "fa-solid fa-star",
     star5: "fa-solid fa-star-half-stroke",
     title: "UI UX Design with Adobe XD for Beginner",
     price: "Rp. 400.000",
     buy: "Beli Kelas",
     delay: "",
     },
  // {
  //   id: 9,
  //   image: KelasImage9,
  //   star1: "fa-solid fa-star",
  //   star2: "fa-solid fa-star",
  //   star3: "fa-solid fa-star",
  //   star4: "fa-solid fa-star",
  //   star5: "fa-solid fa-star-half-stroke",
  //   title: "Mastering Mobile Developer with Flutter",
  //   price: "Rp. 320.000",
  //   buy: "Beli Kelas",
  //   delay: "600",
  // },
];

export const kelasTerbaru = [
  {
    id: 1,
    image: Image1,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star-half-stroke",
    title: "Character Illustration with Adobe Illustrator",
    price: "Rp. 300.000",
    buy: "Beli Kelas",
    delay: "",
  },
  {
    id: 2,
    image: Image2,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "UI UX Website Design for Beginner with Figma",
    price: "Rp. 340.000",
    buy: "Beli Kelas",
    delay: "",
  },
  {
    id: 3,
    image: Image3,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Mastering Web Developer Bootstrap 5",
    price: "Rp. 280.000",
    buy: "Beli Kelas",
    delay: "",
  },
  {
    id: 4,
    image: Image4,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Mastering Logo with Adobe Illustrator",
    price: "Rp. 420.000",
    buy: "Beli Kelas",
    delay: "",
  },
  {
    id: 5,
    image: Image5,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "3D Modelling for Beginner with 3D Blender",
    price: "Rp. 380.000",
    buy: "Beli Kelas",
    delay: "",
  },
  {
    id: 6,
    image: Image6,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Mastering Icon Design with Adobe Illustrator",
    price: "Rp. 300.000",
    buy: "Beli Kelas",
    delay: "",
  },
{
  id: 7,
  image: Image7,
  star1: "fa-solid fa-star",
  star2: "fa-solid fa-star",
  star3: "fa-solid fa-star",
  star4: "fa-solid fa-star",
  star5: "fa-solid fa-star",
  title: "Mastering Icon Design with Adobe Illustrator",
  price: "Rp. 300.000",
  buy: "Beli Kelas",
  delay: "",
},
{
id: 8,
image: Image8,
star1: "fa-solid fa-star",
star2: "fa-solid fa-star",
star3: "fa-solid fa-star",
star4: "fa-solid fa-star",
star5: "fa-solid fa-star",
title: "Mastering Icon Design with Adobe Illustrator",
price: "Rp. 300.000",
buy: "Beli Kelas",
delay: "",
},
];

export const testimonial = [
  {
    id: 1,
    desc: "He did a great job finishing my website, he forgot a few things at first but after reminding him he went above and beyond to finish the work. Well done",
    image: client1,
    name: "legendary69420",
    skill: "Client From Fiverr",
    country: "Belgium",
  },
];

export const dataSwiper = [
  {
    id: 1,
    desc: "He did a great job finishing my website, he forgot a few things at first but after reminding him he went above and beyond to finish the work. Well done",
    image: client1,
    name: "legendary69420",
    skill: "Client From Fiverr",
    country: "Belgium",
  },
];

export const faq = [
  {
    id: 1,
    eventKey: 0,
    title: "What services do you offer?",
    desc: "I offer freelance services via Fiverr, namely services for creating responsive websites, designing websites, creating graphic designs, creating characters for 3D animation, editing photos, editing videos, etc. If you are interested, you can contact me via Gmail or telephone number.",
  },
  {
    id: 2,
    eventKey: 1,
    title: "Can it be shared with other people?",
    desc: "Of course, you can support me by sharing via social media or others",
  },
  {
    id: 3,
    eventKey: 2,
    title: "How do I start a project with you?",
    desc: "You can contact me through the Contact page on this website, or directly through a freelance platform like Fiverr. I will respond within 24 hours to discuss the details of your project.",
  },
  {
    id: 4,
    eventKey: 3,
    title: "How long will it take to complete the project?",
    desc: "Project completion time varies depending on the complexity and size of the project. But I will do my best to complete it on the same day, without sacrificing quality.",
  },
  {
    id: 5,
    eventKey: 4,
    title: "How does the payment system work?",
    desc: "Payments can be made through platforms like Fiverr. I use secure and verified payment methods to ensure transactions go smoothly and according to agreement.",
  },
  {
    id: 6,
    eventKey: 5,
    title: "Do you provide revisions?",
    desc: "Yes, I offer revisions on every project to ensure the results meet your expectations. The number of revisions offered will depend on the initial agreement, but I always strive to ensure client satisfaction.",
  },
  {
    id: 7,
    eventKey: 6,
    title: "What types of payment methods can be used?",
    desc: "For payment methods, you can use PayPal, if you want to use another method, please discuss it.",
  },
  {
    id: 8,
    eventKey: 7,
    title: "What are the advantages of working with you over other freelancers?",
    desc: "I focus on details, open communication, and client satisfaction. With years of experience in the industry, I prioritize quality and timely results, and always strive to exceed client expectations.",
  },
];


export const project = [
  {
    id: 1,
    image: Project1,
    title: "Project1",
    desc: "Creating a responsive website using TailwindCSS",
    skills: ["HTML", "CSS", "TailwindCSS", "Javascript"],
    link: "https://github.com/Egbertn7/project-client-1.git",
    delay: "1300",
  },
  {
    id: 2,
    image: Placeholder,
    title: "",
    desc: "",
    skills: "",
    link: "",
    delay: "1300",
  },
  {
    id: 3,
    image: Placeholder,
    title: "",
    desc: "",
    skills: "",
    link: "",
    delay: "1300",
  },
  
]