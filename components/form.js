export default function Form(props) {

  function handleSubmit(event) {
    event.preventDefault();

    props.onCreate(event.target.location.value, Number(event.target.min_cust_per_hour.value), Number(event.target.max_cust_per_hour.value), Number(event.target.avg_cookies_per_sale.value))
  }






  
  return (
<div className="flex flex-col justify-center px-10 py-2 mx-20 my-10 bg-green-400 rounded-lg">
        <p className="py-2 mb-3 text-xl font-medium text-center">Create Cookie Stand</p>

        <form onSubmit={handleSubmit} className=''>
          <div className="flex items-center ">

            <label className="pr-2 mb-1 font-boldmd:text-right md:mb-0">Location</label>
            <input name='location' id='location' type="text" placeholder="Enter a Location" className="w-full h-1 px-4 py-5 mb-2 mr-3 text-sm border border-gray-200 rounded text-gray-base" />

          </div>

          <div className='flex items-center text-sm'>
            <label htmlFor='mcrp' className="pr-2 mb-1 md:text-right md:mb-0">Minimum Customers Per Hour</label>
            <input id='mcpr' type="number" className="h-2 px-2 py-5 mb-2 mr-1 text-sm border border-gray-200 rounded text-gray-base" />

            <label htmlFor='mcrp' className="pr-2 mb-1 md:text-right md:mb-0">Maximum Customers Per Hour</label>
            <input type="number" className="h-2 px-4 py-5 mb-2 mr-3 text-sm border border-gray-200 rounded text-gray-base" />

            <label htmlFor='mcrp' className="pr-2 mb-1 md:text-right md:mb-0">Maximum Customers Per Hour</label>
            <input type="number" className="h-2 px-4 py-5 mb-2 mr-3 text-sm border border-gray-200 rounded text-gray-base" />

            <button type="submit" className="px-10 py-3 bg-green-500">Create</button>
          </div>
        </form>
      </div>

  )
}