import Link from 'next/link'
import Navbar from '../Nav/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <main className="container mx-auto px-4 sm:px-6 py-6">{children}</main>
      <Footer/>
    </>
  )
}
export default Layout;