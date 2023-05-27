import { Fragment } from 'react'
import Cover from '../../components/cover'
import Slider from '../../components/slider'
import {sections} from '../../staticData/sections'
import PhotoArticle from '../../components/photoArticle'
import Men from '../../components/men'
import FirstSection from '../../components/firtSection/FirstSection'
import Footer from '../../components/footer'
const HomeBody = () => {
  return <>
  <FirstSection/>
  <Men/>
  <section className="awesome hp">
    <h1 className="curve-font">OR Have your devices weightlifting</h1>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    </p>
  </section> 
  {sections.map(section => <div key={section.id} style={{paddingLeft:'.5rem'}}>
      <PhotoArticle section={section} /> 
    </div>) }
    <Slider/>
    <Footer/>
  </>
}

export default HomeBody