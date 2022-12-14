import bcrypt from 'bcryptjs'

const users = [
  {
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isVerified: true,
    isTAndCAccepted: true,
    type: 'admin',
  },
  {
    firstName: 'John',
    lastName: 'User',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
    isVerified: false,
    isTAndCAccepted: true,
    type: 'mentor',
  },
  {
    firstName: 'Jane',
    lastName: 'User',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
    isVerified: true,
    isTAndCAccepted: true,
    type: 'mentee',
  },
]

export default users