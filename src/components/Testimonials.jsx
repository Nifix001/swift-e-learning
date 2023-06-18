import img from "../assets/Frame 353.png";
import img1 from "../assets/Frame 353 (1).png";
import img2 from "../assets/Frame 353 (2).png";
import img3 from "../assets/Frame 353 (3).png";
import img4 from "../assets/Frame 353 (4).png";
import img5 from "../assets/Frame 353 (5).png";
import img6 from "../assets/Frame 353 (6).png";
import img7 from "../assets/Frame 353 (7).png";

const Testimonials = () => {
  return (
    <div>
        <h2><span className="span">Testimonials</span></h2>
        <p>What they say about us</p>
        <div>
            <div>
                <div>
                    <div>
                        <img src={img} alt="" />
                        <h4>Oore Opadokun</h4>
                        <p>Student</p>
                    </div>
                    <i></i>
                </div>
                I have been using this e-learning platform for <br />a few months now and have already seen <br />significant improvement in my skills. The <br />courses are well-structured and easy to <br />follow, and the feedback from instructors is <br />invaluable.
            </div>    
        </div>      
    </div>
  )
}

export default Testimonials
