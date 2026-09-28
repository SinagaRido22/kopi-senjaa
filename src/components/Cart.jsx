import { formatRupiah } from '../data/products'

export default function Cart({ cart, onClose, onChangeQty, onRemove, onClear, onCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="overlay drawer-overlay" onClick={onClose}>
      <aside className="drawer" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-head">
          <h2>Keranjang</h2>
          <button className="close-btn static" onClick={onClose} aria-label="Tutup">✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="drawer-empty">
            <p>Keranjang kamu masih kosong.</p>
            <a href="#menu" className="btn btn-primary" onClick={onClose}>Lihat Menu</a>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} onError={(e) => { e.currentTarget.style.visibility = 'hidden' }} />
                  <div className="cart-info">
                    <strong>{item.name}</strong>
                    <span className="muted">{formatRupiah(item.price)}</span>
                    <div className="qty small">
                      <button onClick={() => onChangeQty(item.id, -1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => onChangeQty(item.id, 1)}>+</button>
                    </div>
                  </div>
                  <div className="cart-right">
                    <strong>{formatRupiah(item.price * item.qty)}</strong>
                    <button className="link-btn" onClick={() => onRemove(item.id)}>Hapus</button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="drawer-foot">
              <div className="row"><span>Subtotal</span><span>{formatRupiah(total)}</span></div>
              <div className="row total"><span>Total</span><span>{formatRupiah(total)}</span></div>
              <button className="btn btn-primary full" onClick={onCheckout}>Checkout</button>
              <button className="btn btn-outline full" onClick={onClear}>Kosongkan Keranjang</button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
