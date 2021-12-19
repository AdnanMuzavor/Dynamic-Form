import React,{useState} from "react";
import star1 from "../Assets/star_corner.png";
import star2 from "../Assets/star_filled.png";

const Ratingcomp = ({placeholder,className}) => {
  //Rating for product
  const [defaultRating, setdefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  //Rating for Experience
  const [defaultExpRating, setdefaultExpRating] = useState(2);
  const [maxExpRating, setmaxExpRating] = useState([1, 2, 3, 4, 5]);
  //Rating for Delivery
  const [defaultDelRating, setdefaultDelRating] = useState(2);
  const [maxDelRating, setmaxDelRating] = useState([1, 2, 3, 4, 5]);

  const starImgFilled = star2;
  const starImgUnFilled = star1;

  return (
    <>
    <div className="ratingwrap">
      {maxDelRating.map((item, key) => {
        return (
          <div key={item} onClick={() => setdefaultDelRating(item)}>
            <img
            className="rating"
              src={item <= defaultDelRating ? starImgFilled : starImgUnFilled}
            ></img>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default Ratingcomp;
