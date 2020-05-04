export default {
  name: 'experience',
  title: 'Experience',
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
      name: 'startDate',
      title: 'Start Date',
      type: 'date'
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date'
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
      role: 'role'
    },
    prepare({title = 'No title', role}) {
      return {
        title,
        role
      }
    }
  }
}
