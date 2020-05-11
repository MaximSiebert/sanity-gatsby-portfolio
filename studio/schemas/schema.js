// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import sampleProject from './documents/sampleProject'
import experience from './documents/experience'
import service from './documents/service'
import collaborator from './documents/collaborator'
import siteSettings from './documents/siteSettings'
import about from './documents/about'

// Object types
import bioPortableText from './objects/bioPortableText'
import figure from './objects/figure'
import projectPortableText from './objects/projectPortableText'
import simplePortableText from './objects/simplePortableText'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'portfolio',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bioPortableText,
    figure,
    projectPortableText,
    simplePortableText,
    // The following are document types which will appear
    // in the studio.
    sampleProject,
    experience,
    collaborator,
    service,
    siteSettings,
    about
  ])
})
