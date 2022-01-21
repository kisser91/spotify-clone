import NextAuth, { getServerSession } from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import spotifyApi,{ LOGIN_URL } from "../../../lib/spotify"




async function refreshAcessToken (token) {
  try{
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshAcessToken);

    const { body : refreshedToken} = await spotifyApi.refreshAcessToken();
    console.log("REFRESHED TOKEN IS", refreshedToken)
    return {
      ...token,
      accessToken: refreshToken.access_token,
      accessTokenExpires: Date.now + refreshToken.expires_in * 1000,
      // = 1 hour as 3600 return from spotify API
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
      // Replace if new one came back else fall back to old refresh token

    }

  } catch(error){
    console.error(error)
    return{
      ...token,
      error: "RegreshAccessTokenError"
    }
  }
}



export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),

    // ...add more providers here
  ],    
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({token,account,user}){
      if (account && user){
        return{
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000, // we are handling expiration times in milisecons
          
        }
      }

      if(Date.now () < token.accessTokenExpires){
        console.log("Existing access token is valid")
        return token;
      }
      // access token has expired, so we need to refresh it
        console.log("access token has expired, refreshing...")
        return await refreshAcessToken(token);
     
    },

    async session({session, token}){
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username

      return session;
    }

  }




})