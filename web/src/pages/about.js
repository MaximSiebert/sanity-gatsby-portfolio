import React from 'react'
import {format, distanceInWords, differenceInDays} from 'date-fns'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import BlockContent from '../components/block-content'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'
import SectionHeader from '../components/section-header'
import ExternalIcon from '../components/icon/external'
import Footer from '../components/footer'

export const query = graphql`
  query AboutPageQuery {
    about: sanityAbout(_id: {regex: "/(drafts.|)about/"}) {
      _rawContent
    }
    experience: allSanityExperience(
      sort: {fields: [endDate], order: DESC}
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
    collaborator: allSanityCollaborator(
      sort: {fields: [title], order: ASC}
    ) {
      edges {
        node {
          id
          title
          link
        }
      }
    }
  }
`

const AboutPage = props => {
  const {data, errors} = props

  const about = (data || {}).about

  const experienceNodes = (data || {}).experience
  ? mapEdgesToNodes(data.experience)
  : []

  const collaboratorNodes = (data || {}).collaborator
  ? mapEdgesToNodes(data.collaborator)
  : []
  
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title="About" />
      <div className="pl-4 pb-8 tracking-tight normal-case text-white text-4xl leading-tight">
        {about._rawContent && <BlockContent blocks={about._rawContent || []} />}
      </div>
      <div className="pb-12">
        <SectionHeader title="Experience" />
        <ul className="flex flex-wrap">
          {experienceNodes && (
              experienceNodes.map(node => (
                <li className="min-w-1/2 flex-1 text-white p-1" key={node.id}>
                  <a
                    className="group bg-gray-900 hover:bg-gray-800 active:bg-gray-900 rounded-lg block"
                    href={node.link}
                    target="_blank"
                    rel="nooppener noreferrer"
                  >
                    <div className="flex items-center p-3">
                      <h4 className="text-2xl font-bold flex">{node.title}</h4>
                      <ExternalIcon classes="w-5 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-100 ml-auto text-white" />
                    </div>
                    <div className="border-t border-black p-3 flex text-xs font-medium opacity-75">
                      <p>
                        {node.role}
                      </p>
                      <p className="ml-auto">
                        {format(new Date(node.startDate), 'MM/YYYY')}
                        <span className="mx-2">–</span> 
                        {node.endDate
                          ? format(new Date(node.endDate), 'MM/YYYY')
                          : 'Present'
                        }
                      </p>
                    </div>
                  </a>
                </li>
            ))
          )}
        </ul>
      </div>
      <div className="pb-16">
        <SectionHeader title="Collaborators" />
        <ul className="flex flex-wrap">
          {collaboratorNodes && (
              collaboratorNodes.map(node => (
                <li className="min-w-1/2 flex-1 text-white p-1" key={node.id}>
                  <a
                    className="group bg-gray-900 hover:bg-gray-800 active:bg-gray-900 rounded-lg block"
                    href={node.link}
                    target="_blank"
                    rel="nooppener noreferrer"
                  >
                    <div className="flex items-center p-3">
                      <h4 className="text-xl font-bold flex">{node.title}</h4>
                      <ExternalIcon classes="w-5 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-100 ml-auto text-white" />
                    </div>
                  </a>
                </li>
            ))
          )}
        </ul>
      </div>
      <Footer />
    </Layout>
  )
}

export default AboutPage
