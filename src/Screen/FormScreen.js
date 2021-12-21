import React from "react";
import { useState } from "react";
import logo from "../Assets/logo.jpg";
import Ratingcomp from "../components/RatingComp";
import star1 from "../Assets/star_corner.png";
import star2 from "../Assets/star_filled.png";
import { useEffect } from "react";

const FormScreen = (props) => {
  const [attributes, setattributes] = useState([
    "text",
    "rating",
    "date",
    "number",
    "rating",
    "radio",
    "dropdown",
  ]);
  const [readyforradio, setreadyforradio] = useState(false);
  const [radiocount, setradiocount] = useState(0);
  const [iterator, setiterat] = useState(0);
  const [commontext, setcommontext] = useState("");
  const [radioopts, setradiopts] = useState([]);
  const data = props.location.search;
  useEffect(() => {
    alert(
      "Simple steps:\n1)Select Attribute you want\n2)on clicking you'll get pop up\n3)Fill up details in popup\n4)Click Done\n5)Your attribute will be added"
    );
    setimg(data.split("&&")[0].slice(1));
    setbusinessname(data.split("&&")[1].slice(5));
  }, []);

  const [img, setimg] = useState(); //for setting img
  const [businessname, setbusinessname] = useState(""); //for setting business name

  const [nameinput, setnameinput] = useState("");
  const [placeholdertxt, setplaceholdertxt] = useState("");
  const [selected, setselected] = useState("");
  const [isimp, setisimp] = useState(false);

  const AddToFormHandler = (attribute) => {
    setselected(attribute);

    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    const pg = document.querySelector(".pgcontent");
    pg.classList.toggle("opec");
  };

  //For allowing to take in user inputs for radio
  const TakeRadiosHandler = () => {
    if(radiocount==0){
      alert("Inavalid radio count")
      return;
    }
    setreadyforradio(true);
  };

  //Placing each option for radio in array
  const TakeRadiosHandler2 = (i, i2) => {
    setiterat(iterator + 1);
    setradiopts((prev) => [...prev, commontext]);
    setcommontext("");
    console.log(iterator);
  };
  //For dropdown field
  function finaliseddropdownhandler() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    const pg = document.querySelector(".pgcontent");
    pg.classList.toggle("opec");
  }

  //For radio field/append radio field after necessary info is taken
  function finaliseradiohandler() {
    var popup = document.getElementById("myPopup");
    if(radioopts.length===0){
      alert("No options added yet!");
      return;
    }
    popup.classList.toggle("show");
    const pg = document.querySelector(".pgcontent");
    pg.classList.toggle("opec");

    setradiopts([]);
    setreadyforradio(false);
    setiterat(0);
    setradiocount(0);
    setplaceholdertxt("");
    setnameinput("");
  }

  const SubmitHandler = () => {};

  //For text/date/number fields
  function FinaliseAttrbute() {
  //  myFunction(selected)

    //As date/radio hv only one input fields
    if (selected === "date" || selected === "radio") {
      if (!nameinput) {
        alert("Fill in necesaary details to add the attribute");
        return;
      }
    }
    //As others hv both fields
    else {
      if (!placeholdertxt || !nameinput) {
        alert("Fill in necesaary details to add the attribute");
        return;
      }
    }

    //To remove pop-up
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    const pg = document.querySelector(".pgcontent");
    pg.classList.toggle("opec");
    //To attend created elements to form
    const form = document.querySelector(".form");

    const createcomp = () => {
      return React.createElement("Ratingcomp");
    };

    if (selected === "rating") {
      //Method-2
      // }
    } else {
      //Each element will be enclose in flex container

      var div = document.createElement("div");
      div.setAttribute("class", "flexer");
      var element;

      //Making input of selected type
      element = document.createElement("input");
      element.setAttribute("type", selected);

      if (isimp) {
        element.setAttribute("required", true);
      }
      //Setting placeholder
      element.setAttribute("placeholder", placeholdertxt);

      element.setAttribute("class", "flexer");

      console.log(
        `type of ${typeof placeholdertxt} and val: ${placeholdertxt}`
      );
      //Setting label of the input
      var label = document.createElement("h6");
      label.setAttribute("for", nameinput);
      if (isimp) {
        label.innerHTML = "* " + nameinput;
        setisimp(false);
      } else {
        label.innerHTML = nameinput;
      }
      //appending label and element in div
      div.appendChild(label);
      div.appendChild(element);

      //Appending div to form
      form.appendChild(div);
    }

    setplaceholdertxt("");
    setnameinput("");
  }
  return (
    <>
      <section className="row d-flex justify-content-center ">
        {/*Pop up for filling necessary details */}
        <div className="popup col-10 col-md-6 col-lg-6 ">
          <span className="popuptext " id="myPopup">
            <p className="text-center">Fill up required fields</p>
            <div className="imp">
              <p>Is important</p>
              <input
                type="checkbox"
                id="checkbox"
                checked={isimp}
                required
                onChange={(e) => (isimp ? setisimp(false) : setisimp(true))}
                placeholder="Enter no of radio buttons"
              ></input>
            </div>
            <input
              type="text"
              value={nameinput}
              placeholder={
                selected === "radio" ||
                selected === "date" ||
                selected === "dropdown"
                  ? "Enter value"
                  : "Enter question/text"
              }
              onChange={(txt) => setnameinput(txt.target.value)}
            ></input>

            {/* Condition for selected===radio/dropdown */}
            {(selected === "radio" || selected === "dropdown") &&
            !readyforradio ? (
              <>
                <input
                  type="number"
                  value={radiocount}
                  onChange={(e) => setradiocount(e.target.value)}
                  placeholder="Enter no of radio buttons"
                ></input>
                <button className="btn noanim" onClick={TakeRadiosHandler}>
                  Submit count
                </button>
              </>
            ) : null}

            {/* Condition for selected===radio/dropdown  and ready for radio*/}
            {(selected === "radio" || selected === "dropdown") &&
            readyforradio ? (
              <>
                {iterator < Number(radiocount) ? (
                  <>
                    <input
                      className="radios"
                      id={iterator}
                      type="text"
                      placeholder={`Option number ${iterator + 1}`}
                      onChange={(e) => setcommontext(e.target.value)}
                      value={commontext}
                    ></input>
                    <button
                      className="btn noanim"
                      id={iterator + 1 * 10}
                      onClick={() =>
                        TakeRadiosHandler2(iterator, iterator + 1 * 10)
                      }
                    >
                      Submit option {iterator + 1}
                    </button>
                  </>
                ) : null}
              </>
            ) : null}

            {/* since date/radio/dropdown hv no placeholder field */}
            {selected === "radio" ||
            selected === "date" ||
            selected === "dropdown" ? null : (
              <input
                type="text"
                value={placeholdertxt}
                placeholder="Enter place holder"
                onChange={(txt) => setplaceholdertxt(txt.target.value)}
              ></input>
            )}

            <button
              className="btn border"
              onClick={() => {
                selected !== "radio" && selected !== "dropdown"
                  ? FinaliseAttrbute()
                  : selected === "dropdown"
                  ? finaliseddropdownhandler()
                  : finaliseradiohandler();
              }}
            >
              Done
            </button>
          </span>
        </div>
      </section>

      <div className="row mx-auto container pgcontent">
        {/* Title of page */}
        <div className="title row">
          <h6 className="text-center">{businessname} : Customisation Spot</h6>
        </div>
        {/* logo/ image uploaded */}
        <div className="col-md-12 col-lg-12 col-12 mx-auto col d-flex justify-content-center">
          <img src={img} alt="Hotel logo" className="img-fluid" />
        </div>
        {/*Form to which elements will be appended*/}
        <form
          className="col-md-8 col-lg-8 col-12 col2 d-flex justify-content-center form form2  flexer mt-2"
          id="formid"
        >
          <h4 className="text-center mb-4">Your Survey Form</h4>
        </form>
        {/* Attribute Lists*/}
        <div className="col-md-4 col-lg-4 col-12 col d-flex justify-content-center mt-2">
          <ul className="ullist">
            <h6 className="text-center">Attributes section</h6>
            {attributes.map((e) => {
              return (
                <li
                  key={Math.random() * 1000}
                  onClick={() => {
                    setselected(e);

                    AddToFormHandler(e);
                  }}
                >
                  {e.charAt(0).toUpperCase() + e.slice(1)}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FormScreen;
