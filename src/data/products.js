// Foto memakai Unsplash. Kalau gambar gagal dimuat, kartu menampilkan blok warna cadangan.
const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=70`

export const products = [
  { id: 1, name: 'Es Kopi Susu Senja', category: 'Coffee', popular: true, price: 18000,
    desc: 'Espresso, susu segar, dan gula aren', image: img('photo-1461023058943-07fcbe16d735') },
  { id: 2, name: 'Americano', category: 'Coffee', popular: true, price: 15000,
    desc: 'Espresso double shot dengan air panas, rasa kopi yang bersih', image: img('photo-1447933601403-0c6688de566e') },
  { id: 3, name: 'Cappuccino', category: 'Coffee', popular: true, price: 22000,
    desc: 'Espresso dengan susu steam dan busa tebal yang lembut', image: img('photo-1495474472287-4d71bcdd2085') },
  { id: 4, name: 'Cafe Latte', category: 'Coffee', popular: true, price: 22000,
    desc: 'Espresso dengan susu steam, ringan dan creamy', image: img('photo-1509042239860-f550ce710b93') },
  { id: 5, name: 'Caramel Macchiato', category: 'Coffee', popular: true, price: 26000,
    desc: 'Susu vanila, espresso, dan saus karamel', image: img('photo-1541167760496-1628856ab772') },
  { id: 6, name: 'Matcha Latte', category: 'Non Coffee', popular: true, price: 24000,
    desc: 'Matcha Jepang dengan susu segar, bisa panas atau dingin', image: img('photo-1515823064-d6e0c04616a7') },
  { id: 7, name: 'Chocolate', category: 'Non Coffee', popular: true, price: 20000,
    desc: 'Cokelat pekat dengan susu, manis yang pas', image: img('photo-1578314675249-a6910f80cc4e') },
  { id: 8, name: 'Es Teh Lemon', category: 'Tea', popular: true, price: 12000,
    desc: 'Teh hitam seduh dengan perasan lemon segar', image: img('photo-1556679343-c7306c1976bc') },
  { id: 9, name: 'Teh Tarik', category: 'Tea', popular: false, price: 14000,
    desc: 'Teh hitam pekat dengan susu, ditarik sampai berbusa', image: img('photo-1544787219-7f47ccb76574') },
  { id: 10, name: 'Croissant Butter', category: 'Snack', popular: false, price: 18000,
    desc: 'Croissant renyah dengan mentega, dipanaskan saat dipesan', image: img('photo-1555507036-ab1f4038808a') },
  { id: 11, name: 'Roti Bakar Cokelat Keju', category: 'Snack', popular: false, price: 17000,
    desc: 'Roti tebal panggang dengan selai cokelat dan parutan keju', image: img('photo-1509440159596-0249088772ff') },
  { id: 12, name: 'Kentang Goreng', category: 'Snack', popular: false, price: 16000,
    desc: 'Kentang goreng renyah dengan saus sambal dan mayones', image: img('photo-1573080496219-bb080dd4f877') },
]

export const categories = ['Semua', 'Coffee', 'Non Coffee', 'Tea', 'Snack']

export function formatRupiah(number) {
  return 'Rp' + number.toLocaleString('id-ID')
}
