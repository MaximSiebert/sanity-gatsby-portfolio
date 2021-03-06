export default {
  name: 'sampleProject',
  title: 'Sample project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them',
      type: 'date'
    },
  ],
  preview: {
    select: {
      title: 'title',
      link: 'link'
    },
    prepare({title = 'No title', link}) {
      return {
        title,
        subtitle: link
      }
    }
  }
}
