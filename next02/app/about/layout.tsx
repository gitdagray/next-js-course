import './globals.css'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav>About NavBar</nav>
      <main>
        {children}
      </main>
    </>
  )
}
