import '../../_css/Work.css'
import React from 'react'
import { useState } from 'react'
import firstImage from "../../_img/icon.jpg"
import secondImage from "../../_img/ux.jpg"

function Work() {

  const [changeImage, setImage] = useState(false)

  const inc = (e) => {
    setImage(!e)
  }



  return (
    <div className="main_container">
      <button onClick={() => inc(changeImage)}>
        change image
      </button>

      <img src={(changeImage) ? firstImage : secondImage} width="200px" alt="image"/>
    </div>

  )
}

export default Work;