import Head from 'next/head'
import Header from '../components/header'
import Form from '../components/form'
import Table from '../components/table'
import Footer from '../components/footer'
import {useState} from 'react'

export default function CookieStandAdmin() {

  const [cookieStand, setStoreList] = useState({})


  function handleCreate(event) {
    event.preventDefault();

    const cookieStand = {
      location: event.target.location.value,
      min_cust_per_hour: event.target.min_cust_per_hour.value,
      max_cust_per_hour: event.target.max_cust_per_hour.value,
      avg_cookies_per_sale: event.target.avg_cookies_per_sale.value,
    }

    setStoreList(cookieStand)
  }



  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Form handleCreate={handleCreate} />
        <Table cookieStand={cookieStand}/>
      </main>
      <Footer />

    </div>
  )
}
