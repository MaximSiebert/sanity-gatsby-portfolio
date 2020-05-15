import {graphql, StaticQuery} from 'gatsby'
import React, {useState} from 'react'

import Layout from '../components/layout'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      role
      portrait {
        asset {
          _id
        }
        caption
      }
    }
  }
`

function LayoutContainer (props) {

  const [showNav, setShowNav] = useState(false);

  function handleShowNav () {
    setShowNav(true);
  }
  
  function handleHideNav () {
    setShowNav(false);
  }

  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
          )
        }
        return (
          <Layout
            {...props}
            showNav={showNav}
            siteTitle={data.site.title}
            role={data.site.role}
            portrait={data.site.portrait}
            onHideNav={handleHideNav}
            onShowNav={handleShowNav}
          />
        )
      }}
    />
  )
}

export default LayoutContainer
