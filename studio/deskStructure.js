import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'

const hiddenDocTypes = listItem =>
  !['sampleProject', 'experience', 'siteSettings', 'about', 'service'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('About')
        .child(
          S.editor()
            .id('about')
            .schemaType('about')
            .documentId('about')
        ),
      S.listItem()
        .title('Projects')
        .schemaType('sampleProject')
        .child(S.documentTypeList('sampleProject').title('Projects')),
      S.listItem()
        .title('Experience')
        .schemaType('experience')
        .child(S.documentTypeList('experience').title('Experience')),
      S.listItem()
        .title('Collaborators')
        .schemaType('collaborator')
        .child(S.documentTypeList('collaborator').title('Collaborators')),
      S.listItem()
        .title('Services')
        .schemaType('service')
        .child(S.documentTypeList('service').title('Services')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
