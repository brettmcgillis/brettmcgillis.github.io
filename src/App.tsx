import { Banner } from './components/Banner'
// import { Portfolio } from './components/Portfolio'
import { Contact, Cv, SiteFooter } from './components/Sections'

export default function App() {
  return (
    <div id="top" className="page">
      <Banner />
      <main className="page__main">
        <Cv />
        {/* <Portfolio /> */}
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
