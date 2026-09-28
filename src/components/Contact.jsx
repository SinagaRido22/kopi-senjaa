import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Hubungi Kami</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p><strong>Alamat</strong><br />Jl. Kaliurang Km 5 No. 12, Yogyakarta 55281</p>
            <p><strong>Telepon</strong><br /><a href="tel:089529464939">(0274) 123 456</a></p>
            <p><strong>WhatsApp</strong><br /><a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">0812 3456 7890</a></p>
            <p><strong>Instagram</strong><br /><a href="https://instagram.com/kopisenja" target="_blank" rel="noreferrer">@kopisenja</a></p>
            <p><strong>Jam Buka</strong><br />Senin – Jumat: 08.00 – 22.00<br />Sabtu – Minggu: 09.00 – 23.00</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Nama
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={handleChange} required />
            </label>
            <label>
              Pesan
              <textarea name="message" rows="4" value={form.message} onChange={handleChange} required />
            </label>
            <button type="submit" className="btn btn-primary">Kirim Pesan</button>
            {sent && <p className="ok">Pesan terkirim. Kami akan membalas secepatnya.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
