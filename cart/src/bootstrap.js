import { faker } from "@faker-js/faker";

const mount = (el) => {
  const cartText = `<div>You have ${faker.number.bigInt()} items in your cart</div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");
  if (el) {
    mount(el);
  }
}

export { mount };
