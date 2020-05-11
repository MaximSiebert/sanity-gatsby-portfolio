export default {
  name: 'collaborator',
  title: 'Collaborators',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url'
    }
  ],
  preview: {
    select: {
      title: 'title',
      link: 'link'
    },
    prepare({title = 'No title', link}) {
      return {
        title,
        link
      }
    }
  }
}
