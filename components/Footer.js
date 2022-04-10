export default function Footer({ reports }) {
  return (
    <footer className="flex items-center justify-between p-3 mt-8 bg-green-500">
      <h1 className='font-semibold text-m'>{reports.length} Locations World Wide</h1>
    </footer>
  )
}