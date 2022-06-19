const formatNumber = (n: number) => {
  return Intl
    .NumberFormat('en-GB', { minimumFractionDigits: 2 })
    .format(n / 100)
}

export { formatNumber }
