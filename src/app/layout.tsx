import './globals.css'
import {Montserrat} from "next/font/google"

const montserrat = Montserrat({subsets:['latin']})

export const metadata = {
  title: 'FALLEN',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.className} bg-slate-800`}>
      <body >{children}</body>
    </html>
  )
}
