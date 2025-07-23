import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <>
      <header className="bg-stone-100 p-6 shadow">
        <nav className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-stone-600 tracking-wider">
            <Link
              href="/"
              className="hover:text-stone-800 transition-colors duration-300"
            >
              Zwinish
            </Link>
          </div>

          {/* Navigation */}
          <ul className="flex gap-6 mt-4 sm:mt-0">
            <li>
              <Link
                href="/"
                className="text-sm font-medium uppercase text-stone-500 hover:text-stone-800 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Posts"
                className="text-sm font-medium uppercase text-stone-500 hover:text-stone-800 transition-colors"
              >
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-8">{children}</main>

      <footer className="bg-stone-100 text-sm font-medium uppercase text-stone-400 px-8 py-4">
        <div className="container mx-auto text-center">
          <p>Footer</p>
        </div>
      </footer>
    </>
  )
}

export default Layout
