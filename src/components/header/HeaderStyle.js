import { styled} from "styled-components";

const HeaderBarStyle = styled.header`
display: flex;
justify-content: space-between;
align-items:center;
padding:5px 2rem 0 1rem;
background:#00000033;
position:relative;
& button{
    padding:.5rem 1.2rem;
    background:#0039ff;
    color: #fff;
}
& img{
    max-width:220px;
    max-height:60px;
}
&:after{
    content:'';
    position: absolute;
    left:15px;
    bottom:10px;
    width: 220px;
    padding:1px;
    background: yellow;
}
& .admin-container{
    border-radius: 50%;
    margin-right:20px;
    margin-top:10px;
    & img{
        border-radius: 50%;
    }
}

`

const HeaderBar = ({children})=>{
    return <HeaderBarStyle>
        {children}
    </HeaderBarStyle>
}

export default HeaderBar