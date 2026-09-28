export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>Temukan Kopi Favoritmu di Kopi Senja</h1>
          <p>Nikmati kopi pilihan dan makanan ringan dengan suasana nyaman untuk menemani hari kamu.</p>
          <div className="hero-buttons">
            <a href="#menu" className="btn btn-primary">Lihat Menu</a>
            <a href="#populer" className="btn btn-outline">Pesan Sekarang</a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=75"
            alt="Secangkir kopi di atas meja kayu"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>
      </div>
    </section>
  )
}
