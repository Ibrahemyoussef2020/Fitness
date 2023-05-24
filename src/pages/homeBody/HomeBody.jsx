import { Fragment } from 'react'
import Cover from '../../components/cover'
import {sections} from '../../staticData/sections'
import PhotoArticle from '../../components/photoArticle'

const HomeBody = () => {
  return <>
  {sections.map(section => <div key={section.id} style={{paddingLeft:'.5rem'}}>
      <PhotoArticle section={section} /> 
    </div>) } 
  </>
}

export default HomeBody