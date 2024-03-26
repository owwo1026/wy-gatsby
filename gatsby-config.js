module.exports = {
  siteMetadata: {
    title: `維域設計 | WY Design | 室內設計公司`,
    description: `維域設計室內裝修有限公司 | 台中室內設計 推薦北屯專業室內裝修施作工程 首選 住宅空間規劃 商空規劃設計 商業店面設計裝潢 老屋中古屋舊屋翻新 價格 客製化 新成屋客變 系統櫃好評 優質豪宅設計評價`,
    siteUrl: `https://wydesign22.com`,
    author: `@wydesign22`,
  },
  // flags: {
  //   DEV_SSR: true
  // },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Landify UI`,
        short_name: `Landify UI`,
        start_url: `/`,
        background_color: `#7C3AED`,
        theme_color: `#7C3AED`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`, // Replace with your favicon (This path is relative to the root of the site)
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `G-6YNNH6V061`, // Replace with your Google Analytics tracking ID
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    // Use this plugin if you are deploying you site to Gatsby Cloud
    // To learn more, visit: https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-gatsby-cloud/
    // `gatsby-plugin-gatsby-cloud`,
  ],
};
