const productsCart = {
  33: {
    name: "Milk",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/135bfa79-b0f9-4ca9-95ba-b81f8f61c8ab/deo0jo3-e19e9980-0e3b-4bb3-bc9e-b1215ab80bff.png/v1/fill/w_1024,h_855,strp/hookshot___the_legend_of_zelda_ocarina_of_time_by_bluetoad_10_deo0jo3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU1IiwicGF0aCI6IlwvZlwvMTM1YmZhNzktYjBmOS00Y2E5LTk1YmEtYjgxZjhmNjFjOGFiXC9kZW8wam8zLWUxOWU5OTgwLTBlM2ItNGJiMy1iYzllLWIxMjE1YWI4MGJmZi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uiuvg3WZYCrwyCflKPwnnY9ZerdMFGm7-X0ywJvz5Yk",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/135bfa79-b0f9-4ca9-95ba-b81f8f61c8ab/deo0jo3-e19e9980-0e3b-4bb3-bc9e-b1215ab80bff.png/v1/fill/w_1024,h_855,strp/hookshot___the_legend_of_zelda_ocarina_of_time_by_bluetoad_10_deo0jo3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU1IiwicGF0aCI6IlwvZlwvMTM1YmZhNzktYjBmOS00Y2E5LTk1YmEtYjgxZjhmNjFjOGFiXC9kZW8wam8zLWUxOWU5OTgwLTBlM2ItNGJiMy1iYzllLWIxMjE1YWI4MGJmZi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uiuvg3WZYCrwyCflKPwnnY9ZerdMFGm7-X0ywJvz5Yk",
    ],
    price: 299.99,
    categories: [1, 2, 3],
    quantity: 3,
  },
  1: {
    name: "Longshot",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/135bfa79-b0f9-4ca9-95ba-b81f8f61c8ab/deo0jo3-e19e9980-0e3b-4bb3-bc9e-b1215ab80bff.png/v1/fill/w_1024,h_855,strp/hookshot___the_legend_of_zelda_ocarina_of_time_by_bluetoad_10_deo0jo3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU1IiwicGF0aCI6IlwvZlwvMTM1YmZhNzktYjBmOS00Y2E5LTk1YmEtYjgxZjhmNjFjOGFiXC9kZW8wam8zLWUxOWU5OTgwLTBlM2ItNGJiMy1iYzllLWIxMjE1YWI4MGJmZi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uiuvg3WZYCrwyCflKPwnnY9ZerdMFGm7-X0ywJvz5Yk",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/135bfa79-b0f9-4ca9-95ba-b81f8f61c8ab/deo0jo3-e19e9980-0e3b-4bb3-bc9e-b1215ab80bff.png/v1/fill/w_1024,h_855,strp/hookshot___the_legend_of_zelda_ocarina_of_time_by_bluetoad_10_deo0jo3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU1IiwicGF0aCI6IlwvZlwvMTM1YmZhNzktYjBmOS00Y2E5LTk1YmEtYjgxZjhmNjFjOGFiXC9kZW8wam8zLWUxOWU5OTgwLTBlM2ItNGJiMy1iYzllLWIxMjE1YWI4MGJmZi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uiuvg3WZYCrwyCflKPwnnY9ZerdMFGm7-X0ywJvz5Yk",
    ],
    price: 299.99,
    promo_price: 199.99,
    percent: 15,
    categories: [1, 2],
    quantity: 2,
  },
  2: {
    name: "Heart",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/135bfa79-b0f9-4ca9-95ba-b81f8f61c8ab/deo0jo3-e19e9980-0e3b-4bb3-bc9e-b1215ab80bff.png/v1/fill/w_1024,h_855,strp/hookshot___the_legend_of_zelda_ocarina_of_time_by_bluetoad_10_deo0jo3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU1IiwicGF0aCI6IlwvZlwvMTM1YmZhNzktYjBmOS00Y2E5LTk1YmEtYjgxZjhmNjFjOGFiXC9kZW8wam8zLWUxOWU5OTgwLTBlM2ItNGJiMy1iYzllLWIxMjE1YWI4MGJmZi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uiuvg3WZYCrwyCflKPwnnY9ZerdMFGm7-X0ywJvz5Yk",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/135bfa79-b0f9-4ca9-95ba-b81f8f61c8ab/deo0jo3-e19e9980-0e3b-4bb3-bc9e-b1215ab80bff.png/v1/fill/w_1024,h_855,strp/hookshot___the_legend_of_zelda_ocarina_of_time_by_bluetoad_10_deo0jo3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU1IiwicGF0aCI6IlwvZlwvMTM1YmZhNzktYjBmOS00Y2E5LTk1YmEtYjgxZjhmNjFjOGFiXC9kZW8wam8zLWUxOWU5OTgwLTBlM2ItNGJiMy1iYzllLWIxMjE1YWI4MGJmZi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uiuvg3WZYCrwyCflKPwnnY9ZerdMFGm7-X0ywJvz5Yk",
    ],
    price: 299.99,
    promo_price: 199.99,
    percent: 15,
    categories: [1, 3, 4],
    quantity: 2,
  },
};

module.exports = {
  productsCart,
};
