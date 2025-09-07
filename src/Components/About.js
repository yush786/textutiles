import React from "react";


export default function About(props) {

    // const [mystyle, setMystyle] = useState({
    //     color: "white",
    //     backgroundColor: "black",
    //     padding: "10px",
    //     borderRadius: "5px",
    //     border: "1px solid lightblue",
    // });
    let mystyle = {
      color: props.mode === "dark" ? "white" : "#042743",
      backgroundColor: props.mode === "dark" ? "#042743" : "white",
      border: "2px solid",
      borderColor: props.mode === "dark" ? "white" : "#042743",
    };
    let mystyle1 = {
      color: props.mode === "dark" ? "white" : "#042743",
      backgroundColor: props.mode === "dark" ? "rgb(78, 78, 162)" : "white",
    };



//    const[btntext, setBtnText] = useState("Enable Light Mode");
    // const ToggleEvent = () => {
    //     if (mystyle.color === 'white') {
    //         setMystyle({
    //           color: "black",
    //           backgroundColor: "white",
    //           padding: "10px",
    //           border: "1px solid green",
    //         });
    //         setBtnText("Enable Dark Mode");
    //     }
    //     else {
    //         setMystyle({
    //           color: "white",
    //           backgroundColor: "black",
    //           border: "1px solid red",
    //         });
    //         setBtnText("Enable Light Mode");
    //     }
    // }
        return (
          <div className="container" style={mystyle1}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample" style={mystyle1}>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    style={mystyle}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <strong>Analyze Your text</strong>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body" style={mystyle}>
                    <strong>This is the first item’s accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element.
                    These classNamees control the overall appearance, as well as
                    the showing and hiding via CSS transitions. You can modify
                    any of this with custom CSS or overriding our default
                    variables. It’s also worth noting that just about any HTML
                    can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    style={mystyle}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <strong>Free To Use</strong>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body" style={mystyle}>
                    <strong>This is the second item’s accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element.
                    These classNamees control the overall appearance, as well as
                    the showing and hiding via CSS transitions. You can modify
                    any of this with custom CSS or overriding our default
                    variables. It’s also worth noting that just about any HTML
                    can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    style={mystyle}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <strong>Browser Compatible</strong>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body" style={mystyle}>
                    <strong>This is the third item’s accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element.
                    These classNamees control the overall appearance, as well as
                    the showing and hiding via CSS transitions. You can modify
                    any of this with custom CSS or overriding our default
                    variables. It’s also worth noting that just about any HTML
                    can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
            <div className="container my-3">
              {/* <button
                onClick={ToggleEvent}
                type="button"
                className="btn btn-primary"
              >
                {btntext}
              </button> */}
            </div>
          </div>
        );
    }

