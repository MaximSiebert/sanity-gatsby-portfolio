export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({title = 'No title'}) {
      return {
        title
      }
    }
  }
}
