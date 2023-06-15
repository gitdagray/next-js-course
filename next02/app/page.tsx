import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Link href="/about">About</Link>
      <h1>Hello World from Main Page!</h1>
    </main>
  )
}
