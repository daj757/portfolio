import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import IndexPage from '../pages/index'
import Header from '../components/header'
import Landing from '../components/landing'
import About from '../components/about'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './index.css'

const Layout = ({ children, data }) => (
  <div id="all">
    <Helmet
      title="Daniel Jimenez"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Condensed"
        rel="stylesheet"
      />
    </Helmet>
    <Header />
    <Landing />
    <About />
    <Portfolio />
    <Contact />
    <Footer />

    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
