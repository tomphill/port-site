import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import { checkPropTypes } from 'prop-types';
import styled from 'styled-components';

const PortfolioItemsWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const PortfolioItem = styled.div `
    width: 300px; 
    border: 10px solid #BADA55;
    margin: 0 20px;
    padding: 15px;
`

const PortfolioImage = styled.img`
    max-width: 100%;
`

const PortfolioItems = () => {
    return (
        <StaticQuery query={graphql`
        {
            allWordpressWpPortfolio {
                edges {
                node {
                    id
                    title
                    slug
                    excerpt
                    content
                    featured_media {
                        source_url
                    }
                    
                }
                }
            }
            }
        `} render={props => (
            // <h1>projects</h1>
            <PortfolioItemsWrapper>
                {props.allWordpressWpPortfolio.edges.map(portfolioItem => (
                    <PortfolioItem key={portfolioItem.node.id}>
                        <h2>{portfolioItem.node.title}</h2>
                        <PortfolioImage src={portfolioItem.node.featured_media.source_url} alt="Thumbnail."/>
                        <div dangerouslySetInnerHTML={{__html: portfolioItem.node.excerpt}} />
                        <Link to={`/portfolio/${portfolioItem.node.slug}`}>wrap image</Link>
                    </PortfolioItem>
                ))}
            </PortfolioItemsWrapper> 
        )} />
    )
}

export default PortfolioItems; 