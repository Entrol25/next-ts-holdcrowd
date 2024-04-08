import { Spot, Contract } from 'mexc-api'

export default function LoopTime() {
  loop()
}
//-------------------------------------------
let second = 1000 * (60 * 60)
let count = 0

//loop()// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
async function loop() {// https://www.youtube.com/watch?v=3xaN1tDdkF4&t=1018s
  while (true) {
    if (count == 0) { await waitForMe(1) }
    if (count > 0) {
      // console.log(" - " + count + " - ")
      await waitForMe(second)
    }
    if (count > 5) {
      console.log(" - " + count + " - ")
      count = 1
    }
    // apiJson = await spot.ticker({
    //   symbol: 'XPX_USDT'
    // })
    // console.log(" - " + count + " - ")
    count++
  }
}

function waitForMe(ms) {
  console.log(" - " + count + " - ")
  return new Promise(resolve => {
    setTimeout(() => { resolve('') }, ms)
  })
}