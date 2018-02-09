import styled from 'styled-components';
import { darken } from 'polished';

function changeNav(theme) {
  return `
      padding-top: ${theme.Nav.paddingTopOnScroll};
      padding-bottom: ${theme.Nav.paddingBottomOnScroll};
      background: ${theme.Nav.backgroundOnScroll};
      box-shadow: ${theme.Nav.boxShadowOnScroll};
    `;
}

export const Nav = styled.div`
  box-shadow: ${props => props.theme.Nav.boxShadow};
  background: ${props => props.theme.Nav.background};
  border-radius: ${props => props.theme.Nav.borderRadius};
  padding: ${props => props.theme.Nav.padding};
  pointer-events: none;
  transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  flex-flow: row nowrap;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  ${({ change, theme }) => change && changeNav(theme)};
`;

export const NavContainer = styled.div`
  padding-right: ${props => props.theme.NavContainer.paddingRight};
  padding-left: ${props => props.theme.NavContainer.paddingLeft};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export const NavBrand = styled.a`
  padding-top: ${props => props.theme.NavBrand.paddingTop};
  padding-bottom: ${props => props.theme.NavBrand.paddingBottom};
  margin-right: ${props => props.theme.NavBrand.marginRight};
  font-size: ${props => props.theme.NavBrand.fontSize};
  color: ${props => props.theme.NavBrand.color};
  display: inline-block;
  line-height: inherit;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  font-weight: bolder;
  pointer-events: auto;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${props => darken(0.15, props.theme.NavBrand.color)};
    opacity: 0.6;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex-basis: auto;
  flex-grow: 1;
  align-items: center;
  ul {
    flex-direction: row;
    line-height: 1.8;
    margin-right: auto;
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    margin-top: 0;
    li {
      color: ${props => props.theme.NavBrand.color};
      display: inline-block;
      line-height: inherit;
      white-space: nowrap;
      text-decoration: none;
      cursor: pointer;
      font-weight: bolder;
      pointer-events: auto;
      transition: all 0.2s ease-in-out;
      &:hover {
        color: ${props => darken(0.15, props.theme.NavBrand.color)};
        opacity: 0.6;
      }
      a {
        padding-right: 0.5rem;
        padding-left: 0.5rem;
      }
    }
  }
`;
