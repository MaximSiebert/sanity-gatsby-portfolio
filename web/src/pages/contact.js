import React, {useState, useEffect} from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'
import PageTitle from '../components/page-title'
import SectionHeader from '../components/section-header'
import ContactForm from '../components/contact-form'
import Footer from '../components/footer'

export const query = graphql`
  query ContactPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
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

  return (
    <Layout>
      <SEO title="Contact" />
      <div className="pl-4 pb-8">
        <p className="tracking-tight normal-case text-white text-4xl mb-12 leading-tight">I design and develop modular, accessible, and performant systems which I use to build well-crafted sites and applications. I do research, try new things, and have honest conversations in order to find the best solutions.</p>
        <ContactForm action="https://www.flexyform.com/f/cdef41920822445ca2d176d270420f3756bacefe" />
      </div>
      <Footer />
    </Layout>
  )
}

export default ContactPage
