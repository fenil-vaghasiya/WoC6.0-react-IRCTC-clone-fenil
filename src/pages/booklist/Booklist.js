import React from 'react'
import Bookingticket from '../../components/ticketdetail/Bookingticket'
import Layout from '../../components/layout/Layout'

function Booklist() {
  return (
    <Layout>
      <div>
          <Bookingticket/>
          <Bookingticket/>
      </div>
    </Layout>
  )
}

export default Booklist