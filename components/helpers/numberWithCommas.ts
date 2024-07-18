export function numberWithCommas(number: number) {
    if (!number) return number;
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  