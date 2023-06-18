import img from "../assets/IMAGE.png";
import img1 from "../assets/IMAGE (1).png";
import img2 from "../assets/IMAGE (2).png";
import img3 from "../assets/IMAGE (3).png";

const Instructors = () => {
  return (
    <div>
      <h2><span className="span">Meet our Instructors</span></h2>
      <p>Benefiting from the expertise of the most accomplished professionals in the field</p>
      <div>
        <div>
            <img src={img} alt="" />
            <h3>Sobowale Goodluck</h3>
            <p>UI/UX Design Instructor</p>
        </div>
        <div>
            <img src={img1} alt="" />
            <h3>David Ogbodo</h3>
            <p>Data Analysis Instructor</p>
        </div>
        <div>
            <img src={img2} alt="" />
            <h3>Aje Success</h3>
            <p>Backend Instructor</p>
        </div>
        <div>
            <img src={img3} alt="" />
            <h3>Sumisola Adeyanju</h3>
            <p>Frontend Instructor</p>
        </div>
      </div>
    </div>
  )
}

export default Instructors
