import Navbar from './_content/main/navbar'
import Footer from './_content/main/footer'
import PT from './_content/projects/projectTemplate'
import './_css/Work.css'
import { useState } from 'react'
// import { useState } from 'react'

//project one
import p1_one from './_img/2.jpg'
import p1_two from './_img/1.jpg'
import p1_three from './_img/3.jpg'
import p1_four from './_img/4.jpg'
import p1_five from './_img/5.jpg'
import p1_six from './_img/6.jpg'

import p2_one from './_img/p2_img/1.jpg'
import p2_two from './_img/p2_img/2.jpg'
import p2_three from './_img/p2_img/3.jpg'
import p2_four from './_img/p2_img//4.jpg'
import p2_five from './_img/p2_img//5.jpg'
import p2_six from './_img/p2_img/6.jpg'

import p3_one from './_img/p3_img/1.jpg'
import p3_two from './_img/p3_img/2.jpg'
import p3_three from './_img/p3_img/3.png'
import p3_four from './_img/p3_img//4.png'
import p3_five from './_img/p3_img//5.jpg'
import p3_six from './_img/p3_img/6.jpg'


function Work() {
  const [status, setStatus] = useState(0)


  
  const projectSwitcher = (number) => {

      
    switch(number) {
      case number = 0 :
  
        return(
          <PT image={{
            activate: 0,
            title: "The New Wave of Science",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quo veniam totam. Numquam, aperiam! Corrupti accusantium quia delectus reiciendis ipsam.",
            one: { blob:p1_one},
            two: { blob:p1_two},
            three: { blob:p1_three},
            four: { blob:p1_four},
            five: { blob:p1_five},
            six: { blob: p1_six,}
          }}/>
          )
      case number = 1 :
        return(
        <PT image={{
          activate: 0,
          title: "The Grand Tour",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quo veniam totam. Numquam, aperiam! Corrupti accusantium quia delectus reiciendis ipsam.",
          one: { blob:p2_one},
          two: { blob:p2_two},
          three: { blob:p2_three},
          four: { blob:p2_four},
          five: { blob:p2_five},
          six: { blob: p2_six}
        }}/>
        )
      case number = 2 :
        return(
        <PT image={{
          activate: 0,
          title: "Our Man in Japan",
          one: { blob:p3_one, title: "Our Man in Japan", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quo veniam totam. Numquam, aperiam! Corrupti accusantium quia delectus reiciendis ipsam."},
          two: { blob:p3_two, title: "two", description: "test2"},
          three: { blob:p3_three, title: "three", description: "test3"},
          four: { blob:p3_four, title: "four", description: "test4"},
          five: { blob:p3_five, title: "five", description: "test5"},
          six: { blob: p3_six, title: "six", description: "test6"}
        }}/>
        )
        case number = 3 :
          return(
          <PT image={{
            activate: 0,
            title: "Everybody Loves Raymond",
            one: { blob:p1_one, title: "Everybody Loves Raymond", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quo veniam totam. Numquam, aperiam! Corrupti accusantium quia delectus reiciendis ipsam."},
            two: { blob:p1_two, title: "two", description: "test2"},
            three: { blob:p1_three, title: "three", description: "test3"},
            four: { blob:p1_four, title: "four", description: "test4"},
            five: { blob:p1_five, title: "five", description: "test5"},
            six: { blob: p1_six, title: "six", description: "test6"}
          }}/>
        )
        case number = 4 :
          return(
          <PT image={{
            activate: 0,
            title: "Removals",
            one: { blob:p1_one, title: "Removals", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quo veniam totam. Numquam, aperiam! Corrupti accusantium quia delectus reiciendis ipsam." },
            two: { blob:p1_two, title: "two", description: "test2"},
            three: { blob:p1_three, title: "three", description: "test3"},
            four: { blob:p1_four, title: "four", description: "test4"},
            five: { blob:p1_five, title: "five", description: "test5"},
            six: { blob: p1_six, title: "six", description: "test6"}
          }}/>
        )
          case number = 5 :
            return(
          <PT image={{
              activate: 0,
              title: "Six out of 10 cats",
              one: { blob:p1_one, title: "Six out of 10 cats", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quo veniam totam. Numquam, aperiam! Corrupti accusantium quia delectus reiciendis ipsam." },
              two: { blob:p1_two, title: "two", description: "test2" },
              three: { blob:p1_three, title: "three", description: "test3" },
              four: { blob:p1_four, title: "four", description: "test4" },
              five: { blob:p1_five, title: "five", description: "test5" },
              six: { blob: p1_six, title: "six", description: "test6" }
            }}/>
            )
      default : console.log("first Project");
    }
  
  }

  const activateThis = (e, n) => {
    const selectFirst = document.querySelector(".active")
    if(selectFirst !== null){
      selectFirst.classList.remove("active");
    }
    console.log(e, "this works")
    setStatus(n)
    
  }

  return (
    <>
    
      <Navbar />
      
      <div className="project_sidebar">
      <p>Project Menu</p>
      <ul>
        <li onClick={(e) => activateThis(e, 0)}>
          The New wave of science
        </li>
        <li onClick={(e) => activateThis(e, 1)}>
          The grand Tour
        </li>
        <li onClick={(e) => activateThis(e, 2)}>
          Amazon's Man in Japan
        </li>
      </ul>
      <ul>
        <li onClick={(e) => activateThis(e, 3)}>
          Everbody Loves Raymond
        </li>
        <li onClick={(e) => activateThis(e, 4)}>
          Removals
        </li>
        <li onClick={(e) => activateThis(e, 5)}>
          Six out of 10 cats
        </li>
      </ul>

    </div>

      {projectSwitcher(status)}
      
      <Footer />
     </>
  );
}

export default Work;
