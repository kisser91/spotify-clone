import { getProviders, signIn } from "next-auth/react"

function Login({ providers }) {
  return (
      <div className="bg-black min-h-screen flex flex-col items-center justify-center">
          <img  className="w-52 mb-5" 
                src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-brands-logo-34.png" 
                alt=""/>
                {Object.values(providers).map((provider) => (
                  <div>
                    <button 
                      className="bg-[#18D860] p-5 text-white rounded-full"
                      onClick={() => signIn(provider.id, {callbackUrl: "/"}
                      )}    
                    >Login with {provider.name}</button>
                  </div>
                )) }
      </div>
  )
}


export default Login;

export const getServerSideProps = async () => {
  
    const providers = await getProviders();

    return {
      props: {
        providers
      },
    }
}
