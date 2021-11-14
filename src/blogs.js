import Navbar from './_content/main/navbar'
import Footer from './_content/main/footer'
import imgone from "./_img/p4_img/1.jpg"
import './_css/Blogs.css'
import { useEffect } from 'react'



function Blogs() {

  useEffect(() => {

    window.addEventListener("resize", () => {
      if(window.innerWidth < 300) {
        document.body.style.background = "blue";
      }
    })
  
  }, [])
 
  return (
    <>
      <Navbar />
        <div className="container">
          <section className="b_section">
          <div className="contents">
            <p className="b_title">Contents</p>  
            <ul className="content_list">
              <li>Everybody Loves Raymond</li>
              <li>Friends</li>
              <li>Frasier</li>
              <li>Two &amp; A Half Men</li>
              </ul>
          </div>
        </section>

        <section className="b_section">
          <div className="b_title">
            Everybody Loves Raymond
          <div></div>
          </div>
          <img src={imgone} width="80%" alt="img"/>

          <p className="b_content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          <br/><br/>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          <br/><br/>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          <br/><br/>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          
            <br/><br/>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia delectus quae deleniti, magni eum sapiente non explicabo obcaecati odio. Reiciendis.
        </p>
      </section>
          </div>

      <Footer />

     </>
  );
}

export default Blogs;
