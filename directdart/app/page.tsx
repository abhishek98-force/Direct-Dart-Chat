
import Image from 'next/image'
import { Menu } from '@headlessui/react'
import { UserButton } from '@clerk/nextjs'



export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl='/'/>
      <div className="bg-blue-400">Hello World</div>
    </div>
  )
}
