import { useState } from 'react'
import { formatRupiah } from '../data/products'

export default function ProductCard({ product, onSelect, onAdd }) {
  const [imgError, setImgError] = useState(false)

  return (
    <article className="card">
      <div className="card-img" onClick={() => onSelect(product)}>
        {imgError ? (
          <div className="img-fallback">☕</div>
        ) : (
          <img src={product.image} alt={product.name} loading="lazy" onError={() => setImgError(true)} />
        )}
      </div>
      <div className="card-body">
        <h3 onClick={() => onSelect(product)}>{product.name}</h3>
        <p className="card-desc">{product.desc}</p>
        <div className="card-bottom">
          <span className="price">{formatRupiah(product.price)}</span>
          <button className="btn btn-small" onClick={() => onAdd(product, 1)}>
            Tambah
          </button>
        </div>
      </div>
    </article>
  )
}
