import Head from 'next/head'
import Header from '../components/Header'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable'
import Footer from '../components/Footer'
import { hours } from "../data";
import { useState } from 'react'

export default function CookieStandAdmin() {

  const [reports, setStoreReports] = useState([]);


  function handleCreateReport(report) {
    setStoreReports([...reports, report]);

    // const cookieStand = {
    //   location: event.target.location.value,
    //   min_cust_per_hour: event.target.min_cust_per_hour.value,
    //   max_cust_per_hour: event.target.max_cust_per_hour.value,
    //   avg_cookies_per_sale: event.target.avg_cookies_per_sale.value,
    // }
  }



  return (
    <div>
     
      <Head />
      <Header />
      <main>
        <CreateForm handleCreateReport={handleCreateReport} hours={hours} />
        <ReportTable hours={hours} reports={reports}/>
      </main>
      <Footer />

    </div>
  )
}
