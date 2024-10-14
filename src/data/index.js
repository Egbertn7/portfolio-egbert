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
import Image1 from '../assets/img/sertifikat1.png';
import Image2 from '../assets/img/sertifikat2.png';
import Image3 from '../assets/img/sertifikat3.png';
import Image4 from '../assets/img/sertifikat4.png';
import Image5 from '../assets/img/sertifikat5.png';
import Image6 from '../assets/img/sertifikat6.png';

// testinialPage 
import client1 from "../assets/img/testimonial/client1.png";


// ini namanya  API buat looping data artinya tinggal ambil data dari file index.js 
export const navLinks = [
  {
    id: 1,
    path: "home",
    text: "Home",
  },
  {
    id: 2,
    path: "about", 
    text: "About", //Syarat & Ketentuan tentang skill
  },
  {
    id: 3,
    path: "portofolio",
    text: "Portofolio",
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
    delay: "1300",
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
    delay: "1600",
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
    delay: "1900",
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
    delay: "300",
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
    delay: "600",
  },
  // {
  //   id: 7,
  //   image: KelasImage7,
  //   star1: "fa-solid fa-star",
  //   star2: "fa-solid fa-star",
  //   star3: "fa-solid fa-star",
  //   star4: "fa-solid fa-star",
  //   star5: "fa-solid fa-star-half-stroke",
  //   title: "Design Vektor with Corel Draw CC for Beginner",
  //   price: "Rp. 340.000",
  //   buy: "Beli Kelas",
  //   delay: "",
  // },
  // {
  //   id: 8,
  //   image: KelasImage8,
  //   star1: "fa-solid fa-star",
  //   star2: "fa-solid fa-star",
  //   star3: "fa-solid fa-star",
  //   star4: "fa-solid fa-star",
  //   star5: "fa-solid fa-star-half-stroke",
  //   title: "UI UX Design with Adobe XD for Beginner",
  //   price: "Rp. 400.000",
  //   buy: "Beli Kelas",
  //   delay: "300",
  // },
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
    delay: "200",
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
    delay: "400",
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
    delay: "200",
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
    delay: "400",
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
    title: "Apa saja layanan yang Anda tawarkan?",
    desc: "Saya membuka jasa sebagai freelance lewat fiverr atau upwork yaitu jasa membuat website yang resposive, mendesain website, membuat graphic design, membuat karakter untuk animasi 3d, mengedit foto, mengedit video, dll jika berminat bisa hubungi saya lewat gmail atau whatsapp",
  },
  {
    id: 2,
    eventKey: 1,
    title: "Apakah Boleh di Share ke Orang Lain?",
    desc: "Tentu saja, anda bisa mendukung saya dengan share lewat media sosial maupun yang lain",
  },
  {
    id: 3,
    eventKey: 2,
    title: "Bagaimana cara saya memulai proyek dengan Anda?",
    desc: "Anda dapat menghubungi saya melalui halaman Kontak di website ini, atau langsung melalui platform freelance seperti Fiverr atau Upwork. Saya akan menanggapi dalam waktu 24 jam untuk membahas detail proyek Anda.",
  },
  {
    id: 4,
    eventKey: 3,
    title: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek?",
    desc: "Waktu penyelesaian proyek bervariasi tergantung pada kompleksitas dan ukuran proyek. Secara umum, proyek kecil biasanya diselesaikan dalam 3-5 hari kerja, sementara proyek besar mungkin memerlukan waktu lebih lama. Saya akan memberikan estimasi yang jelas sebelum memulai proyek.",
  },
  {
    id: 5,
    eventKey: 4,
    title: "Bagaimana sistem pembayarannya?",
    desc: "Pembayaran dapat dilakukan melalui platform seperti Fiverr dan Upwork. Saya menggunakan metode pembayaran yang aman dan terverifikasi untuk memastikan transaksi berjalan lancar dan sesuai dengan kesepakatan.",
  },
  {
    id: 6,
    eventKey: 5,
    title: "Apakah Anda menyediakan revisi?",
    desc: "Ya, saya menawarkan revisi pada setiap proyek untuk memastikan hasil sesuai dengan harapan Anda. Jumlah revisi yang ditawarkan akan tergantung pada kesepakatan awal, namun saya selalu berusaha untuk memastikan kepuasan klien.",
  },
  {
    id: 7,
    eventKey: 6,
    title: "Jenis Metode pembayaran bisa lewat apa?",
    desc: "Untuk metode pembayarannya bisa lewat dari paypal, jika ingin lewat yang lain silakan berdiskusi ya",
  },
  {
    id: 8,
    eventKey: 7,
    title: "Apa keunggulan bekerja dengan Anda dibandingkan freelancer lain?",
    desc: "Saya berfokus pada detail, komunikasi yang terbuka, dan kepuasan klien. Dengan pengalaman bertahun-tahun di industri, saya mengutamakan kualitas dan hasil yang tepat waktu, serta selalu berusaha melebihi ekspektasi klien.",
  },
];
