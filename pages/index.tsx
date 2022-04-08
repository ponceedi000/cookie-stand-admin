import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Form from '../components/form'
import Table from '../components/table'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Form />
      <Table />
      <Footer />

    </div>
  )
}

export default Home
