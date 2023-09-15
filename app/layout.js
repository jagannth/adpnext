import '../public/css/bootstrap.min.css'
import '../public/css/custom.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Additional Sheet',
  description: 'Welcome to Additional Sheet, where learning is made easy and accessible for everyone. Whether you are a student looking to excel in your studies or an individual seeking to acquire new skills, we are here to guide you on your learning journey.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
      </head>
      <body className={inter.className}>
        <Header name="home"/>
        {children}
        <Footer name="home"/>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"></script>
      </body>
    </html>
  )
}
