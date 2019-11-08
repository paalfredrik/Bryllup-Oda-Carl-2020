export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5dc4baa8a2e6adade46f3d08',
                  title: 'Sanity Studio',
                  name: 'Bryllup-Oda-Carl-2020-studio',
                  apiId: '67b84e7a-527f-41fa-a92e-c7125f1cdce7'
                },
                {
                  buildHookId: '5dc4baa8a2e6adc28f6f3d0a',
                  title: 'Landing pages Website',
                  name: 'Bryllup-Oda-Carl-2020',
                  apiId: 'f6275a05-09d5-48c2-ac42-a6f25f84f205'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/Bryllup-Oda-Carl-2020',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Bryllup-Oda-Carl-2020.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
