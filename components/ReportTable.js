export default function ReportTable({ hours, reports }) {
  if (reports.length) {
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
          {reports.map((report) => (
            <ResultsRow key={report.name} report={report} />
          ))}
          <tr className="border-[1px] border-black">
            <td className="px-4 font-bold">
              Totals
            </td>
            {hours.map((hour, idx) => (
              <td key={hour} className="text-center border-[1px] border-black">
                {reports.reduce(
                  (prev, current) => prev + current.hourlyData[idx],
                  0
                )}
              </td>
            ))}

            <td>
              {hours
                .map((hour, idx) =>
                  reports.reduce(
                    (prev, current) => prev + current.hourlyData[idx],
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
  return (
    <tr className="odd:bg-green-500 even:bg-green-300">
      <td className="pl-4 border border-black">{report.name}</td>
      {report.hourlyData.map((hourData, idx) => (
        <td className="text-center border border-black" key={idx}>
          {hourData}
        </td>
      ))}
      <td className="pl-4 border border-black">
        {report.hourlyData.reduce((prev, current) => prev + current)}
      </td>
    </tr>
  );
}


// <section className="text-center">
//   <p>Report Table Coming Soon...</p>
//   <p>{"{"}&quot;location&quot;:{cookieStand.location},&quot;minCustomers&quot;:{cookieStand.min_cust_per_hour},&quot;maxCustomers&quot;:{cookieStand.max_cust_per_hour},&quot;avgCookies&quot;:{cookieStand.avg_cookies_per_sale}{"}"}</p>
// </section>