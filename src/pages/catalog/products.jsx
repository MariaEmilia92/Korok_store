
const products = {
  1: {
    name: "Milk",
    description:
      "O melhor leite da cidade, produzido no campo com a qualidade que somente Lon Lon Ranch consegue fazer.",
    images: [
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/135bfa79-b0f9-4ca9-95ba-b81f8f61c8ab/deo0jo3-e19e9980-0e3b-4bb3-bc9e-b1215ab80bff.png/v1/fill/w_1024,h_855,strp/hookshot___the_legend_of_zelda_ocarina_of_time_by_bluetoad_10_deo0jo3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU1IiwicGF0aCI6IlwvZlwvMTM1YmZhNzktYjBmOS00Y2E5LTk1YmEtYjgxZjhmNjFjOGFiXC9kZW8wam8zLWUxOWU5OTgwLTBlM2ItNGJiMy1iYzllLWIxMjE1YWI4MGJmZi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uiuvg3WZYCrwyCflKPwnnY9ZerdMFGm7-X0ywJvz5Yk",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/135bfa79-b0f9-4ca9-95ba-b81f8f61c8ab/deo0jo3-e19e9980-0e3b-4bb3-bc9e-b1215ab80bff.png/v1/fill/w_1024,h_855,strp/hookshot___the_legend_of_zelda_ocarina_of_time_by_bluetoad_10_deo0jo3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU1IiwicGF0aCI6IlwvZlwvMTM1YmZhNzktYjBmOS00Y2E5LTk1YmEtYjgxZjhmNjFjOGFiXC9kZW8wam8zLWUxOWU5OTgwLTBlM2ItNGJiMy1iYzllLWIxMjE1YWI4MGJmZi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uiuvg3WZYCrwyCflKPwnnY9ZerdMFGm7-X0ywJvz5Yk",
    ],
    price: 20.55,
    categories: [1],
  },
  2: {
    name: "Length of truth",
    description:
      "Com a Lente da Verdade você pode ver mais do que gostaria! Com ela você consegue achar esconderijos, portas escondias e até mesmo o que tem dentro de um baú sem precisar abri-lo.",
    images: [
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/135bfa79-b0f9-4ca9-95ba-b81f8f61c8ab/deo0jo3-e19e9980-0e3b-4bb3-bc9e-b1215ab80bff.png/v1/fill/w_1024,h_855,strp/hookshot___the_legend_of_zelda_ocarina_of_time_by_bluetoad_10_deo0jo3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU1IiwicGF0aCI6IlwvZlwvMTM1YmZhNzktYjBmOS00Y2E5LTk1YmEtYjgxZjhmNjFjOGFiXC9kZW8wam8zLWUxOWU5OTgwLTBlM2ItNGJiMy1iYzllLWIxMjE1YWI4MGJmZi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uiuvg3WZYCrwyCflKPwnnY9ZerdMFGm7-X0ywJvz5Yk",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/135bfa79-b0f9-4ca9-95ba-b81f8f61c8ab/deo0jo3-e19e9980-0e3b-4bb3-bc9e-b1215ab80bff.png/v1/fill/w_1024,h_855,strp/hookshot___the_legend_of_zelda_ocarina_of_time_by_bluetoad_10_deo0jo3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU1IiwicGF0aCI6IlwvZlwvMTM1YmZhNzktYjBmOS00Y2E5LTk1YmEtYjgxZjhmNjFjOGFiXC9kZW8wam8zLWUxOWU5OTgwLTBlM2ItNGJiMy1iYzllLWIxMjE1YWI4MGJmZi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uiuvg3WZYCrwyCflKPwnnY9ZerdMFGm7-X0ywJvz5Yk",
    ],
    price: 300.99,
    promo_price: 220.99,
    percent: 10,
    categories: [4],
  },
  3: {
    name: "Longshot",
    description:
      "Longshot é o melhor item para escaladas e conseguir pegar aquela fruta bonita no topo da árvore.",
    images: [
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/135bfa79-b0f9-4ca9-95ba-b81f8f61c8ab/deo0jo3-e19e9980-0e3b-4bb3-bc9e-b1215ab80bff.png/v1/fill/w_1024,h_855,strp/hookshot___the_legend_of_zelda_ocarina_of_time_by_bluetoad_10_deo0jo3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU1IiwicGF0aCI6IlwvZlwvMTM1YmZhNzktYjBmOS00Y2E5LTk1YmEtYjgxZjhmNjFjOGFiXC9kZW8wam8zLWUxOWU5OTgwLTBlM2ItNGJiMy1iYzllLWIxMjE1YWI4MGJmZi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uiuvg3WZYCrwyCflKPwnnY9ZerdMFGm7-X0ywJvz5Yk",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/135bfa79-b0f9-4ca9-95ba-b81f8f61c8ab/deo0jo3-e19e9980-0e3b-4bb3-bc9e-b1215ab80bff.png/v1/fill/w_1024,h_855,strp/hookshot___the_legend_of_zelda_ocarina_of_time_by_bluetoad_10_deo0jo3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU1IiwicGF0aCI6IlwvZlwvMTM1YmZhNzktYjBmOS00Y2E5LTk1YmEtYjgxZjhmNjFjOGFiXC9kZW8wam8zLWUxOWU5OTgwLTBlM2ItNGJiMy1iYzllLWIxMjE1YWI4MGJmZi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uiuvg3WZYCrwyCflKPwnnY9ZerdMFGm7-X0ywJvz5Yk",
    ],
    price: 350.09,
    categories: [2, 4],
  },
  4: {
    name: "Red Potion",
    description:
      "Com Red Potion, nem aquela ressaca de final de ano te abala mais. Com ele você recupera 100% da sua vida e força!",
    images: [
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/135bfa79-b0f9-4ca9-95ba-b81f8f61c8ab/deo0jo3-e19e9980-0e3b-4bb3-bc9e-b1215ab80bff.png/v1/fill/w_1024,h_855,strp/hookshot___the_legend_of_zelda_ocarina_of_time_by_bluetoad_10_deo0jo3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU1IiwicGF0aCI6IlwvZlwvMTM1YmZhNzktYjBmOS00Y2E5LTk1YmEtYjgxZjhmNjFjOGFiXC9kZW8wam8zLWUxOWU5OTgwLTBlM2ItNGJiMy1iYzllLWIxMjE1YWI4MGJmZi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uiuvg3WZYCrwyCflKPwnnY9ZerdMFGm7-X0ywJvz5Yk",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/135bfa79-b0f9-4ca9-95ba-b81f8f61c8ab/deo0jo3-e19e9980-0e3b-4bb3-bc9e-b1215ab80bff.png/v1/fill/w_1024,h_855,strp/hookshot___the_legend_of_zelda_ocarina_of_time_by_bluetoad_10_deo0jo3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU1IiwicGF0aCI6IlwvZlwvMTM1YmZhNzktYjBmOS00Y2E5LTk1YmEtYjgxZjhmNjFjOGFiXC9kZW8wam8zLWUxOWU5OTgwLTBlM2ItNGJiMy1iYzllLWIxMjE1YWI4MGJmZi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uiuvg3WZYCrwyCflKPwnnY9ZerdMFGm7-X0ywJvz5Yk",
    ],
    price: 40.99,
    promo_price: 36.99,
    percent: 10,
    categories: [1, 4],
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
