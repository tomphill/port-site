/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 
 
 // font-family: 'Oswald', sans-serif;


import React from "react"
import MainMenu from './MainMenu'
import {graphql, StaticQuery, Link} from 'gatsby';
import {Helmet} from "react-helmet";
import SiteInfo from './SiteInfo';

import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Literata:400,400i,500,500i,600,600i,700,700i|Oswald:200,300,400,500,600,700&display=swap');

  body {
    font-family: 'Literata', serif;
    margin: 0 !important;
    padding: 0 !important;

    animation: bg-ani 30s infinite;
    animation-timing-function: ease;
  } 
  @keyframes bg-ani {
    5% {background-color: #FFFFE6;}

    50%{background-color: #E6FFFD;}

    95% {background-color: #FFE6E6;}
  } 


  h1 {
    font-family: 'Oswald', sans-serif;
    font-size: 4.7em;
    color: #333;
    ${'' /* background-color: white; */}

    margin: 0;
    padding: 0;
  }

  h2 {
    font-family: 'Oswald', sans-serif;
    font-size: 2em;
    color: #333;
    ${'' /* background-color: white; */}
  }

  h3 {
    font-family: 'Oswald', sans-serif;
    font-size: 1.7em;
    color: #333;
    ${'' /* background-color: white; */}
  }

`

// const introWrapper = styled.div`
//   font-family: 'Oswald', sans-serif;
//   color: #333;
//   background-color: white;

//   font-size: 1.7em;
// `

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;

  margin-top: 14em;
  line-hight: 1.4;
`

const Layout = ({ children }) => (
  <>
    <StaticQuery query={graphql`
      {
        allWordpressWpFavicon{
          edges{
            node{
              url{
                source_url
              }
            }
          }
        }
      }
    `} render={props => <Helmet><link rel="icon" href={props.allWordpressWpFavicon.edges[0].node.url.source_url} /></Helmet>} />

    <div> 
      <GlobalStyles />
      <MainMenu />
      {/* <SiteInfo /> */}
      <LayoutWrapper>
      {children}       
      </LayoutWrapper>
    </div>
  </>
);

export default Layout;


