import React from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'
import PageTitle from '../components/page-title'

export const query = graphql`
  query ContactPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    experience: allSanityExperience(
      sort: {fields: [startDate], order: DESC}
    ) {
      edges {
        node {
          id
          title
          role
          startDate
          endDate
          link
        }
      }
    }
  }
`

const ContactPage = props => {
  const {data, errors} = props

  const experienceNodes = (data || {}).experience
  ? mapEdgesToNodes(data.experience)
  : []
  
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const projectNodes =
    data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title="Contact" />
      <PageTitle title="Contact" />
      <div className="p-12">
        <p className="tracking-tight normal-case text-white text-4xl mb-12 leading-tight ">I design and develop modular, accessible, and performant systems which I use to build well-crafted sites and applications. I do research, try new things, and have honest conversations in order to find the best solutions.</p>
        {experienceNodes && (
          <ProjectPreviewGrid
            firstLabel='Experience'
            secondLabel='Role'
            thirdLabel='Year'
            nodes={experienceNodes}
          />
        )}
      </div>
    </Layout>
  )
}

export default ContactPage
