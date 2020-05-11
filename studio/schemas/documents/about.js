export default {
  name: 'about',
  type: 'document',
  title: 'About Page',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'content',
      type: 'projectPortableText',
      title: 'Content',
    }
  ]
}
