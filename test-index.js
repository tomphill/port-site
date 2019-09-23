import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import {graphql, StaticQuery} from 'gatsby'

const IndexPage = () => (
    <Layout>
        <StaticQuery query={graphql`
            {
                allWordpressPage {
                    edges {
                    node {
                        id
                        slug
                        status
                        template
                        title
                        content
                        template
                        menu_order
                        }
                    }
                }
            }
        `} render={props => (
            <div>
                {props.allWordpressPage.edges.map(page => (
                    <section id="cv" key={page.node.id.slug='cv'}>
                        <h1>
                            {page.node.title}
                        </h1>
                        <div dangerouslySetInnerHTML={{__html: page.node.content}} />
                    </section>

                    <section id="projects" key={page.node.id.slug='projects'}>
                        <h1>
                            {page.node.title}
                        </h1>
                        <div dangerouslySetInnerHTML={{__html: page.node.content}} />
                    </section>
                ))}
            </div>
        )} />
    </Layout>
)

export default IndexPage
