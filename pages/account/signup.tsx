import { getProviders, signIn, getSession } from "next-auth/react";

type Provider = {
  name: string,
  id: string
}

type signInProps = {
  providers: Array<Provider>
}

function signin(props: signInProps) {
  const providers: Array<Provider> = props.providers;

  return (
    <div>
      {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default signin;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (session) return {
    redirect: {
      permanent: false,
      destination: '/profile'
    }
  }

  return {
    props: {
      providers: await getProviders(),
    },
  };
}