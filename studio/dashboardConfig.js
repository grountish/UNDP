export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'undp-studio',
                  apiId: '7af13301-e969-4358-9ad7-88270b978c6a'
                },
                {
                  buildHookId: '604943e10cf0a111885a8ab1',
                  title: 'Events Website',
                  name: 'undp-web',
                  apiId: 'e36fed0c-fcb6-4d32-9d17-8bac37d8bceb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/grountish/UNDP',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://undp-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
