import axios from 'axios';
import { sha256 } from 'js-sha256';
import { getSession } from 'next-auth/react';

type AdminDashboardProps = {
  error: string | null,
  code: number,
  session: {
    user: {
      name: string,
      email: string
    },
  }
}

const AdminDashboard = (props: AdminDashboardProps) => {
  if (props.error) {
    return (
      <div className='w-screen h-[84vh] flex justify-center items-center'>
        <span className='font-light text-3xl'>
          {props.code} {props.error}
        </span>
      </div>
    )
  }

  return (
    <div>You have full access.</div>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (session === null) return {
    redirect: {
      permanent: false,
      destination: '/api/auth/signin'
    }
  }

  const request = axios.post('http://localhost:8001/api/auth/admin', {
    user: {
      ...session.user,
      password: sha256(session.user?.email ?? ''),
    }
  });

  const response = (await request).data;
  
  if (!response.data.isAdmin) {
    return {
      props: {
        error: 'Unauthorized',
        code: 401,
        session: null
      }
    }
  }

  return {
    props: {
      error: null,
      code: 200,
      session: session
    }
  }
}

export default AdminDashboard;