import '../../_css/Navbar.css'
import ego from '../../_img/logo-bw.png'
import { gsap } from "gsap";
import { Link, Redirect} from "react-router-dom"
import { useState, useRef } from "react"
import emailjs from "emailjs-com"



function Navbar() {
  const [on, setOn] = useState(true)
  const [sick, setSickmade] = useState(true)
  const [success, setSuccess] = useState(null)
window.addEventListener("scroll", () => {

  const logo = document.querySelector(".egoLogo")

  if(window.scrollY){
    gsap.to(logo, .3, {width:25})
  }else{
    gsap.to(logo, .3, {width:50})
  }

})

const menu = (oppo) => {
  const open = document.querySelector(".openMenu")
  if(oppo){
    setOn(false)
  open.style.display = "block"
  }else{
    setOn(true)
  open.style.display = "none"
  }
}


const toggleContact = (val) => {
  const vision = document.querySelector(".getInTouch_container")

  if(val){
    vision.style.display = "flex"
    setSickmade(!val)
  }else{
    const a = document.querySelector(".getInTouch_container")
    vision.style.display = "none"
    setSickmade(!val)
  }

}


const formC = useRef();

  const submitForm = (e) => {
      e.preventDefault();
    emailjs.sendForm(`service_xzl7zcc`, "template_0xo631r", formC.current, `user_oc3vLm5WZykIUMPy6jcxc`)
    .then(() => {
        setSuccess(true)
    }, () => {
        setSuccess(false)
    });
  
}

  return (
    <>
    <div className="nb">
      <div className="logo-main">
      <Link to="/">
      <img className="egoLogo" width="50px" src={ego} alt="ego-logo" />
      </Link>
        
        </div>

      <ul className="nb_li"> 
      <li onClick={() => toggleContact(sick)}className="cta_contact">Get in touch</li> 
      <Link to="/blogs">
      <li>Blogs</li> 
      </Link>
      <Link to="/work">
      <li>Work</li> 
      </Link>
      <Link to="/about">
      <li >About</li>
      </Link>
      <Link to="/">
      <li className="logoText"><button>EGO Worldwide</button></li>
      </Link>
      </ul>

      <div onClick={() => menu(on)} className="menu">
      <div></div>
      <div></div>
      <div></div>
      </div>
    </div>


    <div className="openMenu">
      <ul>
      <li onClick={() => toggleContact(sick)}>Get in touch</li> 
      <Link to="/blogs">
      <li>Blogs</li> 
      </Link>
      <Link to="/work">
      <li>Work</li> 
      </Link>
      <Link to="/about">
      <li >About</li>
      </Link>
      <Link to="/">
      <li className="logoText"><button>EGO Worldwide</button></li>
      </Link>
        </ul>
    </div>


    <div className="getInTouch_container">
          <div className="getInTouch">
            <span onClick={() => toggleContact(sick)}>Close</span>

             {
               (success === null) ? 
               <>
             <p>Get In Touch</p>
               <form className="contact_form" action="#" ref={formC} onSubmit={submitForm}>
             <label>Name</label>
             <input name="from_name" type="text" placeholder="name" required></input>
             <label>Email</label>
             <input name="email" type="email" placeholder="email" required></input>
             <label>Business</label>
             <input name="business" type="business" placeholder="business (optional)"></input>
             <label>Message</label>
             <textarea name="message" placeholder="Type a message" min="10" maxLength="150" required></textarea>
             <button>Send</button>
            </form>
            </>
            : (success) ? "Thanks for your message" : "Oops there's been a problem"
             } 
          </div>
      </div>
    </>

  );
}

export default Navbar;
