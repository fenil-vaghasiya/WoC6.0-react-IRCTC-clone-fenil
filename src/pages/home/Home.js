import React from 'react'
import Layout from '../../components/layout/Layout'
import Search from '../../components/search/Search'
import Expertise from '../../components/expertise/Expertise'
import IntroSection from '../../components/introSection/IntroSection'

function Home() {
  return (
      <Layout>
        <IntroSection/>
        <Search/>
        <Expertise/>
      </Layout>
  )
}

export default Home