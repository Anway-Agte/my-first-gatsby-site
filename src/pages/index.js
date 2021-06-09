// Step 1: Import React
import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import {StaticImage} from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main>
        <Layout title="Home">
              <p>I'm at home page</p>
              <img
                alt="Steve Smith"
                src="https://www.cricket.com.au/~/-/media/News/2020/06/24SteveSmith.ashx?w=1600"
              ></img>
        </Layout>

    </main>
  )
}

// Step 3: Export your component
export default IndexPage