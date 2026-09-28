import { Logo } from './Navbar'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="brand light"><Logo /><span>Kopi Senja</span></div>
          <p>Kopi pilihan dan makanan ringan untuk menemani hari kamu.</p>
        </div>
        <div>
          <h4>Navigasi</h4>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h4>Sosial Media</h4>
          <a href="https://instagram.com/kopisenja" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="https://tiktok.com/@kopisenja" target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} Kopi Senja. Seluruh hak cipta dilindungi.</div>
    </footer>
  )
}
