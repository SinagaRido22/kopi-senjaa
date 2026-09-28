import { useState } from 'react'
import ProductCard from './ProductCard'
import { products, categories } from '../data/products'

export default function Menu({ onSelect, onAdd }) {
  const [category, setCategory] = useState('Semua')
  const [search, setSearch] = useState('')

  const popular = products.filter((p) => p.popular)

  const filtered = products.filter((p) => {
    const matchCategory = category === 'Semua' || p.category === category
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase().trim())
    return matchCategory && matchSearch
  })

  return (
    <>
      <section id="populer" className="section section-cream">
        <div className="container">
          <h2 className="section-title">Menu Populer</h2>
          <p className="section-sub">Pilihan yang paling sering dipesan pelanggan kami.</p>
          <div className="grid">
            {popular.map((p) => (
              <ProductCard key={p.id} product={p} onSelect={onSelect} onAdd={onAdd} />
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="section">
        <div className="container">
          <h2 className="section-title">Semua Menu</h2>
          <div className="menu-tools">
            <div className="filters">
              {categories.map((c) => (
                <button
                  key={c}
                  className={c === category ? 'chip active' : 'chip'}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <input
              type="search"
              className="search"
              placeholder="Search menu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {filtered.length === 0 ? (
            <p className="empty">Menu tidak ditemukan. Coba kata kunci atau kategori lain.</p>
          ) : (
            <div className="grid">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} onSelect={onSelect} onAdd={onAdd} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
