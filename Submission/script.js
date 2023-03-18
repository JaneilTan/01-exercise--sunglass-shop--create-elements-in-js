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
