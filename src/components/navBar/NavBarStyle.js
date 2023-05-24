import styled from "styled-components";

const NavStyle = styled.nav`
position: absolute;
top:70px;
left:50px;
height:70vh;
display: flex;
flex-direction:column;
justify-content: space-around;
align-items:center;
padding: 2px .5rem;
font-size: var(--another-title-font);
font-weight:bold;
background:red;
over-flow:visible;

& a{
    color:#00f;
    display:block;
    z-index: 1;
}
`

const Nav = ({children})=>{
    return <NavStyle>
            {children}
    </NavStyle>
}

export default Nav 
