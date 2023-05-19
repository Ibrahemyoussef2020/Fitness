import styled from "styled-components";

const NavStyle = styled.nav`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
max-width:100vw;
height: 70px;
display: flex;
justify-content: space-around;
align-items:center;
padding: 2px .5rem;
font-size: var(--another-title-font);
font-weight:bold;
background: #000;

& a{
    color:#fff;
}
`

const Nav = ({children})=>{
    return <NavStyle>
            {children}
    </NavStyle>
}

export default Nav 
