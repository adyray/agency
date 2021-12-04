import { useState, useEffect } from 'react'
import Navbar from './_content/main/navbar'
import Footer from './_content/main/footer'
import ProjectTemplate from './_content/projects/projectTemplate'
import './_css/Work.css'

//project one
import React from 'react'

// import p2_1 from './_img/p2_img/1.jpg'
// import p2_2 from './_img/p2_img/2.jpg'
// import p2_3 from './_img/p2_img/3.jpg'
// import p2_4 from './_img/p2_img/4.jpg'
// import p2_5 from './_img/p2_img/5.jpg'
// import p2_6 from './_img/p2_img/6.jpg'


// import p3_1 from './_img/p3_img/1.jpg'
// import p3_2 from './_img/p3_img/2.jpg'
// import p3_3 from './_img/p3_img/3.png'
// import p3_4 from './_img/p3_img/4.png'
// import p3_5 from './_img/p3_img/5.jpg'
// import p3_6 from './_img/p3_img/6.jpg'

import cs from './_img/comingsoon.gif'

import gsap from 'gsap/all'

function Work() {

  const [proj, setProj] = useState(false)
  const activateThis = (e, n) => {
    const panel = document.getElementsByClassName("flashyTitles")[n].offsetTop
    gsap.to(window, 2, { scrollTo: { y: panel + 40 } })
  }

  const isElementOutViewport = (el) => {
    var rect = el.getBoundingClientRect();
    return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
  }

  const checkSelectorInView = (n) => {
    const panel = document.getElementsByClassName("panel")[n]
    let select = document.getElementsByClassName("selector")
    window.addEventListener("scroll", () => {
      if (isElementOutViewport(panel)) {
        if (typeof select[n] !== "undefined") {
        select[n].classList.remove("active")
        }
      } else {
        if (typeof select[n] !== "undefined") {
          console.log()
          select[n].classList.add("active")
        }
      }
    })
  }


  useEffect(() => {
    const panelSelector = document.querySelectorAll(".panel")
    const bool = (panelSelector.length > 0) ? true : false

    if (bool) {
      checkSelectorInView(0)
      checkSelectorInView(1)
      checkSelectorInView(2)
      checkSelectorInView(3)
      checkSelectorInView(4)
      checkSelectorInView(5)
    }

  })


  const openMenu = (val) => {
    const ps = document.querySelector(".project_sidebar")
    if (val) {
      setProj(!val)
      gsap.to(ps, 1, { left: "0%", height: "90vh" })
    } else {
      setProj(!val)
      gsap.to(ps, 1, { left: "-92vw", height: "300px" })
    }

  }

  return (
    <>
      <Navbar /><br />
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
            <p className="scrolltoslide"><span>&darr;</span><br />scroll to view</p>


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
                    image1={cs}
                    image2={cs}
                    image3={cs}
                    image4={cs}
                    image5={cs}
                    image6={cs}
                  />

                  <ProjectTemplate
                    title={"Project 2"}
                    image1={cs}
                    image2={cs}
                    image3={cs}
                    image4={cs}
                    image5={cs}
                    image6={cs}
                  />

                  <ProjectTemplate
                    title={"Project 3"}
                    image1={cs}
                    image2={cs}
                    image3={cs}
                    image4={cs}
                    image5={cs}
                    image6={cs}
                  />

                  <ProjectTemplate
                    title={"Project 4"}
                    image1={cs}
                    image2={cs}
                    image3={cs}
                    image4={cs}
                    image5={cs}
                    image6={cs}
                  />

                  <ProjectTemplate
                    title={"Project 5"}
                    image1={cs}
                    image2={cs}
                    image3={cs}
                    image4={cs}
                    image5={cs}
                    image6={cs}
                  />

                  <ProjectTemplate
                    title={"Project 6"}
                    image1={cs}
                    image2={cs}
                    image3={cs}
                    image4={cs}
                    image5={cs}
                    image6={cs}
                  />


                </div>

              </li>
            </ul>


          </div>
        </div>


      </div>
      <Footer />
    </>
  );
}

export default Work;
