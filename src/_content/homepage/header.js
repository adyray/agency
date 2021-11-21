import '../../_css/Header.css'
import React from 'react'
import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin';
import { useEffect } from 'react';

gsap.registerPlugin(TextPlugin);

function Header() {

  const h1 = "The Ultimate Design Challenge.";
  const h2 = "Design Language.";
  const h3 = "Multiplatform Advertising";
  const h4 = "Consulting Best Practice";
  const empty = "";


  useEffect(() => {

    // document.addEventListener("DOMContentLoaded", () => {
      const hlz = document.querySelector(".headline")
      const tl = gsap.timeline({repeat: -1});
  
      tl.to(hlz, 0, {text:empty, y:-10, opacity:0})
      tl.to(hlz, 2, {opacity:1, y:0, text:h1, ease:"none"})
      tl.to(hlz, 1, {opacity:0, y:10, delay:3})
      tl.to(hlz, 0, {text:empty, y:-10})
      tl.to(hlz, 2, {opacity:1, y:0, text:h2, ease:"none"})
      tl.to(hlz, 1, {opacity:0, y:10, delay:3})
      tl.to(hlz, 0, {text:empty, y:-10})
      tl.to(hlz, 2, {opacity:1, y:0, text:h3, ease:"none"})
      tl.to(hlz, 1, {opacity:0, y:10, delay:3})
      tl.to(hlz, 0, {text:empty, y:-10})
      tl.to(hlz, 2, {opacity:1, y:0, text:h4, ease:"none"})
      tl.to(hlz, 1, {opacity:0, y:10, delay:3})
      tl.to(hlz, 0, {text:empty, y:-10})
    // })

  }, [])
  
  


  return (
    <div className="header">
    <div className="headline"></div>
    </div>
  )
  
}





export default Header;