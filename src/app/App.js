import Header from '../pages/Header'
import Search from '../pages/Search'
import MainBanner from '../pages/MainBanner'
import About from '../pages/About'
import Feature from '../pages/Feature'
import Subscribe from '../pages/Subscribe'
import Projects from '../pages/Projects'
import Testimonials from '../pages/Testimonials'
import Contact from '../pages/Contact'
import Footer from '../pages/Footer'

function App() {
  return (
    <div>

      {/** Header Area */}
      <Header />

      {/** Search Area */}
      <Search />

      {/** Main Banner Area */}
      <MainBanner />

      {/** About Area */}
      <About />

      {/** Features Big Item Area */}
      <Feature />

      {/** Subscribe Area */}
      <Subscribe />

      {/** Projects Area */}
      <Projects />

      {/** Testimonials Area */}
      <Testimonials />

      {/** Contact Area */}
      <Contact />

      {/** Footer Area */}
      <Footer />

    </div>
  );
}

export default App;
