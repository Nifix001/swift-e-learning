import img from "../assets/Self.png"
import img2 from "../assets/Incubator.png"
import img3 from "../assets/Personal.png"

const Pricing = () => {
  return (
    <div>
        <h2><span className="span">Our Pricing</span></h2>  
        <p>Choose betweeen pre-recorded courses or interactive classes led <br />by an instructor in real time.</p>
        <div>
            <div>
                <img src={img} alt="" />
                <h3>Self-Paced Courses</h3>
                <h3><span className="span">$14.99 /month</span></h3>
                <p>Access all Recorded courses</p>
                <p>Certification</p>
                <button>Explore courses</button>
            </div>
            <div>
                <img src={img2} alt="" />
                <h3>Incubator Program</h3>
                <h3><span className="span">$149.99 /program</span></h3>
                <p>5-7 months intensive training</p>
                <p>Skill-to-job progrm</p>
                <p>3 months internship placement</p>
                <button>Explore courses</button>
            </div>
            <div>
                <img src={img3} alt="" />
                <h3>Personal Coaching</h3>
                <h3><span className="span">$249.99 /cohort</span></h3>
                <p>1:1 coaching</p>
                <p>Decide what to learn with the instructor</p>
                <p>Flexible class time</p>
                <button>Explore courses</button>
            </div>
        </div>
    </div>
  )
}

export default Pricing
