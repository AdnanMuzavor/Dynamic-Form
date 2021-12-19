import React, { useState } from "react";

import { useHistory } from "react-router";
import { useStore } from "react-redux";
import logo from "../Assets/logo.jpg";
const HomeScreen = () => {
  const history = useHistory();
  const [img, setimg] = useState(logo);
  const ImageChangeHandler = (e) => {
    let img1 = e.target.files[0];
    setimg(URL.createObjectURL(img1));
  };
  const [business, setbusiness] = useState({
    businessname: "",
    businesstype: "Hotel",
    businesslogo: img,
  });
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (
      business.businessname === "" ||
      business.businesstype === "" ||
      business.businesslogo === ""
    ) {
      alert("Fill all the fields.");
      return;
    }

    history.push(`/form/image?${img}&&name=${business.businessname}`);
  };

  const Changedetected = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setbusiness((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      {" "}
      <section className="container formwrapper">
        <div className="col-md-12 col-lg-12 col-12 mx-auto col">
          <img src={img} alt="Hotel logo" className="img-fluid" />
        </div>
        <h4 className="text-center">Fill up business details</h4>
        <div className="container col-10 col-md-6 col-lg-6 ">
          <div className="form mb-3" onSubmit={SubmitHandler}>
            {/* form component-1 */}
            <div className="formcomp">
              <h6 className="ms-4">Select type</h6>
              <select
                className="ms-4"
                value={business.businesstype}
                onChange={Changedetected}
                name="businesstype"
              >
                <option>Hotel</option>
                <option>Restaurant</option>
              </select>
            </div>

            {/* form component-2 */}
            <div className="formcomp">
              <h6 className="ms-4">Business name</h6>
              <input
                className="ms-4"
                type="text"
                placeholder="Enter your Business name"
                name="businessname"
                value={business.businessname}
                onChange={Changedetected}
              />
            </div>

            {/* form component-3 */}
            <div className="formcomp">
              <h6 className="ms-4">Upload business logo</h6>
              <input
                className="ms-4"
                type="file"
                name="myImage"
                onChange={ImageChangeHandler}
              />
            </div>
            <div className="formcomp">
              <h6 className="ms-4">Hit to proceeed</h6>
              <div className="btn ms-4 " onClick={SubmitHandler}>
                <input className="btnin" type="submit" value="proceed"></input>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeScreen;
