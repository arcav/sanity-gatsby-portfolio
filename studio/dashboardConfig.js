export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ec63776a4730700eb7b0885',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-z2imz5e2',
                  apiId: '0d92a6b9-205c-4a45-92be-80f4e3895c7b'
                },
                {
                  buildHookId: '5ec63776a47307ce427b0d4e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vij1ehqt',
                  apiId: '297dfe21-17c2-4540-8ecd-fa148dff8b95'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arcav/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vij1ehqt.netlify.app',
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
