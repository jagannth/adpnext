
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Contact from '../../components/Contact'
export const metadata = {
  title: 'Additional Sheet | Contact',
  description: 'Keep In Touch With Us(hi.additionalsheet@gmail.com). We encourage you to reach out to us through our contact form, email address, or social media links. Additionally, we provide regular updates through our blog and newsletter to keep you informed about our activities and offerings. We value your feedback and look forward to hearing from you!',
}
export default function page() {
  return (
    <div>
      <Header name="home" />
      <Contact />
      <Footer name="home" />  
    </div>
  )
}
