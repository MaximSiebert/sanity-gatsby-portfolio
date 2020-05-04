export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eaa26e9a58b29dd0046e6a0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-pwtmwhn7',
                  apiId: '43903f31-a678-479f-ad9f-36b65186fdb6'
                },
                {
                  buildHookId: '5eaa26e9ad207e16f7aa8868',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-mn1n9cff',
                  apiId: '47b7c8ac-4221-41d6-ba72-85fb1bb10818'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MaximSiebert/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-mn1n9cff.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
