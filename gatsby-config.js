
module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `src/posts/`,
      },
      
    },
    `gatsby-plugin-mdx`,
  ],
}
