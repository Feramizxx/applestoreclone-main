import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import { sanityClient } from "../../../sanity";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
    // ...add more providers here
  ],
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  adapter: SanityAdapter(sanityClient)
} 
export default NextAuth(authOptions)