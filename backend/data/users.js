import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Jared Silver',
    email: 'jared@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Joey Dawson',
    email: 'joe@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
