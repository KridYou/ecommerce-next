import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Item1',
      slug: 'item1',
      category: 'cat1',
      image: '/../public/images/doll1.jpg',
      price: 50,
      brand: 'brand1',
      rating: 5.5,
      numReviews: 8,
      countInStock: 20,
      description: 'new release1',
    },
    {
      name: 'Item2',
      slug: 'item2',
      category: 'cat2',
      image: '/../public/images/doll2.jpg',
      price: 50,
      brand: 'brand2',
      rating: 5.5,
      numReviews: 8,
      countInStock: 20,
      description: 'new release2',
    },
    {
      name: 'Item3',
      slug: 'item3',
      category: 'cat3',
      image: '/../public/images/doll3.jpg',
      price: 50,
      brand: 'brand3',
      rating: 5.5,
      numReviews: 8,
      countInStock: 20,
      description: 'new release3',
    },
    {
      name: 'Item4',
      slug: 'item4',
      category: 'cat4',
      image: '/../public/images/doll4.jpg',
      price: 50,
      brand: 'brand4',
      rating: 5.5,
      numReviews: 8,
      countInStock: 20,
      description: 'new release4',
    },
  ],
};

export default data;
