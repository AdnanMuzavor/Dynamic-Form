import React from "react";
import { useState } from "react";
import logo from "../Assets/logo.jpg";
import Ratingcomp from "../components/RatingComp";
import star1 from "../Assets/star_corner.png";
import star2 from "../Assets/star_filled.png";
import { useEffect } from "react";


const FormScreen = (props) => {
  const [userans, setuserans] = useState({});
  const [attributes, setattributes] = useState([
    "text",
    "rating",
    "date",
    "number",
    "rating",
    "radio",
    "dropdown",
  ]);
  const data = props.location.search;
  useEffect(() => {
    //  console.log(data.slice(1,8))
    //  console.log(data.split("&&"))
    //  console.log(data.split("&&")[0].slice(1))
    //  console.log(data.split("&&")[1].slice(5))
    alert(
      "Simple steps:\n1)Select Attribute you want\n2)on clicking you'll get pop up\n3)Fill up details in popup\n4)Click Done\n5)Your attribute will be added"
    );
    setimg(data.split("&&")[0].slice(1));
    setbusinessname(data.split("&&")[1].slice(5));
  }, []);
  const [img, setimg] = useState();
  const [businessname, setbusinessname] = useState("");

  const [iterator, setiterat] = useState(0);
  const [commontext, setcommontext] = useState("");
  const [nameinput, setnameinput] = useState("");
  const [placeholdertxt, setplaceholdertxt] = useState("");
  const [selected, setselected] = useState("");
  const [radiocount, setradiocount] = useState(0);
  const [readyforradio, setreadyforradio] = useState(false);
  const [inputs, setinputs] = useState("");
  const [radioopts, setradiopts] = useState([]);
  const [isimp, setisimp] = useState(false);
  const AddToFormHandler = (attribute) => {
    setselected(attribute);

    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    const pg = document.querySelector(".pgcontent");
    pg.classList.toggle("opec");
    // form.appendChild(label)
    // form.appendChild(element);
  };

  //For allowing to take in user inputs for radio
  const TakeRadiosHandler = () => {
    setreadyforradio(true);
  };

  //Placing each option for radio in array
  const TakeRadiosHandler2 = (i, i2) => {
    setiterat(iterator + 1);
    setradiopts((prev) => [...prev, commontext]);
    setcommontext("");
    console.log(iterator);
  };
  // //For dropdown field
  function finaliseddropdownhandler() {
    //To attend created elements to form
    const form = document.querySelector(".form");

    //To remove pop-up
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    const pg = document.querySelector(".pgcontent");
    pg.classList.toggle("opec");
    var div = document.createElement("div");
    div.setAttribute("class", "flexerrow");

    var label = document.createElement("h5");
    label.setAttribute("for", nameinput);
    label.innerHTML = nameinput;
    //To handle isimp case
    if (isimp) {
      label.innerHTML = "* " + nameinput;
      setisimp(false);
    } else {
      label.innerHTML = nameinput;
    }

    form.appendChild(label);
    var mknameunique = Math.random() * 1000;

    //div to wrap title and input together
    var select = document.createElement("select");
    select.setAttribute("class", "flexer");
    radioopts.forEach((e) => {
      //Making input of selected type

      //The radio attribute
      var element = document.createElement("option");

      element.setAttribute("name", `name${mknameunique}`);
      element.setAttribute("value", e);
      element.innerHTML = e;
      select.appendChild(element);
      div.appendChild(select);
    });
    form.appendChild(div);

    setradiopts([]);
    setreadyforradio(false);
    setiterat(0);
    setradiocount(0);
    setplaceholdertxt("");
    setnameinput("");
  }

  //For radio field/append radio field after necessary info is taken
  function finaliseradiohandler() {
    //To attend created elements to form
    const form = document.querySelector(".form");

    //To remove pop-up
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    const pg = document.querySelector(".pgcontent");
    pg.classList.toggle("opec");
    var div = document.createElement("div");
    div.setAttribute("class", "flexerrow");

    var label = document.createElement("h6");
    label.setAttribute("for", nameinput);
    label.innerHTML = nameinput;
    //For handling isimp case
    if (isimp) {
      label.innerHTML = "* " + nameinput;
      setisimp(false);
    } else {
      label.innerHTML = nameinput;
    }

    form.appendChild(label);
    var mknameunique = Math.random() * 1000;
    radioopts.forEach((e) => {
      //Making input of selected type

      //div to wrap title and input together
      var div2 = document.createElement("div");
      div2.setAttribute("class", "flexer");

      //The label attribute
      label = document.createElement("h6");
      label.setAttribute("for", e);
      label.innerHTML = e;

      //The radio attribute
      var element = document.createElement("input");
      element.setAttribute("type", selected);
      element.setAttribute("class", "radio");
      // element.setAttribute("checked",false)
      element.setAttribute("name", `name${mknameunique}`);
      element.setAttribute("value", e);

      div2.appendChild(label);
      div2.appendChild(element);
      div.appendChild(div2);
    });
    form.appendChild(div);

    setradiopts([]);
    setreadyforradio(false);
    setiterat(0);
    setradiocount(0);
    setplaceholdertxt("");
    setnameinput("");
  }

  const SubmitHandler = () => {
    var elements = document
      .getElementById("formid")
      .getElementsByTagName("input");
    var elements2 = document
      .getElementById("formid")
      .getElementsByTagName("h6");
    console.log(typeof elements2, typeof elements, typeof elements2[0]);

    //  typeof(elements2).keys(elements2).forEach(function(key){
    //    console.log(`key is ${key},ele are: ${elements2[key]}`)
    //  })
    console.log(elements);
    var l1 = elements2.length;
    var l2 = elements.length;
    var i = 0;
    var arr1 = []; //for all questions
    var arr2 = []; //for all ans
    var arr3 = []; //for radio values which are false
    var arr4 = []; //Making key value pair of ans and question
    var arrd1 = []; //Dropdown questions
    var arrd2 = []; //Dropdown ans

    for (i = 0; i < l1; i++) {
      arr1.push(elements2[i].innerText);
    }
    for (i = 0; i < l2; i++) {
      arr2.push(elements[i].value);
    }

    //Pushing all false values
    for (i = 0; i < l2; i++) {
      if (elements[i].type === "radio") {
        if (elements[i].checked === false) {
          arr3.push(elements[i].value);
        }
      }
    }
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);

    //Removing common elements if any
    for (i = 0; i < l1; i++) {
      if (arr2.find((e) => e == arr1[i])) {
        arr1[i] = "#";
      }
    }
    arr1 = arr1.filter((e) => e !== "#");

    //Removing false radio values from ans array
    for (i = 0; i < l1; i++) {
      if (arr3.find((e) => e == arr2[i])) {
        arr2[i] = "#";
      }
    }
    arr2 = arr2.filter((e) => e !== "#");

    console.log(arr1);
    console.log(arr2);

    //Making key value pair of ans and question
    var arr4 = [];
    for (i = 0; i < arr2.length; i++) {
      var obj = { [arr1[i]]: arr2[i] };
      console.log(obj);
      arr4.push(obj);
    }

    console.log(arr4);

    var elements3 = document
      .getElementById("formid")
      .getElementsByTagName("h5");

    //Reusing array-1 to push dropdown questions
    for (i = 0; i < elements3.length; i++) {
      arrd1.push(elements3[i].innerText);
    }
    console.log(arrd1);

    var elements4 = document
      .getElementById("formid")
      .getElementsByTagName("option");

    //Reusing array-2 to push corresponding dropdown ans
    for (i = 0; i < elements4.length; i++) {
      if (elements4[i].selected) {
        arrd2.push(elements4[i].value);
      }
    }
    console.log(arrd2);

    for (i = 0; i < arr2.length; i++) {
      var obj = { [arr1[i]]: arr2[i] };
      console.log(obj);
      arr4.push(obj);
    }
    for (i = 0; i < arrd2.length; i++) {
      var obj = { [arrd1[i]]: arrd2[i] };
      console.log(obj);
      arr4.push(obj);
    }
    console.log(arr4);
    //Setting ans object
    setuserans(arr4);
  };

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

            {(selected === "radio" || selected === "dropdown") &&
            !readyforradio ? (
              <>
                <input
                  type="number"
                  required={true}
                  value={radiocount}
                  onChange={(e) => setradiocount(e.target.value)}
                  placeholder="Enter no of radio buttons"
                ></input>
                <button className="btn noanim" onClick={TakeRadiosHandler}>
                  Submit count
                </button>
              </>
            ) : null}
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
            {selected === "radio" ||
            selected === "date" ||
            selected === "dropdown" ? null : (
              <input
                type="text"
                required
                value={placeholdertxt}
                placeholder="Enter place holder"
                onChange={(txt) => setplaceholdertxt(txt.target.value)}
              ></input>
            )}

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
        <div className="title row">
          <h6 className="text-center">{businessname} : Customisation Spot</h6>
        </div>
        <div className="col-md-12 col-lg-12 col-12 mx-auto col d-flex justify-content-center">
          <img src={img} alt="Hotel logo" className="img-fluid" />
        </div>
        <form
          className="col-md-8 col-lg-8 col-12 col2 d-flex justify-content-center form form2  flexer mt-2"
          id="formid"
        >
          <h4 className="text-center mb-4">Your Survey Form</h4>

          {/* <Ratingcomp /> */}
          {/* <form action="" className="form"></form> */}
        </form>

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
      <div className="formcomp">
        <h6 className="ms-4">Hit to proceeed</h6>
        <div className="btn ms-4 " onClick={SubmitHandler}>
          <input className="btnin" type="submit" value="proceed"></input>
        </div>
      </div>
    </>
  );
};

export default FormScreen;
