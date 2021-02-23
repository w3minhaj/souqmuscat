import bcyrpt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@souqmuscat.com',
    password: bcyrpt.hashSync('64DaTRUC_lfaDROsuspl', 10),
    isAdmin: true,
  },
]

export default users
