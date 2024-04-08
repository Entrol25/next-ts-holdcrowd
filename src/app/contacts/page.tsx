// import Form from "./components/form"
import Link from 'next/link'

export const metadata = {
  title: 'Contacts',
  description: 'Contacts',
}

export default function Contacts() {

  return (
    <div>

      <Link href="/">Home</Link><br></br>
      <Link href="/contacts">Contacts</Link>

      <h1>Contacts</h1>

      {/* <Form /> */}

    </div>
  )
}
