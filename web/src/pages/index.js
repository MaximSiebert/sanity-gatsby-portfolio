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
        <div className="pl-4 pb-8 text-white">
          <h2 className="text-5xl leading-tight tracking-tight font-bold mb-4">{site.description}</h2>
        </div>
      </div>
      {projectNodes && (
        <ProjectPreviewGrid
          type='project'
          title='Projects'
          nodes={projectNodes}
        />
      )}
      <div className="pb-16">
        <SectionHeader title="Services" />
        <ul>
          {serviceNodes && (
              serviceNodes.map(node => (
                <li className="p-1 text-white" key={node.id}>
                  <div class="bg-gray-900 rounded-lg">
                    <h4 className="text-2xl font-bold flex p-3">{node.title}</h4>
                    <p className="text-lg opacity-50 border-t border-black p-3">
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
