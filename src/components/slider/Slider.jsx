import { useNavigate } from 'react-router'
import './Slider.css' 

const Slider = () => {
  const navigate = useNavigate()

  return (
<>
<section className="awesome hp">
    <h1 className="curve-font">Our Awesome Cousres</h1>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    </p>
  </section>  

<section className="img-slide container-fluid">
  <div className="img-container">

  <div className="img-window">
      <section className="figure relative">
          <div className="img-figure img absolute">
            <img className="img" src="images/slider/slider_2.jpg" />
          </div>

          <article className="layout img absolute flex center j-center">
            <div className="layout-img" >
                <img src="images/icons/white-dumbbell-bg-pan-gym.png" />                     
            </div>

            <h1 className="no-margin">Course</h1>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
            </p>
        </article>
      </section>
      <section className="figcaption">
        <p>
          Photo by Cats Coming from Pexels.
        </p>
      </section>
    </div>

    <div className="img-window">
      <section className="figure relative">
          <div className="img-figure img absolute">
            <img className="img" src="images/slider/slider_6.jpg" />
          </div>

          <article className="layout img absolute flex center j-center">
            <div className="layout-img" >
                <img src="images/icons/white-dumbbell-bg-pan-gym.png" />                     
            </div>

            <h1>Course</h1>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
            </p>
        </article>
      </section>
      <section className="figcaption">
        <p>
          Photo by Cats Coming from Pexels.
        </p>
      </section>
    </div>
    <div className="img-window">
      <section className="figure relative">
          <div className="img-figure img absolute">
            <img className="img" src="images/slider/slider_4.jpg" /> 
          </div>

          <article className="layout img absolute flex center j-center">
            <div className="layout-img">
                <img src="images/icons/white-dumbbell-bg-pan-gym.png" />                     
            </div>

            <h1 className="no-margin">Course</h1>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
            </p>
        </article>
      </section>
      <section className="figcaption">
        <p>
          Photo by Cats Coming from Pexels.
        </p>
      </section>
    </div>

    <div className="img-window">
      <section className="figure relative">
          <div className="img-figure img absolute">
            <img className="img" src="images/slider/slider_5.jpg" />
          </div>

          <article className="layout img absolute flex center j-center">
            <div className="layout-img">
                <img src="images/icons/white-dumbbell-bg-pan-gym.png" />                     
            </div>

            <h1 className="no-margin">Course</h1>

            <p>
               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
            </p>
        </article>
      </section>
      <section className="figcaption">
        <p>
          Photo by Cats Coming from Pexels.
        </p>
      </section>
    </div>

    <div className="img-window">
      <section className="figure relative">
          <div className="img-figure img absolute">
            <img className="img" src="images/slider/slider_1.jpg" />
          </div>

          <article className="layout img absolute flex center j-center">
            <div className="layout-img">
                <img src="images/icons/white-dumbbell-bg-pan-gym.png" />                     
            </div>

            <h1 className="no-margin">Course</h1>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
            </p>
        </article>
      </section>
      <section className="figcaption">
        <p>
          Photo by Cats Coming from Pexels.
        </p>
      </section>
    </div>

    <div className="img-window">
      <section className="figure relative">
          <div className="img-figure img absolute">
            <img className="img" src="images/slider/slider_7.jpg" />
          </div>

          <article className="layout img absolute flex center j-center">
            <div className="layout-img">
                <img src="images/icons/white-dumbbell-bg-pan-gym.png" />                     
            </div>

            <h1 className="no-margin">Course</h1>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
            </p>
        </article>
      </section>
      <section className="figcaption">
        <p>
          Photo by Cats Coming from Pexels.
        </p>
      </section>
    </div>

    <div className="img-window">
      <section className="figure relative">
          <div className="img-figure img absolute">
            <img className="img" src="images/slider/slider_2.jpg" />
          </div>

          <article className="layout img absolute flex center j-center">
            <div className="layout-img">
                <img src="images/icons/white-dumbbell-bg-pan-gym.png" />                     
            </div>

            <h1 className="no-margin">Course</h1>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
            </p>
        </article>
      </section>
      <section className="figcaption">
        <p>
          Photo by Cats Coming from Pexels.
        </p>
      </section>
    </div>

    <div className="img-window">
      <section className="figure relative">
          <div className="img-figure img absolute">
            <img className="img" src="images/slider/slider_3.jpg" />
          </div>

          <article className="layout img absolute flex center j-center">
              <div className="layout-img">
                  <img src="images/icons/white-dumbbell-bg-pan-gym.png" />                     
              </div>

              <h1 className="no-margin">Course</h1>

              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
              </p>
          </article>
      </section>
      <section className="figcaption">
        <p>
          Photo by Cats Coming from Pexels.
        </p>
      </section>
    </div>

  </div>
  <div className="figure-footer center">
    <button className="custom-button btn full-rounded bold fff" onClick={()=>navigate('classes')}>show me more</button>
  </div>  
</section>

<section className="awesome hp">
    <h1 className="curve-font">Check Our Clients and Cousres</h1>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    </p>
  </section>

  <div className="figure-footer center">
    <button className="custom-button btn full-rounded bold fff" onClick={()=>navigate('clients')}>show me clients</button>
  </div>    
</>
  )
}

export default Slider