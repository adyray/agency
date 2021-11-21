import { useState, useEffect, useRef} from 'react'
import Navbar from './_content/main/navbar'
import Footer from './_content/main/footer'
import ProjectTemplate from './_content/projects/projectTemplate'
import './_css/Work.css'

//project one
import React from 'react'

import p2_1 from './_img/p2_img/1.jpg'
import p2_2 from './_img/p2_img/2.jpg'
import p2_3 from './_img/p2_img/3.jpg'
import p2_4 from './_img/p2_img/4.jpg'
import p2_5 from './_img/p2_img/5.jpg'
import p2_6 from './_img/p2_img/6.jpg'


import p3_1 from './_img/p3_img/1.jpg'
import p3_2 from './_img/p3_img/2.jpg'
import p3_3 from './_img/p3_img/3.png'
import p3_4 from './_img/p3_img/4.png'
import p3_5 from './_img/p3_img/5.jpg'
import p3_6 from './_img/p3_img/6.jpg'


import gsap, { selector } from 'gsap/all'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
function Work() {

  const [status, setStatus] = useState(null)
  const [proj, setProj] = useState(false)
  const [projTitle, setProjTitle] = useState("The New wave of science")

   const activateThis = (e, n) => {
    // const selectFirst = document.querySelector(".active")
    // if(selectFirst !== null){
    //   selectFirst.classList.remove("active");
    // }

    const panel = document.getElementsByClassName("projectTitle")[n].offsetTop
    
    // setProjTitle(e.target.innerText)
    gsap.to(window, 2, {scrollTo: {y: panel + 40}})

    // e.target.classList.add("active")

    setStatus(n)
  }

  useEffect(() => {
    const isElementOutViewport = (el) => {
      var rect = el.getBoundingClientRect();
      // console.log(rect)
      return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
    }

    const checkSelectorInView = (n) => {
      const panel = document.getElementsByClassName("panel")[n]

      window.addEventListener("scroll", () => {
        if(isElementOutViewport(panel)){
          //not in view
          console.log(panel, "not view")
          document.getElementsByClassName("selector")[n].classList.remove("active")
        }else{
          console.log(panel, "in view")
          document.getElementsByClassName("selector")[n].classList.add("active")
          // name.indexOf(name.innerText)
        }
      })
    }
    checkSelectorInView(0)
    checkSelectorInView(1)
    checkSelectorInView(2)
    checkSelectorInView(3)
    checkSelectorInView(4)
    checkSelectorInView(5)
    
   
        

  }, [])


  const openMenu = (val) => {
    const ps = document.querySelector(".project_sidebar")
    if(val){
    setProj(!val)
    gsap.to(ps, 1, {left:"0%", height:"90vh"})
  }else{
    setProj(!val)
    gsap.to(ps, 1, {left:"-92vw", height:"300px"})
  }

  }

  return (
    <>
      <Navbar /><br/>
      <div className="section_layout">
        <div onClick={() => openMenu(proj)} className="project_sidebar">
          <div className="jam">
          <div className="menuText">PROJECT MENU</div>
            {/* <p>PROJECTS</p> */}
            <ul>
              <li className="selector active" onClick={(e) => activateThis(e, 0)}>
                Project 1
              </li>
              <li className="selector" onClick={(e) => activateThis(e, 1)}>
              Project 2
              </li>
              <li className="selector" onClick={(e) => activateThis(e, 2)}>
              Project 3
              </li>
            </ul>
            <ul>
              <li className="selector" onClick={(e) => activateThis(e, 3)}>
              Project 4
              </li>
              <li className="selector" onClick={(e) => activateThis(e, 4)}>
              Project 5
              </li>
              <li className="selector" onClick={(e) => activateThis(e, 5)}>
              Project 6
              </li>

            </ul>

          </div>
        </div>


        <div className="main_container">
      <div className="container_workpage">


        <ul className="preview">

          <li className="sliderWrap">

            <div className="slider">
              
              <ProjectTemplate 
              title={"Project 1"}
              image1={p2_1}
              image2={p2_2}
              image3={p2_3}
              image4={p2_4}
              image5={p2_5}
              image6={p2_6}
              />

              <ProjectTemplate 
              title={"Project 2"}
              image1={p3_1}
              image2={p3_2}
              image3={p3_3}
              image4={p3_4}
              image5={p3_5}
              image6={p3_6}
              />

              <ProjectTemplate 
              title={"Project 3"}
              image1={p3_1}
              image2={p3_2}
              image3={p3_3}
              image4={p3_4}
              image5={p3_5}
              image6={p3_6}
              />

              <ProjectTemplate 
              title={"Project 4"}
              image1={p3_1}
              image2={p3_2}
              image3={p3_3}
              image4={p3_4}
              image5={p3_5}
              image6={p3_6}
              />

            <ProjectTemplate 
              title={"Project 5"}
              image1={p3_1}
              image2={p3_2}
              image3={p3_3}
              image4={p3_4}
              image5={p3_5}
              image6={p3_6}
              />  

              <ProjectTemplate 
              title={"Project 6"}
              image1={p3_1}
              image2={p3_2}
              image3={p3_3}
              image4={p3_4}
              image5={p3_5}
              image6={p3_6}
              />

              
            </div>

          </li>
        </ul>

        <p className="scrolltoslide"><span>&darr;</span><br />scroll to slide</p>

      </div>
    </div>


      </div>
      <Footer />
    </>
  );
}

export default Work;
