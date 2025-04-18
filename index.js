const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const perfumes = [
  {
    nombre: "Lattafa Yara",
    notas: ["Ananá tropical", "Toque floral", "Vainilla"]
  },
  {
    nombre: "Lattafa Bade'e Al Oud (Oud for Glory)",
    notas: ["Oud (madera de agar)", "Azafrán", "Nuez moscada"]
  },
  {
    nombre: "Lattafa Khamrah",
    notas: ["Whisky", "Canela", "Vainilla"]
  },
  {
    nombre: "Al Haramain Amber Oud Gold Edition",
    notas: ["Ámbar", "Melón dulce", "Vainilla"]
  },
  {
    nombre: "Armaf Club de Nuit Intense Man",
    notas: ["Piña", "Abedul ahumado", "Almizcle"]
  },
  {
    nombre: "Lattafa Asad",
    notas: ["Canela", "Clavo de olor", "Ámbar"]
  },
  {
    nombre: "Rasasi Hawas for Him",
    notas: ["Bergamota", "Ciruela", "Notas acuáticas (acorde marino)"]
  },
  {
    nombre: "Maison Alhambra Salvo",
    notas: ["Bergamota", "Pimienta de Sichuan", "Ambroxan"]
  },
  {
    nombre: "Afnan 9PM",
    notas: ["Manzana verde", "Canela", "Vainilla"]
  },
  {
    nombre: "Ard Al Zaafaran Oud 24 Hours",
    notas: ["Chocolate oscuro", "Pachulí", "Oud (madera de agar)"]
  },
  {
    nombre: "Lattafa Raghba",
    notas: ["Vainilla", "Oud (madera de agar)", "Incienso ahumado"]
  },
  {
    nombre: "Swiss Arabian Shaghaf Oud",
    notas: ["Oud (madera de agar)", "Rosa", "Praliné (dulce achocolatado)"]
  },
  {
    nombre: "Swiss Arabian Casablanca",
    notas: ["Manzana", "Uvas maduras", "Caramelo"]
  },
  {
    nombre: "Lattafa Ana Abiyedh Rouge",
    notas: ["Azafrán", "Almendra amarga", "Jazmín"]
  },
  {
    nombre: "Lattafa Maahir",
    notas: ["Pimienta negra", "Cuero", "Oud (madera de agar)"]
  },
  {
    nombre: "Lattafa Oud Mood",
    notas: ["Especias orientales", "Ámbar", "Oud (madera de agar)"]
  },
  {
    nombre: "Ajmal Amber Wood",
    notas: ["Ámbar", "Cedro", "Pachulí"]
  },
  {
    nombre: "Ajmal Hatkora Wood",
    notas: ["Lima Hatkora (cítrico oriental)", "Notas amaderadas", "Musgo"]
  },
  {
    nombre: "Rasasi Shuhrah",
    notas: ["Hoja de tomatera (nota verde herbal)", "Tabaco seco", "Cuero"]
  },
  {
    nombre: "Afnan Supremacy Not Only Intense",
    notas: ["Grosella negra", "Bergamota", "Musgo de roble"]
  }
];

app.get("/perfumes", (req, res) => {
  res.json(perfumes);
});

app.listen(PORT, () => {
  console.log(`API escuchando en el puerto ${PORT}`);
}); 