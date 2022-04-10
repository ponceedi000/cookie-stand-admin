export default function CreateForm({ handleCreateReport, hours}) {

  function handleCreate(event) {
    event.preventDefault();


    let hourlyData = [];

    for (let _ in hours) {
      let max_cust_per_hour = parseFloat(event.target.max_cust_per_hour.value);
      let min_cust_per_hour = parseFloat(event.target.min_cust_per_hour.value);
      let avg_cookies_per_sale = parseFloat(event.target.avg_cookies_per_sale.value);

      let hourData = Math.round((Math.random() * (max_cust_per_hour - min_cust_per_hour) + min_cust_per_hour) * avg_cookies_per_sale);
      hourlyData.push(hourData);
    }
    let report = {
      name: event.target.location.value,
      hourlyData: hourlyData,
    };
    handleCreateReport(report)
  }

  return (
    <div className="flex flex-col justify-center px-10 py-2 mx-20 my-10 bg-green-400 rounded-lg">
      <p className="py-2 mb-3 text-xl font-medium text-center">Create Cookie Stand</p>

      <form onSubmit={handleCreate} className=''>
        <div className="flex items-center ">

          <label className="pr-2 mb-1 font-boldmd:text-right md:mb-0">Location</label>
          <input name='location' id='location' type="text" placeholder="Enter a Location" required className="w-full h-1 px-4 py-5 mb-2 mr-3 text-sm border border-gray-200 rounded text-gray-base" />

        </div>

        <div className='flex items-center text-sm'>
          <label htmlFor='min_cust_per_hour' className="pr-2 mb-1 md:text-right md:mb-0">Minimum Customers Per Hour</label>
          <input name="min_cust_per_hour" id='min_cust_per_hour' type="number" className="h-2 px-2 py-5 mb-2 mr-1 text-sm border border-gray-200 rounded text-gray-base" />

          <label htmlFor='max_cust_per_hour' className="pr-2 mb-1 md:text-right md:mb-0">Maximum Customers Per Hour</label>
          <input name="max_cust_per_hour" id="max_cust_per_hour" type="number" className="h-2 px-4 py-5 mb-2 mr-3 text-sm border border-gray-200 rounded text-gray-base" />

          <label htmlFor='avg_cookies_per_sale' className="pr-2 mb-1 md:text-right md:mb-0">Average Cookies per Sale</label>
          <input name="avg_cookies_per_sale" id="avg_cookies_per_sale" type="number" className="h-2 px-4 py-5 mb-2 mr-3 text-sm border border-gray-200 rounded text-gray-base" />

          <button type="submit" className="px-10 py-3 bg-green-500">Create</button>
        </div>
      </form>
    </div>

  )
}