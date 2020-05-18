import React from 'react'
import {format, distanceInWords, differenceInDays} from 'date-fns'
import {graphql} from 'gatsby'
import {Howl, Howler} from 'howler';

import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import BlockContent from '../components/block-content'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'
import SectionHeader from '../components/section-header'
import ExternalIcon from '../components/icon/external'
import Footer from '../components/footer'
import tickAudio from '../sounds/tick.mp3'
import clickAudio from '../sounds/click.mp3'
import Corners from '../components/corners';

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

  var tick = new Howl({
    src: [tickAudio]
  });

  var click = new Howl({
    src: [clickAudio],
    volume: 0.25
  });

  function playTick () {
    tick.play()
  }

  function playClick () {
    click.play()
  }

  return (
    <Layout>
      <SEO title="About" />
      <div className="pl-4 md:pb-8 pb-4 tracking-tight normal-case text-white md:text-4xl text-xl md:leading-tight">
        {about._rawContent && <BlockContent blocks={about._rawContent || []} />}
      </div>
      <div className="md:pb-8 pb-4">
        <SectionHeader title="Experience" />
        <ul className="flex flex-wrap">
          {experienceNodes && (
              experienceNodes.map(node => (
                <li className="min-w-1/2 md:w-1/2 w-full md:flex-1 text-white p-1" key={node.id}>
                  <a
                    onMouseEnter={playTick}
                    onMouseDown={playClick}
                    className="inner-border clickable-item group block relative items-center hover:bg-gray-800 hover:border-green-500 text-gray-500 active:bg-gray-900 border border-gray-700"
                    href={node.link}
                    target="_blank"
                    rel="nooppener noreferrer"
                  >
                    <Corners classes="out" />
                    <div className="flex items-center p-3 group-hover:box-shadow">
                      <h4 className="text-2xl font-bold flex text-white">{node.title}</h4>
                      <ExternalIcon classes="ext-icon w-5 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-100 ml-auto text-green-500" />
                    </div>
                    <div className="group-hover:box-shadow group-hover:text-green-500 bg-gray-800 border-t border-gray-700 group-hover:border-green-500 p-3 flex text-xs font-medium font-mono uppercase tracking-wider text-gray-500">
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
      <div className="lg:pb-16 md:pb-12 pb-8">
        <SectionHeader title="Collaborators" />
        <ul className="flex flex-wrap">
          {collaboratorNodes && (
              collaboratorNodes.map(node => (
                <li className="min-w-1/2 md:w-1/2 w-full md:flex-1 text-white p-1" key={node.id}>
                  <a
                    onMouseEnter={playTick}
                    onMouseDown={playClick}
                    className="inner-border clickable-item group hover:box-shadow border border-gray-700 bg-gray-800 hover:border-green-500 active:bg-gray-900 block"
                    href={node.link}
                    target="_blank"
                    rel="nooppener noreferrer"
                  >
                    <Corners classes="out" />
                    <div className="flex items-center p-3">
                      <h4 className="text-xl font-bold flex">{node.title}</h4>
                      <ExternalIcon classes="ext-icon w-5 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-100 ml-auto text-green-500" />
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
