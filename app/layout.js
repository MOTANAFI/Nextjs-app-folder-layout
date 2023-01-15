
import Navbar from "./navbar"
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      
      <body>
      <Navbar/>
        {children}
        </body>
    </html>
  )
}
