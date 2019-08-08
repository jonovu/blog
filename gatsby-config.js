module.exports = {

  siteMetadata: {
    title: `Welcome to this modern blog`
  },

  plugins: [
    'gatsby-plugin-sass',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'files',
        path: `${__dirname}/src/markdown`,
      },
    },

    'gatsby-transformer-remark'

  ]

}