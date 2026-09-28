import { useState, useEffect } from 'react'
import { formatRupiah } from '../data/products'

export default function ProductDetail({ product, onClose, onAdd }) {
  const [qty, setQty] = useState(1)
  const [imgError, setImgError] = useState(false)

  // Tutup modal dengan tombol Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const handleAdd = () => {
    onAdd(product, qty)
    onClose()
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal detail" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Tutup">✕</button>
        <div className="detail-img">
          {imgError ? (
            <div className="img-fallback">☕</div>
          ) : (
            <img src={product.image} alt={product.name} onError={() => setImgError(true)} />
          )}
        </div>
        <div className="detail-info">
          <span className="tag">{product.category}</span>
          <h2>{product.name}</h2>
          <p>{product.desc}</p>
          <div className="price big">{formatRupiah(product.price)}</div>

          <div className="qty-row">
            <span>Jumlah</span>
            <div className="qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
          </div>

          <button className="btn btn-primary full" onClick={handleAdd}>
            Tambah ke Keranjang · {formatRupiah(product.price * qty)}
          </button>
        </div>
      </div>
    </div>
  )
}
