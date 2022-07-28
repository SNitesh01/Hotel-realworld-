import axios from 'axios';
import NextAuth from 'next-auth';
import { sha256 } from 'js-sha256';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
         authorizationUrl: 'https://accounts.google.com/o/outh2/v2/auth?prompt=consent&access_type=offline&response_tye=code'
      })
   ],
   callbacks: {
      async signIn({ user }) {
         const request = axios.post('http://localhost:8001/api/auth/user/signup', {
            ...user,
            password: sha256(user.email)
         });

         window.localStorage.setItem('user_invalid_useless_ref', JSON.stringify(user))

         return (await request).data?.status;
      }
   },
   pages: {
      signIn: '/account/signin',
      signOut: '/account/signout',
      error: '/error/404', // Error code passed in query string as ?error=
      verifyRequest: '/error/404', // (used for check email message)
      newUser: '/error/404' // New users will be directed here on first sign in (leave the property out if not of interest)
   }
});