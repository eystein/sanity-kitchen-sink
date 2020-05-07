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
                  buildHookId: '5eb40a5978f00224a86bb5cd',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wyack3uw',
                  apiId: '1f4af1cb-ca52-4df9-b87a-b33a05134e90'
                },
                {
                  buildHookId: '5eb40a59a2b27cb67158506c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mc9xj2xf',
                  apiId: 'ba4aff2c-139c-4153-9a12-bd1b7c118996'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eystein/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mc9xj2xf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
