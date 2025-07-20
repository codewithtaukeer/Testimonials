import "./testimonial.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

function Testimonial(props) {
  const review = props.review;
  return (
    <div className="box">
      <div className="image-container"></div>
      <div className="oimage-container">
        <img className="image" src={review.image} alt="Profile picture"></img>
      </div>
      <div className="name">
        <p>{review.name}</p>
      </div>
      <div className="job">
        <p>{review.job}</p>
      </div>
      <div className="icons">
        <FaQuoteLeft />
      </div>
      <div className="text">
        <p>{review.text}</p>
      </div>
      <div className="icons">
        <FaQuoteRight />
      </div>
      <div>
        <button className="scroll">
          <span onClick={props.clickHandlerLeft}>&lt;</span>
        </button>
        <button className="scroll">
          <span onClick={props.clickHandlerRight}>&gt;</span>
        </button>
      </div>
      <div>
        <button className="random" onClick={props.clickHandlerRandom}>
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
