import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
    <Navbar />
    <Container className='mb-5'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/store' element={<Store />} />
      </Routes>
    </Container>
    </CartProvider>
  )
}

export default App
