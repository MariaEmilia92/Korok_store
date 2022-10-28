const productsCart = {
  33: {
    name: "Milk",
    description:
      "O melhor leite da cidade, produzido no campo com a qualidade que somente Lon Lon Ranch consegue fazer.",
    images: [
      "../img/produtos/leite.png",
    ],
    price:20.99,
    categories: [1],
    quantity: 3,
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
    quantity: 1,
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
    quantity: 1,
  },
};

module.exports = {
  productsCart,
};
