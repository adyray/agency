import Navbar from './_content/main/navbar'
import React from 'react'
import Footer from './_content/main/footer'
import imgone from "./_img/p4_img/1.jpg"
import imgtwo from "./_img/p3_img/2.jpg"
import './_css/Blogs.css'
import { useState, useEffect } from 'react'



function Blogs() {

  const [template, setTemplate] = useState(0)

  useEffect(() => {

    window.addEventListener("resize", () => {
      if(window.innerWidth < 300) {
        document.body.style.background = "blue";
      }
    })
  
  }, [])
  


  const templateType = (n,) => {
    if(n === 0){
      return (
        <section className="b_section">
          <div className="b_title">
            Everybody Loves Raymond
          <div></div>
          </div>
          <img src={imgone} width="80%" alt="img"/>
          <p className="b_content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos omnis quisquam corporis voluptate vero modi sapiente magni maxime. Sunt, ratione! Quidem officia culpa autem incidunt, iusto, optio dolores blanditiis voluptatum sapiente deleniti similique rem at labore animi molestias laudantium debitis, vitae vero ipsum. Commodi quas facere, vitae numquam possimus iste fugiat, earum rerum, sit cumque incidunt quae laborum id in. Reprehenderit dolorum perspiciatis quo hic nihil sapiente repellendus, adipisci odit maxime dolore nesciunt soluta itaque cupiditate accusamus aliquid quos eveniet mollitia. Ratione optio autem assumenda veritatis? Consectetur possimus, nesciunt, maiores similique perferendis vero ipsa doloremque porro architecto molestiae velit odit.
          <br/><br/>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit quia esse rem officia accusamus minima asperiores ipsa quod dolor, accusantium neque similique repudiandae harum a nihil dolorum repellendus tempora, reiciendis numquam illum. Consequatur, quia suscipit accusamus numquam voluptatem officia aspernatur quisquam. Et error, ut commodi nobis impedit ab ipsum quaerat placeat pariatur sequi perferendis sint a ipsam saepe assumenda esse? Accusamus repudiandae veniam fugit deleniti cum enim optio explicabo inventore, in nemo! Nobis facilis perspiciatis minima reiciendis, quas saepe a aliquid eaque deserunt amet velit corrupti, aliquam quis consequatur harum alias, voluptas ipsam debitis laborum explicabo provident? Officiis, tenetur. Dolorem provident debitis inventore? Obcaecati voluptate, sint similique aut eaque ducimus delectus nisi architecto distinctio ad qui dicta dolorem facilis optio expedita, alias numquam nihil nemo magnam facere repellat labore autem nam. Facilis optio iure explicabo, qui repellendus ut assumenda voluptate delectus id quae ex incidunt similique voluptatem distinctio quisquam saepe alias est at soluta. Nam ipsam animi consequuntur quos repudiandae corrupti harum qui, sint ratione odit, quo dolorum quisquam sequi ex quas molestias suscipit quam, officiis sed quae. Voluptate error voluptatibus sunt similique. Repudiandae similique, atque fugit, aperiam eligendi beatae eos deleniti iste totam ad, saepe nostrum tempora eveniet.
          </p>
      </section>
      )
    }else if(n === 1){
      return (
      <section className="b_section">
      <div className="b_title">
        Friends
      <div></div>
      </div>
      <img src={imgtwo} width="80%" alt="img"/>
      <p className="b_content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos omnis quisquam corporis voluptate vero modi sapiente magni maxime. Sunt, ratione! Quidem officia culpa autem incidunt, iusto, optio dolores blanditiis voluptatum sapiente deleniti similique rem at labore animi molestias laudantium debitis, vitae vero ipsum. Commodi quas facere, vitae numquam possimus iste fugiat, earum rerum, sit cumque incidunt quae laborum id in. Reprehenderit dolorum perspiciatis quo hic nihil sapiente repellendus, adipisci odit maxime dolore nesciunt soluta itaque cupiditate accusamus aliquid quos eveniet mollitia. Ratione optio autem assumenda veritatis? Consectetur possimus, nesciunt, maiores similique perferendis vero ipsa doloremque porro architecto molestiae velit odit.
      <br/><br/>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit quia esse rem officia accusamus minima asperiores ipsa quod dolor, accusantium neque similique repudiandae harum a nihil dolorum repellendus tempora, reiciendis numquam illum. Consequatur, quia suscipit accusamus numquam voluptatem officia aspernatur quisquam. Et error, ut commodi nobis impedit ab ipsum quaerat placeat pariatur sequi perferendis sint a ipsam saepe assumenda esse? Accusamus repudiandae veniam fugit deleniti cum enim optio explicabo inventore, in nemo! Nobis facilis perspiciatis minima reiciendis, quas saepe a aliquid eaque deserunt amet velit corrupti, aliquam quis consequatur harum alias, voluptas ipsam debitis laborum explicabo provident? Officiis, tenetur. Dolorem provident debitis inventore? Obcaecati voluptate, sint similique aut eaque ducimus delectus nisi architecto distinctio ad qui dicta dolorem facilis optio expedita, alias numquam nihil nemo magnam facere repellat labore autem nam. Facilis optio iure explicabo, qui repellendus ut assumenda voluptate delectus id quae ex incidunt similique voluptatem distinctio quisquam saepe alias est at soluta. Nam ipsam animi consequuntur quos repudiandae corrupti harum qui, sint ratione odit, quo dolorum quisquam sequi ex quas molestias suscipit quam, officiis sed quae. Voluptate error voluptatibus sunt similique. Repudiandae similique, atque fugit, aperiam eligendi beatae eos deleniti iste totam ad, saepe nostrum tempora eveniet.
      </p>
  </section>
  )
    }else if(n === 2){
      return (
      <section className="b_section">
      <div className="b_title">
        Frasier
      <div></div>
      </div>
      <img src={imgtwo} width="80%" alt="img"/>
      <p className="b_content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos omnis quisquam corporis voluptate vero modi sapiente magni maxime. Sunt, ratione! Quidem officia culpa autem incidunt, iusto, optio dolores blanditiis voluptatum sapiente deleniti similique rem at labore animi molestias laudantium debitis, vitae vero ipsum. Commodi quas facere, vitae numquam possimus iste fugiat, earum rerum, sit cumque incidunt quae laborum id in. Reprehenderit dolorum perspiciatis quo hic nihil sapiente repellendus, adipisci odit maxime dolore nesciunt soluta itaque cupiditate accusamus aliquid quos eveniet mollitia. Ratione optio autem assumenda veritatis? Consectetur possimus, nesciunt, maiores similique perferendis vero ipsa doloremque porro architecto molestiae velit odit.
      <br/><br/>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit quia esse rem officia accusamus minima asperiores ipsa quod dolor, accusantium neque similique repudiandae harum a nihil dolorum repellendus tempora, reiciendis numquam illum. Consequatur, quia suscipit accusamus numquam voluptatem officia aspernatur quisquam. Et error, ut commodi nobis impedit ab ipsum quaerat placeat pariatur sequi perferendis sint a ipsam saepe assumenda esse? Accusamus repudiandae veniam fugit deleniti cum enim optio explicabo inventore, in nemo! Nobis facilis perspiciatis minima reiciendis, quas saepe a aliquid eaque deserunt amet velit corrupti, aliquam quis consequatur harum alias, voluptas ipsam debitis laborum explicabo provident? Officiis, tenetur. Dolorem provident debitis inventore? Obcaecati voluptate, sint similique aut eaque ducimus delectus nisi architecto distinctio ad qui dicta dolorem facilis optio expedita, alias numquam nihil nemo magnam facere repellat labore autem nam. Facilis optio iure explicabo, qui repellendus ut assumenda voluptate delectus id quae ex incidunt similique voluptatem distinctio quisquam saepe alias est at soluta. Nam ipsam animi consequuntur quos repudiandae corrupti harum qui, sint ratione odit, quo dolorum quisquam sequi ex quas molestias suscipit quam, officiis sed quae. Voluptate error voluptatibus sunt similique. Repudiandae similique, atque fugit, aperiam eligendi beatae eos deleniti iste totam ad, saepe nostrum tempora eveniet.
      </p>
  </section>
  )
    }else if(n === 3){
      return (
      <section className="b_section">
      <div className="b_title">
        Two &amp; a Half Men
      <div></div>
      </div>
      <img src={imgtwo} width="80%" alt="img"/>
      <p className="b_content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos omnis quisquam corporis voluptate vero modi sapiente magni maxime. Sunt, ratione! Quidem officia culpa autem incidunt, iusto, optio dolores blanditiis voluptatum sapiente deleniti similique rem at labore animi molestias laudantium debitis, vitae vero ipsum. Commodi quas facere, vitae numquam possimus iste fugiat, earum rerum, sit cumque incidunt quae laborum id in. Reprehenderit dolorum perspiciatis quo hic nihil sapiente repellendus, adipisci odit maxime dolore nesciunt soluta itaque cupiditate accusamus aliquid quos eveniet mollitia. Ratione optio autem assumenda veritatis? Consectetur possimus, nesciunt, maiores similique perferendis vero ipsa doloremque porro architecto molestiae velit odit.
      <br/><br/>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit quia esse rem officia accusamus minima asperiores ipsa quod dolor, accusantium neque similique repudiandae harum a nihil dolorum repellendus tempora, reiciendis numquam illum. Consequatur, quia suscipit accusamus numquam voluptatem officia aspernatur quisquam. Et error, ut commodi nobis impedit ab ipsum quaerat placeat pariatur sequi perferendis sint a ipsam saepe assumenda esse? Accusamus repudiandae veniam fugit deleniti cum enim optio explicabo inventore, in nemo! Nobis facilis perspiciatis minima reiciendis, quas saepe a aliquid eaque deserunt amet velit corrupti, aliquam quis consequatur harum alias, voluptas ipsam debitis laborum explicabo provident? Officiis, tenetur. Dolorem provident debitis inventore? Obcaecati voluptate, sint similique aut eaque ducimus delectus nisi architecto distinctio ad qui dicta dolorem facilis optio expedita, alias numquam nihil nemo magnam facere repellat labore autem nam. Facilis optio iure explicabo, qui repellendus ut assumenda voluptate delectus id quae ex incidunt similique voluptatem distinctio quisquam saepe alias est at soluta. Nam ipsam animi consequuntur quos repudiandae corrupti harum qui, sint ratione odit, quo dolorum quisquam sequi ex quas molestias suscipit quam, officiis sed quae. Voluptate error voluptatibus sunt similique. Repudiandae similique, atque fugit, aperiam eligendi beatae eos deleniti iste totam ad, saepe nostrum tempora eveniet.
      </p>
  </section>
  )
    }
    
  }



  

  return (
    <>
      <Navbar />
        <div className="container">
          <section className="b_section">
          <div className="contents">
            <p className="b_title">Contents</p>  
            <ul className="content_list">
              <li onClick={() => setTemplate(0)}>Everybody Loves Raymond</li>
              <li onClick={() => setTemplate(1)}>Friends</li>
              <li onClick={() => setTemplate(2)}>Frasier</li>
              <li onClick={() => setTemplate(3)}>Two &amp; A Half Men</li>
              </ul>
          </div>
        </section>
          {templateType( template, null, null, null, null, null)}

          
          {/* 
          [template type]
          [template 1]
          [title]
          [img]
          [copy1]

          [template 2]
          [title]
          [img1]
          [img2]
          [copy1]
          [copy2] 
          */}

          </div>

      <Footer />

     </>
  );
}

export default Blogs;
