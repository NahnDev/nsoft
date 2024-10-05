import { faker } from "@faker-js/faker";

export type TProduct = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  stock: number;
  color: string;
  createdAt: Date;
  updatedAt: Date;
  barcode: string;
};

export const products: TProduct[] = [
  {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    category: faker.commerce.department(),
    stock: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    color: faker.color.rgb(),
    barcode: faker.string.numeric(12),
  },
  {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    category: faker.commerce.department(),
    stock: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    color: faker.color.rgb(),
    barcode: faker.string.numeric(12),
  },
  {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    category: faker.commerce.department(),
    stock: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    color: faker.color.rgb(),
    barcode: faker.string.numeric(12),
  },
  {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    category: faker.commerce.department(),
    stock: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    color: faker.color.rgb(),
    barcode: faker.string.numeric(12),
  },
  {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    category: faker.commerce.department(),
    stock: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    color: faker.color.rgb(),
    barcode: faker.string.numeric(12),
  },
  {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    category: faker.commerce.department(),
    stock: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    color: faker.color.rgb(),
    barcode: faker.string.numeric(12),
  },
  {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    category: faker.commerce.department(),
    stock: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    color: faker.color.rgb(),
    barcode: faker.string.numeric(12),
  },
];
