'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  const word = String(num)
  const len = word.length
  let result = 0
  for (let i = 0; i < len; i++) {
    let digit = Number(word.charAt(i))
    result += digit * 2 ** (len - i - 1)
  }
  return result
}

function DecimalABinario(num) {
  // tu codigo aca
  let mod
  let result = ''
  while (num >= 1) {
    mod = num % 2
    num = parseInt(num / 2)
    result += mod
  }
  return result.split('').reverse().join('')
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}