import { styled } from "styled-components";


/*        Title            */

const TitleStyle = styled.h2`
font-size: var(--another-title-font);
font-family: var(--font-family-logo);
font-style:italic;
font-weight:900;
color:#4354d0;
line-height:3.2rem;
`

export const Title = ({children})=>{
    return <TitleStyle>
        {children}
    </TitleStyle>
}

/*          Article            */

const ArticleStyle = styled.article`
flex:1;
padding-left:1rem;
`
export const Article = ({children})=>{
    return <ArticleStyle>
        {children}
    </ArticleStyle>
}

/*           ImgContainer         */

const ImgContainerStyle = styled.article`
flex:1;
padding:10px;
font-family: var(--font-family-logo);
font-weight:600;
font-style:italic;
& img{
    width:100%;
    height:250px;
}
`
export const ImgContainer = ({children})=>{
    return <ImgContainerStyle>
        {children}
    </ImgContainerStyle>
}

/*         PhotoArticleStyle            */


const PhotoArticleStyle = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
margin-top:2rem;
padding:10px;
font-style:italic;
line-height:2.5rem;

& > *{
    min-width:320px
}
`

export const PhotoArticleSection = (props)=>{
    return <PhotoArticleStyle style={{flexDirection:props.direction}}>
        {props.children}
    </PhotoArticleStyle>
}



/*
we should create Title Img , Article here !
*/