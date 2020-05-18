import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import SectionHeader from '../components/section-header'
import TransitionLink from "gatsby-plugin-transition-link"
import DribbbleIcon from '../components/icon/dribbble'
import BlockText from '../components/block-text'
import Footer from '../components/footer'
import Corners from '../components/corners'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      description
    }
    projects: allSanitySampleProject(
      sort: {fields: [publishedAt], order: DESC}
      filter: {publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          title
          role
          link
          publishedAt
        }
      }
    }
    services: allSanityService(
      sort: {fields: [order], order: ASC}
    ) {
      edges {
        node {
          id
          order
          title
          description
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
      .filter(filterOutDocsPublishedInTheFuture)
    : []
  const serviceNodes = (data || {}).services
    ? mapEdgesToNodes(data.services)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout data={data}>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <div>
        <div className="pl-4 lg:pb-12 md:pb-6 pb-4 text-white">
          <h2 className="md:text-5xl text-3xl leading-tight tracking-tight font-bold">{site.description}</h2>
        </div>
      </div>
      {projectNodes && (
        <ProjectPreviewGrid
          type='project'
          title='Projects'
          nodes={projectNodes}
        />
      )}
      <div className="lg:pb-16 md:pb-12 pb-8">
        <SectionHeader title="Services" />
        <ul>
          {serviceNodes && (
              serviceNodes.map(node => (
                <li className="p-1 text-white" key={node.id}>
                  <div class="border border-gray-700 relative">
                    <Corners classes="out" />
                    <h4 className="text-2xl font-bold flex p-3 bg-gray-800">{node.title}</h4>
                    <p className="text-lg border-t border-gray-700 p-3 text-gray-500">
                      {node.description}
                    </p>
                  </div>
                </li>
            ))
          )}
        </ul>
      </div>
      <Footer />
    </Layout>
  )
}

export default IndexPage
