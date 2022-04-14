import Head from 'next/head'
import Header from '../components/Header'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable'
import Footer from '../components/Footer'
import { hours } from "../data";
import { useState } from 'react'
import { useAuth } from '../contexts/auth'

export default function Home() {
  const { user } = useAuth()

  return (
    <>
    {user ? <CookieStandAdmin /> : <loginForm />}
    </>
  )
}


function CookieStandAdmin() {

  const [reports, setStoreReports] = useState([]);


  function handleCreateReport(report) {
    setStoreReports([...reports, report]);
  }

  return (
    <>
      <Head />
      <Header />
      <main>
        <CreateForm handleCreateReport={handleCreateReport} hours={hours} />
        <ReportTable hours={hours} reports={reports}/>
      </main>
      <Footer reports={reports}/>
    </>
  );
}

function loginForm() {
  const { login } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    login(e.target.username.value, e.target.password.value)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label className='' htmlFor='username'>Username</label>
        <input className='' type='text' name='username' placeholder='Enter Username'></input>

        <label className='' htmlFor='password'>Password</label>
        <input className='' type='password' name='password' placeholder='Enter Password'></input>

        <button className=''>Sign In</button>
      </fieldset>
    </form>
    </>
  )
}