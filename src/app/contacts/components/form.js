
export default function Form() {
  return (
    <div>

      {/* {loop()} */}

      <form name="byexchange">

        <div className="mb-3">
          <div id="emailHelp" className="form-text">Wallet № 1</div>
          {/* <label for="exampleInputPassword1" className="form-label">Privat Key</label> */}
          <h6 id="idprivatkey">XPX Wallet:</h6>
          <input placeholder="Enter You Privat Key" name="privatKeyInput" type="password" className="form-control"
            id="exampleInputPassword1"></input>
        </div>

        <div className="mb-3">
          <div id="emailHelp" className="form-text">Wallet № 2</div>
          {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
          <input placeholder="Enter You Wallet Number" type="email" className="form-control" id="exampleInputEmail1"
            aria-describedby="emailHelp"></input>
        </div>

        {/* <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1">
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div> 
        */}

        <button onClick={muFunction()} type="submit" className="btn btn-primary">BY</button>

      </form>

    </div>
  )
}

function muFunction() {
  // console.log('1234567890')
}


let apiJson = 'apiJson'
let apiText = "apiText"
let second = 1000 * 10// * (60 * 60)
let count = 0

//loop()// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
async function loop() {// https://www.youtube.com/watch?v=3xaN1tDdkF4&t=1018s
  while (true) {
    if (count == 0) { await waitForMe(1) }
    if (count > 0) { await waitForMe(second) }
    if (count > 5) { count = 1 }

    console.log(" - " + count + " - ")
    count++//--------------------------------
  }
}

function waitForMe(ms) {
  return new Promise(resolve => {
    setTimeout(() => { resolve('') }, ms)
  })
}