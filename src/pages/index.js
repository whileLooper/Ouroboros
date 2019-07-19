import React, { Component } from 'react'
import Layout from '../components/layout'
import Intro from '../components/mask'
import SEO from '../components/seo'
import Carousel from '../components/carousel'
import AboutSection from '../components/aboutSection'
import LightBox from '../components/lightbox'
import WebPage from '../components/webSection'
import TaxPage from '../components/taxSection'

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO
            title="Home"
            keywords={[
              `gatsby`,
              `MDBReact`,
              `react`,
              `Material Design For Bootstrap`,
            ]}
          />
          <Carousel />
          <Intro />
          <main>
            <AboutSection />
            <WebPage />
            {/* <TaxPage /> */}
            {/* <LightBox /> */}
          </main>
        </Layout>
      </>
    )
  }
}

export default App
