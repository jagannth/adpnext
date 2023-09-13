import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomeCategory from '../../components/HomeCategory'
export default function page() {
  return (
    <div>
      <Header name="home" />
      <HomeCategory />
      <Footer name="home" />
    </div>
  )
}
