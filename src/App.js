import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import Testimonial from "./components/testimonial";
import reviews from "./data.js";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [target, setTarget] = useState(1);
  const [singleReview, setSingleReview] = useState(() =>
    reviews.find((item) => item.id === 1)
  );

  useEffect(() => {
    const found = reviews.find((item) => item.id === target);
    if (found) setSingleReview(found);
  }, [target]);

  function genrandom() {
    return Math.floor(Math.random() * 5) + 1;
  }

  function clickHandlerRight() {
    setTarget((target % 5) + 1);
  }
  function clickHandlerLeft() {
    setTarget(((target + 3) % 5) + 1);
  }

  function clickHandlerRandom() {
    setTarget(genrandom());
  }

  return (
    <div className="App d-flex flex-column justify-content-center align-items-ceter">
      <h3 className="heading">Our Testimonials</h3>
      <div></div>
      <div className="d-flex justify-content-center align-items-center">
        {
          <Testimonial
            clickHandlerRandom={clickHandlerRandom}
            clickHandlerRight={clickHandlerRight}
            clickHandlerLeft={clickHandlerLeft}
            review={singleReview}
          >
            {" "}
          </Testimonial>
        }
      </div>
    </div>
  );
}

export default App;
