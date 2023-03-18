// products: an array of product objects
// look in ./products.js to see the data structure
import products from "./products.js";

/**
 *
 * @param {object} product - contains information for a single producy
 * @returns DOM element
 */
const getProductEl = (product) => {
  // TODO: change the following productEl variable to be a DOM element
  // use the product parameter to complete the information
  const productEl = document.createElement("li");
  productEl.classList.add("product-grid-item");

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", product.images[0]);
  productEl.appendChild(imgEl);
  
  const titleEl = document.createElement("h3");
  titleEl.textContent = product.name;
  productEl.appendChild(titleEl);

  const descriptionEl = document.createElement("p");
  descriptionEl.textContent = product.description;
  productEl.appendChild(descriptionEl);

  const btnEl = document.createElement("button");
  btnEl.textContent = "Buy now";
  productEl.appendChild(btnEl);

  return productEl;
};

// The DOM element to append product elements into
const productsContainerEl = document.querySelector("#products");

// This example has been created for the first product
const product1 = getProductEl(products[0]);
productsContainerEl.appendChild(product1);

// TODO: Create and append the rest of the products (12 in total)
const product2 = getProductEl(products[1]);
productsContainerEl.appendChild(product2);

const product3 = getProductEl(products[2]);
productsContainerEl.appendChild(product3);

const product4 = getProductEl(products[3]);
productsContainerEl.appendChild(product4);

const product5 = getProductEl(products[4]);
productsContainerEl.appendChild(product5);

const product6 = getProductEl(products[5]);
productsContainerEl.appendChild(product6);

const product7 = getProductEl(products[6]);
productsContainerEl.appendChild(product7);

const product8 = getProductEl(products[7]);
productsContainerEl.appendChild(product8);

const product9 = getProductEl(products[8]);
productsContainerEl.appendChild(product9);

const product10 = getProductEl(products[9]);
productsContainerEl.appendChild(product10);

const product11 = getProductEl(products[10]);
productsContainerEl.appendChild(product11);

const product12 = getProductEl(products[11]);
productsContainerEl.appendChild(product12);