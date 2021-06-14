module.exports = {
	flags: {
		PARALLEL_SOURCING: true,
		PRESERVE_WEBPACK_CACHE: true,
		FAST_DEV: true,
		DEV_SSR: true,
		FUNCTIONS: true,
		PRESERVE_FILE_DOWNLOAD_CACHE: true
	},
	siteMetadata: {
		lang: `en`,
		title: `WorkClass`,
		description: `Need to find a job? WorkClass has you covered with over 9000 job listings and over 1220 employers registered. Find a job today on WorkClass.co`,
		keywords: `job, jobs, jobboard, job board, workclass, workclass sg`,
		siteUrl: `https://workclass.co`,
		author: `@WorkClassSG`
	},
	plugins: [
		{ resolve: `gatsby-plugin-antd` },
		{ resolve: `gatsby-plugin-react-helmet` },
		{ resolve: `gatsby-plugin-remove-trailing-slashes` },
		{ resolve: `gatsby-plugin-sharp` },
		{ resolve: `gatsby-plugin-styled-components` },
		{ resolve: `gatsby-plugin-typescript` },
		{ resolve: `gatsby-plugin-typescript-checker` },
		{ resolve: `gatsby-transformer-sharp` },
		{ resolve: `gatsby-plugin-offline` },
		{ resolve: `gatsby-plugin-layout` },
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `workclass`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `static/images/company/workclass-icon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/static/images`
			}
		},
		{
			resolve: `gatsby-plugin-firebase`,
			options: {
				credentials: {
					apiKey: 'XYZ',
					authDomain: 'XYZ',
					databaseURL: 'XYZ',
					projectId: 'XYZ',
					storageBucket: 'XYZ',
					messagingSenderId: 'XYZ',
					appId: 'XYZ',
					measurementId: 'XYZ'
				}
			}
		}
	]
};
