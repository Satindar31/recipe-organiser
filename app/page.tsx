import NavbarComponent from '@/components/misc/navbar'
import { SignUpButton, currentUser } from '@clerk/nextjs'
import { Button, ButtonGroup } from '@nextui-org/button'
import Link from 'next/link'

export default async function Home() {

  const user = await currentUser()

  return (
    <div className='h-screen text-black flex flex-col bg-yellow-200'>
      <NavbarComponent route='home' />
      <main className='flex-col flex h-screen justify-center items-center'>
        <h1 className='text-6xl font-bold gap-2'>Organize and share recipies like never before!</h1>
          <ButtonGroup>
            {user ? <Link href={"/dashboard"}><Button>Dashboard</Button></Link> : <Button variant='solid' color='primary'><SignUpButton mode='modal' /></Button>}
            <Link href="/about"><Button variant='bordered'>About</Button></Link>
          </ButtonGroup>
      </main>
    </div>
  )
}
