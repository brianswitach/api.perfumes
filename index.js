const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const perfumes = [
  {
    nombre: "Dior Sauvage",
    notas: ["Bergamota", "Pimienta", "Ambroxan"]
  },
  {
    nombre: "YSL La Nuit de L'Homme",
    notas: ["Cardamomo", "Lavanda", "Cedro"]
  },
  {
    nombre: "Bleu de Chanel",
    notas: ["Limón", "Jengibre", "Sándalo"]
  }
];

app.get("/perfumes", (req, res) => {
  res.json(perfumes);
});

app.listen(PORT, () => {
  console.log(`API escuchando en el puerto ${PORT}`);
}); 