import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import styled from 'styled-components';

const SiteInfoWrapper = styled.div`
  flex-grow: 1; 
  color: #333;
  margin: 5em 0;
  font-family: 'Oswald', sans-serif;
  font-weight: 900;
  font-size: 3em;
  text-align: center;
`

const siteTitle = styled.div`
  font-weight: bold;
  font-size: 5em;
`

const SiteInfo = () => (
    <StaticQuery query={graphql`
    {
        allWordpressSiteMetadata{
          edges{
            node{
              name
              description
            }
          }
        }
      }
    `} render={props => ( 
       <SiteInfoWrapper>
           <siteTitle>
               {props.allWordpressSiteMetadata.edges[0].node.name}
           </siteTitle>
           <div>
               {props.allWordpressSiteMetadata.edges[0].node.description}
           </div>
       </SiteInfoWrapper>
    )} />
);

export default SiteInfo