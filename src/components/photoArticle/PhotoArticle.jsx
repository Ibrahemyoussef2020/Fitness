import {
PhotoArticleSection,
Title,
Article,
ImgContainer
} from "./PhotoArticleStyle"

const PhotoArticle = (props) => {
  return (
    <PhotoArticleSection direction={props.section.direction}>
        <Article>
          <Title>{props.section.title}</Title>
          <p>{props.section.description}</p>
        </Article>
        <ImgContainer>
          <img src={props.section.img} alt={props.section.title}/>
        </ImgContainer>
    </PhotoArticleSection>
  )
}

export default PhotoArticle