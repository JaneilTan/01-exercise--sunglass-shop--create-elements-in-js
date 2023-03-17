# 01 Exercise - Sunglass Shop - Create elements in JavaScript

## Brief

You are starting an online Sunglass Shop. You will be provided with a JavaScript array containing all products for the shop. The array has been provided via a Content Management System (CMS). You need to take this array and convert the array items into HTML elements using JavaScript.

![exercise](docs/exercise.png)

## Rationale

Reading data models and converting them to HTML in JavaScript is a very common task that web developers complete. By practising these skills, you will get a better understanding of how to use data models to solve different problems.

## Instructions Part A: Create and append the first product

1. Open `Submission/script.js` in VS Code, and `Submission/index.html` in Live Server
2. Get familiar with the code that exists. In particular, look at the products array in `Submission/products.js`, the `getProductsEl` function in `script.js`, and find where `getProductsEl` is called and what is passed into it.
3. In `script.js`, complete the `getProductEl` function, so that it returns an HTML element with the following structure:

   ```html
   <li class="product-grid-item">
     <img
       src="https://files.stripe.com/links/fl_test_HG5Y5oY5y2SlpQMclkQ0rjXm"
     />
     <h3>THE RONNIE MAC</h3>
     <p>The sunglasses Ronnie Mac would wear if Ronnie Mac wore sunglasses.</p>
     <button>Buy now</button>
   </li>
   ```

   **Note:** The content included in this HTML is an example. Your code should read the correct content from the `product` parameter that is passed into the `getProductEl` function
4. When complete, you should see the first product displayed on the webpage

## Instructions Part B - Add the rest of the products

1. In `Submission/script.js`, find where the first product is appended to the page. 
2. Using the first product example as a reference, add the rest of the products that exist in the products array
3. When complete, you should see all the product on the page

---

# Submit your Exercise

- [ ] Commits are pushed to GitHub
- [ ] Automated tests pass in GitHub

---

## Exercise answer walkthrough

- [DOM - Sunglass Shop exercise walkthrough](https://www.loom.com/share/190b87c90ee343719ecc225ad9a915cf)
