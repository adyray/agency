import '../../_css/Work.css'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

function Work(info) {
  
  // const [image, setImage] = useState(0)

useEffect(() => {
  let sections = gsap.utils.toArray(".panel");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container_workpage",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3500"
    }
  });
}, [])
  
 

   

  return (
    <div>
      <p className="scrolltoslide"><span>&darr;</span><br/>scroll to slide</p>
      <div className="container_workpage">

      <h1 className="projectTitle">{info.image.title}</h1>

    <ul className="preview">

    {/* {prev} */}

      <li className="sliderWrap">

      <div className="slider">
      <section className="panel">
      <img src={info.image.one.blob} alt={info.image.one.title}/>
      </section>

  <section className="panel">
  <img src={info.image.two.blob} alt={info.image.two.title}/>
  </section>

  <section className="panel">
  <img src={info.image.three.blob} alt={info.image.three.title}/>
  </section>

  <section className="panel">
  <img src={info.image.four.blob} alt={info.image.four.title}/>
  </section>

  <section className="panel">
  <img src={info.image.five.blob} alt={info.image.five.title}/>
  </section>

  <section className="panel">
  <img src={info.image.six.blob} alt={info.image.six.title}/>
  </section>

  </div>
  
      </li>

      </ul>
      <p className="img_desc">
      {info.image.title}<br/><br/>
      {info.image.description}
      </p>

      </div>

      

      </div>

  )
}

export default Work;