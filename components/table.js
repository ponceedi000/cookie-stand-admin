export default function Table({ cookieStand }) {
  return (
    <section className="text-center">
      <p>Report Table Coming Soon...</p>
      <p>{"{"}&quot;location&quot;:{cookieStand.location},&quot;minCustomers&quot;:{cookieStand.min_cust_per_hour},&quot;maxCustomers&quot;:{cookieStand.max_cust_per_hour},&quot;avgCookies&quot;:{cookieStand.avg_cookies_per_sale}{"}"}</p>
    </section>
  )
}