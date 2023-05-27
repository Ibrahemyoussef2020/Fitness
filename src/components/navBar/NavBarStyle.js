import styled from "styled-components";

const NavStyle = styled.nav`
position: relative;
top:81px;
left:0px;
height:70vh;
width:100vw;
background:transparent;
z-index: 5;

& a{
    width:100%;
    padding-left:10px;
    display:flex;
    align-items:center;
    gap:.75rem;
    color:#fff;
}
& img{
    width:25px;
    height:25px;
}

& span{
    display:block;
}
`

const Nav = ({children})=>{
    return <NavStyle>
            {children}
    </NavStyle>
}

export default Nav 
