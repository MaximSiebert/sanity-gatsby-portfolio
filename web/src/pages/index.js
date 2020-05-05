import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import PageTitle from '../components/page-title'
import TransitionLink from "gatsby-plugin-transition-link"

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    projects: allSanitySampleProject(
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          mainImage {
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
          title
          role
          link
          publishedAt
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <div className="py-12">
        <div className="flex">
          <p className="w-2/12 px-4 text-2xl">2009 – 2020</p>
          <h2 className="w-10/12 ml-auto px-4 mb-12 tracking-tight text-white text-7xl leading-none font-semibold">Designer and Developer</h2>
        </div>
        {projectNodes && (
          <ProjectPreviewGrid
            type='project'
            firstLabel='Projects'
            secondLabel='Role'
            thirdLabel='Year'
            nodes={projectNodes}
          />
        )}
        <div>
          <TransitionLink
            className="block text-3xl border border-green-100 p-12 bg-black highlight"
            to='/contact/'
            exit={{
              length: .6,
            }}
            entry={{
              delay: .6,
              length: .6
            }}
          >
            <span className="relative">Let's build you one too. maxim.siebert@gmail.com</span>
          </TransitionLink>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
