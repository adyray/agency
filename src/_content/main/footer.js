import '../../_css/Footer.css'
import React from 'react'
import facebook from '../../_img/face.png'
import insta from '../../_img/insta.png'
import twitter from '../../_img/twitter.png'
import li from '../../_img/li.png'
import logo_bw from '../../_img/logo-bw.png'

function footer() {
  return (
    <>
     <div className="footerContainer">
     <div className="footerContent">
       <h1 className="left-f-title flashyTitles">Site Navigation</h1>
      <ul className="left">
        <li>
          Careers
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
        <a href="/work">Work</a>
        </li>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
        <ul className="socialLogos">
          <li>
          <img src={facebook} width="30px" alt="img"/>
          </li>
          <li>
          <a href="https://instagram.com/3GOWW">
          <img src={insta} width="30px" alt="img"/>
          </a>
          </li>
          <li>
          <a href="https://twitter.com/3GOWW">
            <img src={twitter} width="30px" alt="img"/>
          </a>
          </li>
          <li>
          <img src={li} width="60px" alt="img"/>
          </li>
        </ul>
        </li>
        </ul>
        
      </div>
      <img src={logo_bw} width="50px" alt="img"/>
      <br/>
      <p style={{color:"white"}}> &copy; 2021 EGO Worldwide </p>
     </div>
    </>

  )
}

export default footer;