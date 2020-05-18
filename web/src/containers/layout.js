import {graphql, StaticQuery} from 'gatsby'
import React, {useState, useEffect, useRef} from 'react'

import Layout from '../components/layout'
import {buildImageObj} from '../lib/helpers'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      role
      portrait {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
    }
  }
`

function LayoutContainer (props) {

  const node = useRef();

  const [showNav, setShowNav] = useState(false);

  function handleShowNav () {
    setShowNav(true);
  }
  
  function handleHideNav () {
    setShowNav(false);
  }

  function handleClickOutside (e) {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    handleHideNav();
  };

  useEffect(() => {
    if (showNav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNav]);

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
            navRef={node}
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
