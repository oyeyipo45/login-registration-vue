import bcrypt from 'bcryptjs'

const users = [
  {
    firstName: 'Admin',
    lastName: 'Admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    firstName: 'Dami',
    lastName: 'Oye',
    email: 'dami@example.com',
    password: bcrypt.hashSync('123456', 10),
    
  },
  {
    firstName: 'Funmi',
    lastName: 'Oye',
    email: 'funmi@example.com',
    password: bcrypt.hashSync('123456', 10),
    
  },
  {
    firstName: 'Gbemi',
    lastName: 'Oye',
    email: 'gbemi@example.com',
    password: bcrypt.hashSync('123456', 10),
    
  },
]

export default users
