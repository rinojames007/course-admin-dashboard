import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter()

  return (
      <button onClick={() => router.push('/signup')}>
        Click here to read more
      </button>
  )
}


