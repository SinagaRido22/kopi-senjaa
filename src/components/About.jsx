export default function About() {
  return (
    <section id="about" className="section section-cream">
      <div className="container about-inner">
        <div className="about-img">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=70"
            alt="Suasana kedai kopi"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>
        <div className="about-text">
          <h2 className="section-title left">Tentang Kopi Senja</h2>
          <p>
            Kopi Senja hadir sebagai tempat sederhana untuk menikmati kopi berkualitas, bekerja,
            belajar, dan berkumpul bersama teman.
          </p>
          <p>
            Kami memilih biji kopi dari petani lokal Indonesia, menyeduhnya dengan teliti, dan
            menyajikannya dengan harga yang bersahabat. Ada colokan di hampir setiap meja dan
            Wi-Fi gratis, jadi kamu bebas duduk berlama-lama.
          </p>
        </div>
      </div>
    </section>
  )
}
