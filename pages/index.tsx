import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='flex items-center justify-between p-3 bg-green-500'>
        <h1 className='text-2xl font-semibold'>Cookie Stand Admin</h1>

      </header>

      {/* <main className="flex flex-col items-center justify-center">
        <form className='flex w-1/2 my-4 bg-green-400'>
          <input name='location' type="text" placeholder='Enter location' className='w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border border-gray-200 rounded text-gray-base'></input>
          <button className='px-2 py-1 bg-green-500'>Create</button>
        </form>
      </main> */}

      <div className="flex flex-col items-center justify-center py-5">
        <p className="mb-3 text-xl font-medium">
          Create Cookie Stand
        </p>

        <form className=''>
          {/* <label className="mb-2 text-lg font-bold uppercase text-grey-darkest" htmlFor="Location"></label> */}
          <input name='Location'
            type="text" placeholder="Enter a Location"
            className="w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border border-gray-200 rounded text-gray-base" />

            <div>
            <input aria-label="Enter your password"
            type="password" placeholder="Password"
            className="w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border border-gray-200 rounded text-gray-base" />

          <button type="submit"
            className="w-full mt-4 bg-green-400">
            Login
          </button>
            </div>

        </form>
      </div>

      <footer className="flex items-center justify-between p-3 mt-8 bg-green-500">
        <h1 className='text-xs'>&copy;2021</h1>
      </footer>
    </div>
  )
}

export default Home
