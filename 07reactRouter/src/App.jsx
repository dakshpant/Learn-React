
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import Home from './components/Home/home'
import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
