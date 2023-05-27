import { styled} from "styled-components";

const ListButtonStyle = styled.button`
position: absolute;
top:-60px;
right:20px;
border:none;
out-line:none;
background:transparent;
z-index: 10;

& img{
    width:40px !important;
    height:40px !important;
}
`

const ListButton = ({ handleToggle})=>{
    return <>
    <ListButtonStyle onClick={handleToggle} >
        <img src="images/icons/white-brown-list-icon.png" alt='list'/>
    </ListButtonStyle>
    </>
}

export default ListButton