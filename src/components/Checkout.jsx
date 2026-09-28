import { useState } from 'react'
import { formatRupiah } from '../data/products'

const DELIVERY_FEE = 8000

const payments = [
  { id: 'Cash', label: 'Cash', color: '#5c8a3a', text: 'Rp' },
  { id: 'OVO', label: 'OVO', color: '#4c2a86', text: 'OVO' },
  { id: 'DANA', label: 'DANA', color: '#118eea', text: 'DANA' },
  { id: 'GoPay', label: 'GoPay', color: '#00aa5b', text: 'GoPay' },
  { id: 'ShopeePay', label: 'ShopeePay', color: '#ee4d2d', text: 'SPay' },
  { id: 'Bank Transfer', label: 'Bank Transfer', color: '#3b2314', text: 'BANK' },
]

export default function Checkout({ cart, onClose, onClear }) {
  const [form, setForm] = useState({ name: '', phone: '', address: '', notes: '' })
  const [payment, setPayment] = useState('Cash')
  const [errors, setErrors] = useState({})
  const [orderNumber, setOrderNumber] = useState(null)

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const total = subtotal + DELIVERY_FEE

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Nama lengkap wajib diisi'
    if (!/^[0-9+\s-]{9,15}$/.test(form.phone.trim())) newErrors.phone = 'Masukkan nomor telepon yang valid'
    if (!form.address.trim()) newErrors.address = 'Alamat wajib diisi'
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setOrderNumber('KS-' + Date.now().toString().slice(-6))
    onClear()
  }

  // Tampilan setelah pesanan berhasil
  if (orderNumber) {
    return (
      <div className="overlay" onClick={onClose}>
        <div className="modal success" onClick={(e) => e.stopPropagation()}>
          <div className="success-icon">✓</div>
          <h2>Pesanan berhasil dibuat</h2>
          <p>Terima kasih, {form.name}. Nomor pesanan kamu <strong>{orderNumber}</strong>.</p>
          <p className="muted">
            {payment === 'Cash'
              ? 'Siapkan pembayaran tunai saat pesanan tiba.'
              : `Kami akan mengirim instruksi pembayaran ${payment} ke nomor ${form.phone}.`}
          </p>
          <button className="btn btn-primary" onClick={onClose}>Kembali ke Beranda</button>
        </div>
      </div>
    )
  }

  // Jika keranjang kosong (mis. setelah refresh)
  if (cart.length === 0) {
    return (
      <div className="overlay" onClick={onClose}>
        <div className="modal success" onClick={(e) => e.stopPropagation()}>
          <h2>Keranjang kosong</h2>
          <p className="muted">Tambahkan menu dulu sebelum checkout.</p>
          <button className="btn btn-primary" onClick={onClose}>Lihat Menu</button>
        </div>
      </div>
    )
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal checkout" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Tutup">✕</button>
        <h2>Checkout</h2>

        <form onSubmit={handleSubmit} noValidate className="checkout-grid">
          <div>
            <h3 className="sub-head">Data pemesan</h3>
            <label>
              Nama Lengkap
              <input name="name" value={form.name} onChange={handleChange} />
              {errors.name && <small className="error">{errors.name}</small>}
            </label>
            <label>
              Nomor Telepon
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="08xxxxxxxxxx" />
              {errors.phone && <small className="error">{errors.phone}</small>}
            </label>
            <label>
              Alamat
              <textarea name="address" rows="3" value={form.address} onChange={handleChange} />
              {errors.address && <small className="error">{errors.address}</small>}
            </label>
            <label>
              Catatan Pesanan
              <textarea name="notes" rows="2" value={form.notes} onChange={handleChange} placeholder="Contoh: less sugar, tanpa es" />
            </label>

            <h3 className="sub-head">Metode pembayaran</h3>
            <div className="pay-grid">
              {payments.map((p) => (
                <button
                  type="button"
                  key={p.id}
                  className={payment === p.id ? 'pay active' : 'pay'}
                  onClick={() => setPayment(p.id)}
                >
                  <span className="pay-logo" style={{ background: p.color }}>{p.text}</span>
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="summary">
            <h3 className="sub-head">Ringkasan pesanan</h3>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <span>{item.qty}× {item.name}</span>
                  <span>{formatRupiah(item.price * item.qty)}</span>
                </li>
              ))}
            </ul>
            <div className="row"><span>Subtotal</span><span>{formatRupiah(subtotal)}</span></div>
            <div className="row"><span>Ongkos kirim</span><span>{formatRupiah(DELIVERY_FEE)}</span></div>
            <div className="row total"><span>Total Pembayaran</span><span>{formatRupiah(total)}</span></div>
            <button type="submit" className="btn btn-primary full">Buat Pesanan</button>
          </div>
        </form>
      </div>
    </div>
  )
}
