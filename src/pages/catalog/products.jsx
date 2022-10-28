
const products = {
  33: {
    name: "Milk",
    description:
      "O melhor leite da cidade, produzido no campo com a qualidade que somente Lon Lon Ranch consegue fazer.",
    images: [
      "../img/produtos/leite.png",
    ],
    price:20.99,
    categories: [1],
  },
  1: {
    name: "Length of Truth",
    description:
      "Com a Lente da Verdade você pode ver mais do que gostaria! Com ela você consegue achar esconderijos, portas escondias e até mesmo o que tem dentro de um baú sem precisar abri-lo.",
    images: [
      "../img/produtos/lenghtoftruth.png",
    ],
    price: 300.99,
    promo_price: 220.99,
    percent: 10,
    categories: [4],
  },
 4: {
    name: "Longshot",
    description:
      "Longshot é o melhor item para escaladas e conseguir pegar aquela fruta bonita no topo da árvore.",
    images: [
      "../img/produtos/longshot.png",
    ],
    price: 350.09,
    categories: [2, 4],
  },
  2: {
    name: "Red Potion",
    description:
      "Com Red Potion, nem aquela ressaca de final de ano te abala mais. Com ele você recupera 100% da sua vida e força!",
    images: [
      "../img/produtos/redpotion.png",
    ],
    price: 40.99,
    promo_price: 36.99,
    percent: 10,
    categories: [1, 4],
  },
  5: {
    name: "Rabbit Mask",
    description:
      "Com essa belezinha você nunca mais vai chega atrasado nos lugares!",
    images: [
      "../img/produtos/coelhomask.png",
    ],
    price: 80.99,
    promo_price: 76.99,
    percent: 15,
    categories: [3, 4],
  },
  6: {
    name: "Estilingue",
    description:
      "Com um excelente acabamento e materiais resistentes, você não vai deixar escapar nenhum alvo!",
    images: [
      "../img/produtos/estilingue.png",
    ],
    price: 100.99,
    percent: 15,
    categories: [2],
  },
  7: {
    name: "Heart",
    description:
      "Está de coração partido? Compre um hoje mesmo!",
    images: [
      "../img/produtos/coracon.png",
    ],
    price: 300.99,
    percent: 15,
    categories: [4],
  },
  8: {
    name: "Arco e Flecha",
    description:
      "Essa belezinha aqui é feita da melhor madeira que existe na floresta. Com ele você acerta até mesmo os alvos mais distantes!",
    images: [
      "../img/produtos/arco.png",
    ],
    price: 200.99,
    promo_price: 188.99,
    percent: 15,
    categories: [2],
  },
};

const categories = {
  1: { name: "Food" },
  2: { name: "Weapons" },
  3: { name: "Clothes" },
  4: { name: "Misc" }
};

module.exports = {
  products,
  categories,
};
