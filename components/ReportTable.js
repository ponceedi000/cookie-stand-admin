export default function ReportTable({ hours, reports }) {
  if (reports.length) {
    return (
      <table className="">
        <thead>
          <tr>
            <th className="">Location</th>
            {hours.map((hour) => (
              <th key={hour}>{hour}</th>
            ))}
            <th>Totals</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <ResultsRow key={report.name} report={report} />
          ))}
          <tr>
            <td className="">
              Totals
            </td>
            {hours.map((hour, idx) => (
              <td key={hour} className="">
                {reports.reduce(
                  (prev, current) => prev + current.hourlyData[idx],
                  0
                )}
              </td>
            ))}

            <td className="">
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
    <tr>
      <td className="pl-4 border border-black">{report.name}</td>
      {report.hourlyData.map((hourData, idx) => (
        <td className="pl-4 border border-black" key={idx}>
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