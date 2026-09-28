import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Membaca keranjang dari localStorage saat aplikasi pertama dibuka
function loadCart() {
  try {
    const saved = localStorage.getItem('kopi-senja-cart')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export default function App() {
  const [cart, setCart] = useState(loadCart)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  // Setiap keranjang berubah, simpan ke localStorage
  useEffect(() => {
    localStorage.setItem('kopi-senja-cart', JSON.stringify(cart))
  }, [cart])

  // Kunci scroll halaman saat ada modal terbuka
  useEffect(() => {
    const anyOpen = selectedProduct || cartOpen || checkoutOpen
    document.body.style.overflow = anyOpen ? 'hidden' : ''
  }, [selectedProduct, cartOpen, checkoutOpen])

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id)
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        )
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, image: product.image, qty }]
    })
  }

  const changeQty = (id, amount) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: Math.max(1, item.qty + amount) } : item))
    )
  }

  const removeItem = (id) => setCart((prev) => prev.filter((item) => item.id !== id))
  const clearCart = () => setCart([])

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  const openCheckout = () => {
    setCartOpen(false)
    setCheckoutOpen(true)
  }

  return (
    <>
      <Navbar cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Menu onSelect={setSelectedProduct} onAdd={addToCart} />
        <About />
        <Contact />
      </main>
      <Footer />

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAdd={addToCart}
        />
      )}
      {cartOpen && (
        <Cart
          cart={cart}
          onClose={() => setCartOpen(false)}
          onChangeQty={changeQty}
          onRemove={removeItem}
          onClear={clearCart}
          onCheckout={openCheckout}
        />
      )}
      {checkoutOpen && (
        <Checkout cart={cart} onClose={() => setCheckoutOpen(false)} onClear={clearCart} />
      )}
    </>
  )
}
