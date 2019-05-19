export function convertToRupiah(angka) {
  let rupiah = ''
  const angkarev = angka.toString().split('').reverse().join('')
  for (let i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += `${angkarev.substr(i, 3)}.` // eslint-disable-line

  return `Rp. ${rupiah.split('', rupiah.length - 1).reverse().join('')}`
}
