import img from "../assets/IMAGE.png";
import img1 from "../assets/IMAGE(1).png";
import img2 from "../assets/IMAGE(2).png";
import img3 from "../assets/IMAGE(3).png";

const Instructors = () => {
  return (
    <div>
      <h2><span className="span">Meet our Instructors</span></h2>
      <p>Benefiting from the expertise of the most accomplished professionals in the field</p>
      <div>
        <div>
            <img src={img} alt="" />
            <h5></h5>
            <p></p>
        </div>
        <div>
            <img src={img1} alt="" />
            <h5></h5>
            <p></p>
        </div>
        <div>
            <img src={img2} alt="" />
            <h5></h5>
            <p></p>
        </div>
        <div>
            <img src={img3} alt="" />
            <h5></h5>
            <p></p>
        </div>
      </div>
    </div>
  )
}

export default Instructors
