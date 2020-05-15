export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      title: 'Portrait',
      name: 'portrait',
      type: 'portrait',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your portfolio for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your portfolio.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }
  ]
}
