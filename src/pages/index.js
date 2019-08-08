import React from 'react'
import Layout from '../components/layout'
import Title from '../components/title'
import ArticleList from '../components/article-list'

export default () => (
    <Layout>
        <Title /*text={data.site.siteMetadata.title}*/ text="Welcome"/>
        <p>This is me. Here is my site.</p>
        <ArticleList />
    </Layout>
)

/*export const query = graphql `query {
    site {
        siteMetadata {
            title
        }
    }
}`*/

//add "{data}" to the export function
