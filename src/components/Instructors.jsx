import star from "../assets/Group 5.jpg";
import img from "../assets/Frame 1000001063.png";
import img2 from "../assets/Frame 1000001064.png";
import img3 from "../assets/Frame 1000001065.png";
import img4 from "../assets/Frame 1000001066.png";
import img5 from "../assets/Frame 1000001067.png";

const Instructors = () => {
  return (
    <div>
      <span><img src={star} alt="" /></span>
      <h2>Gain knowledge from <span>expert instructors</span><br /> at your own pace, anytime and anywhere</h2>
      <p>Unlock your potential with our engaging e-learning platform. Access high quality courses <br />anytime, anywhere and acheive your personal and professional goals with ease.</p>
      <span><img src={star} alt="" /></span>
      <button>Start Learning</button>

      <div>
        <div><img src={img} alt="" /></div>
        <div><img src={img2} alt="" /></div>
        <div><img src={img3} alt="" /></div>
        <div><img src={img4} alt="" /></div>
        <div><img src={img5} alt="" /></div>
      </div>

      <div>

      </div>
    </div>
  )
}

export default Instructors
