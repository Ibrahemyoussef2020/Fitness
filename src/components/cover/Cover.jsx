import  Wallpaper  from './CoverStyle'
import NavBar from '../navBar'
import Header from '../header'

const Cover = () => {
  return (
    <Wallpaper>
        <section className='cover-img'>
          <img src="images/cover.jpeg" alt="Fitness" className="full-size"/>
        </section>

        <section className=' cover-layout'>
          <Header />
        </section> 
        <NavBar/>
    </Wallpaper>
  )
}

export default Cover