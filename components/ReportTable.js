import useResource from '../hooks/useResource'

export default function ReportTable({ hours }) {
  const { resources } = useResource()
  
  if (resources && resources.length) {
    return (
      <table className="m-auto bg-green-600 rounded table-auto mx-50">
        <thead>
          <tr>
            <th>Location</th>
            {hours.map((hour) => (
              <th className="px-4" key={hour}>{hour}</th>
            ))}
            <th className="px-4">Totals</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((report) => (
            <ResultsRow key={report.name} report={report} />
          ))}
          <tr className="border-[1px] border-black">
            <td className="px-4 font-bold">
              Totals
            </td>
            {hours.map((hour, idx) => (
              <td key={hour} className="text-center border-[1px] border-black">
                {resources.reduce(
                  (prev, current) => prev + JSON.parse(current.hourly_sales)[idx],
                  0
                )}
              </td>
            ))}

            <td>
              {hours
                .map((hour, idx) =>
                  resources.reduce(
                    (prev, current) => prev + JSON.parse(current.hourly_sales)[idx],
                    0
                  )
                )
                .reduce((prev, current) => prev + current, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    return (
      <p className="w-8/12 mx-auto mt-5 text-center">
        No Cookie Stands Available
      </p>
    );
  }
}


function ResultsRow({ report }) {
  const { deleteResource } = useResource()

  function handleDelete() {
    deleteResource(report.id)
  }

  return (
    <tr className="border border-emerald-600">
      <td className="flex justify-between p-2 pl-4">
        <div className="font-bold">{report.location}</div>
        <div className="pr-2" onClick={handleDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>
      </td>
      {JSON.parse(report.hourly_sales).map((hourData, index) => (
        <td className="p-2 pl-4 text-right border border-emerald-600" key={index}>
          {hourData}
        </td>
      ))}
      <td className="p-2 pl-4 text-right border border-emerald-600">
        {JSON.parse(report.hourly_sales).reduce((prev, curr) => prev + curr, 0)}
      </td>
    </tr>
  );
}

  
//   return (
//     <tr className="odd:bg-green-500 even:bg-green-300">
//       <td className="pl-4 border border-black">{report.name}</td>
//       {report.hourlyData.map((hourData, idx) => (
//         <td className="text-center border border-black" key={idx}>
//           {hourData}
//         </td>
//       ))}
//       <td className="pl-4 border border-black">
//         {report.hourlyData.reduce((prev, current) => prev + current)}
//       </td>
//     </tr>
//   );
// }


// <section className="text-center">
//   <p>Report Table Coming Soon...</p>
//   <p>{"{"}&quot;location&quot;:{cookieStand.location},&quot;minCustomers&quot;:{cookieStand.min_cust_per_hour},&quot;maxCustomers&quot;:{cookieStand.max_cust_per_hour},&quot;avgCookies&quot;:{cookieStand.avg_cookies_per_sale}{"}"}</p>
// </section>