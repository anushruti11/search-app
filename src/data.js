// data.js
import faker from 'faker';

function generateFakeProducts(count) {
  const products = [];

  for (let i = 0; i < count; i++) {
    const product = {
      id: i + 1,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      imageUrl: faker.image.imageUrl(),
    };
    products.push(product);
  }

  return products;
}

export default generateFakeProducts(10); // Generate 10 fake products
