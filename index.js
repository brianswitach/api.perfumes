const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const perfumes = [
  {
    nombre: "Lattafa Yara",
    notas: ["Ananá tropical", "Toque floral", "Vainilla"],
    imagen: "https://lattafa.al/cdn/shop/files/image_tpO.webp?v=1721595528"
  },
  {
    nombre: "Lattafa Bade'e Al Oud (Oud for Glory)",
    notas: ["Oud (madera de agar)", "Azafrán", "Nuez moscada"],
    imagen: "https://m.media-amazon.com/images/I/61CZPc2+NXL._SL1000_.jpg"
  },
  {
    nombre: "Lattafa Khamrah",
    notas: ["Whisky", "Canela", "Vainilla"],
    imagen: "https://avinari.cl/cdn/shop/files/o.fDr4cjowxjt-1_800x.jpg?v=1725747470"
  },
  {
    nombre: "Al Haramain Amber Oud Gold Edition",
    notas: ["Ámbar", "Melón dulce", "Vainilla"],
    imagen: "https://aztra.pe/cdn/shop/files/resizedImg_1000x1000_2_3d2bf1d4-cb2a-4bb1-b181-8a81c6e766af.jpg?v=1737735497&width=1000"
  },
  {
    nombre: "Armaf Club de Nuit Intense Man",
    notas: ["Piña", "Abedul ahumado", "Almizcle"],
    imagen: "https://m.media-amazon.com/images/I/61c7p6Q4PiL.jpg"
  },
  {
    nombre: "Lattafa Asad",
    notas: ["Canela", "Clavo de olor", "Ámbar"],
    imagen: "https://www.anikashop.com.ar/product_images/o/025/61rIEt70ZPL._AC_UF1000_1000_QL80___22034_zoom.jpg"
  },
  {
    nombre: "Rasasi Hawas for Him",
    notas: ["Bergamota", "Ciruela", "Notas acuáticas (acorde marino)"],
    imagen: ""
  },
  {
    nombre: "Maison Alhambra Salvo",
    notas: ["Bergamota", "Pimienta de Sichuan", "Ambroxan"],
    imagen: ""
  },
  {
    nombre: "Afnan 9PM",
    notas: ["Manzana verde", "Canela", "Vainilla"],
    imagen: ""
  },
  {
    nombre: "Ard Al Zaafaran Oud 24 Hours",
    notas: ["Chocolate oscuro", "Pachulí", "Oud (madera de agar)"],
    imagen: ""
  },
  {
    nombre: "Lattafa Raghba",
    notas: ["Vainilla", "Oud (madera de agar)", "Incienso ahumado"],
    imagen: ""
  },
  {
    nombre: "Swiss Arabian Shaghaf Oud",
    notas: ["Oud (madera de agar)", "Rosa", "Praliné (dulce achocolatado)"],
    imagen: ""
  },
  {
    nombre: "Swiss Arabian Casablanca",
    notas: ["Manzana", "Uvas maduras", "Caramelo"],
    imagen: ""
  },
  {
    nombre: "Lattafa Ana Abiyedh Rouge",
    notas: ["Azafrán", "Almendra amarga", "Jazmín"],
    imagen: ""
  },
  {
    nombre: "Lattafa Maahir",
    notas: ["Pimienta negra", "Cuero", "Oud (madera de agar)"],
    imagen: ""
  },
  {
    nombre: "Lattafa Oud Mood",
    notas: ["Especias orientales", "Ámbar", "Oud (madera de agar)"],
    imagen: ""
  },
  {
    nombre: "Ajmal Amber Wood",
    notas: ["Ámbar", "Cedro", "Pachulí"],
    imagen: ""
  },
  {
    nombre: "Ajmal Hatkora Wood",
    notas: ["Lima Hatkora (cítrico oriental)", "Notas amaderadas", "Musgo"],
    imagen: ""
  },
  {
    nombre: "Rasasi Shuhrah",
    notas: ["Hoja de tomatera (nota verde herbal)", "Tabaco seco", "Cuero"],
    imagen: ""
  },
  {
    nombre: "Afnan Supremacy Not Only Intense",
    notas: ["Grosella negra", "Bergamota", "Musgo de roble"],
    imagen: ""
  }
];

app.get("/perfumes", (req, res) => {
  res.json(perfumes);
});

app.listen(PORT, () => {
  console.log(`API escuchando en el puerto ${PORT}`);
}); 