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
import SectionHeader from '../components/section-header'
import TransitionLink from "gatsby-plugin-transition-link"
import DribbbleIcon from '../components/icon/dribbble'

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
      <div>
        <SectionHeader title="Intro"></SectionHeader>
        <div className="pl-4 py-8 text-white">
          <h2 className="text-6xl leading-none font-medium mb-4">Maxim designs systems to build well-crafted sites.</h2>
          <p className="text-lg opacity-75">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro enim incidunt amet cum dolores ducimus autem ipsam praesentium, optio expedita nostrum alias laborum fugiat cupiditate maiores eos quo saepe esse.</p>
        </div>
      </div>
      {projectNodes && (
        <ProjectPreviewGrid
          type='project'
          title='Projects'
          nodes={projectNodes}
        />
      )}
      <div className="pb-12">
        <SectionHeader title="Services" />
        <ul className="space-y-2">
          <li className="min-w-1/2 text-white bg-gray-900 rounded-lg">
            <div className="text-2xl flex p-4">
              <span>01</span>
              <h4 className="ml-4">Visual Identity</h4>
            </div>
            <p className="text-xl opacity-50 border-t border-black p-4">We identify actionable opportunities, then prioritize them by value, effort and risk—we intend to start 'doing' as quickly as possible. Common activities include product roadmapping, conducting user research and planning content and technology.</p>
          </li>
          <li className="min-w-1/2 text-white bg-gray-900 rounded-lg">
            <div className="text-2xl flex p-4">
              <span>02</span>
              <h4 className="ml-4">User Experience</h4>
            </div>
            <p className="text-xl opacity-50 border-t border-black p-4">We marry creative insight with data to deliver successful user experiences. Through a process of iteration and prototyping, we design interfaces that bring joy to people while allowing them to get things done.</p>
          </li>
          <li className="min-w-1/2 text-white bg-gray-900 rounded-lg">
            <div className="text-2xl flex p-4">
              <span>03</span>
              <h4 className="ml-4">Web Engineering</h4>
            </div>
            <p className="text-xl opacity-50 border-t border-black p-4">We develop custom software that responds to business needs by making engineering a fundamental part of our design process. We write high-quality code that prioritizes reliability, scalability and performance.</p>
          </li>
        </ul>
      </div>
      <div className="pb-16">
        <TransitionLink
          className="block text-2xl bg-green-500 text-black p-12 rounded-lg ml-1 flex items-center"
          to='/contact/'
          exit={{
            length: .6,
          }}
          entry={{
            delay: .6,
            length: .6
          }}
        >
          <span className="relative">Let's build you a website.</span>
          <DribbbleIcon classes="w-10 h-auto ml-auto" />
        </TransitionLink>
      </div>
    </Layout>
  )
}

export default IndexPage
