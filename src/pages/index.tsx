import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter()

  return (
      <div>
          <button onClick={() => router.push('/signup')}>
              signup
          </button>
          <button onClick={() => router.push('/signin')}>
              signin
          </button>
      </div>
)
}


