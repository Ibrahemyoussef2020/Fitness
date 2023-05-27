import styled from "styled-components";

const CoverStyle = styled.div`
position:relative;
height:100vh;
max-height:550px;

    & > section {
        position: absolute;
        top: 0;
        left: 0;
        bottom:70px;
        right:0;
    }
    & > .cover-img{
        z-index:0;
        height:100%;
    }
    & > .cover-layout{
        z-index:1;
    }
}
`
const Wallpaper = ({children})=>{
    return <CoverStyle>
        {children}
    </CoverStyle>
}

export default Wallpaper
