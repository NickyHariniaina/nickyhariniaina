import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Showcase from '../components/Showcase'

export default function Home() {
  return (
    <>
      <section className="hero-split">
        <Header />
        <Showcase />
      </section>
      <Introduction />
    </>
  )
}