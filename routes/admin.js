const adminRoutes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    name: 'Account',
    path: '/account',
    paths: [
      {
        path: '/signin',
        name: 'Sign In' 
      },
      {
        path: '/signup',
        name: 'Sign Up'
      }
    ]
  }
]

export default adminRoutes;