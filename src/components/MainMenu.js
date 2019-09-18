import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';
import SiteInfo from './SiteInfo';

const MainMenuWrapper = styled.div`
   ${'' /* width: 300px; */}
    display: block;
    ${'' /* background-color: red; */}
`

const MainMenuInner = styled.div`
  position: absolute;
  top: 50%;
  left: 90%;
  ${'' /* max-width: 960px; */}
  margin: 0 auto; 
  display: ;
  ${'' /* width: 960px;
  height: 100%; */}
`

const MenuItem = styled(Link)`
    color: black;
    display: block;
    padding: 8px 16px;
    text-decoration: none;
`

const MainMenu = () => (
    <StaticQuery query={graphql`
    {
        allWordpressWpApiMenusMenusItems(filter: {
          name: {
            eq: "Main Menu"
          }
        }){
          edges{
            node{ 
              name
              items{
                title
                object_slug
              }
            }
          }
        }
      }
    
    `} render={props => (
        <MainMenuWrapper>
          <MainMenuInner>
            {/* <SiteInfo /> */}
              {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map( item => (
                  <MenuItem to={`/${item.object_slug}`} key={item.title}>
                      {item.title}
                  </MenuItem>
              ))}
          </MainMenuInner>
        </MainMenuWrapper>
    )} />
);

export default MainMenu;