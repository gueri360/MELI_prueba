export default function formatPrice(price, currency) {
  return `${
    currency === "ARS" ? "$ " : "U$S "
  }${price.toString().replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".")}`;
}
