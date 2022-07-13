import React from "react";

const Interestform = () => {
  return (<div>
    <div className="blue-hero">
        <center>
          <p>
            Thanks for choosing HNG. Before we proceed, we’ll like to asl a few
            questions to <br /> better understand your business needs{" "}
          </p>
        </center>
      </div>
     <div className="grid-container">
        <div className="grid-item">
          
        <p className="category">Category of interns of interest</p>
       
        <label for="FrontEnd">
          <select name="Front end developers" id="Front end developers" className="select-one">
            <option className="label-drop" value={"Front end developers"}>
              Front end developers
            </option>
            <option value={"Back end developers"}>Back end developers</option>
            <option value={"Mobile developers"}>Mobile developers</option>
            <option value={"UI/UX Designers"}>UI/UX Designers</option>
          </select>
        </label>
      
        </div>
        <div className="grid-item">
        <form>
            <p className="hire-start">How many Interns are you hiring</p>
            <label for="interns">
              <select name="Numb" id="Numb" className="select-num">
                <option className="label-drop" value={"One"}>
                  One
                </option>
                <option value={"Two"}>Two</option>
                <option value={"Three"}>Three</option>
                <option value={"More"}>More</option>
              </select>
            </label>
            <p className="hire-start">When do you need the hire to start?</p>
            <input className="text-area" type="Text" />
            <p className="hire-start">
              What type or subscription are you going for?
            </p>
            <label for="interns">
              <select name="Exclusive" id="Exclusive" className="select-num">
                <option className="label-drop" value={"Exclusive"}>
                  Exclusive
                </option>
                <option value={"Premuim"}>Premuim</option>
                <option value={"Gold"}>Gold</option>
              </select>
            </label>
          </form>
        </div>
        <div className="grid-item">
        <form>
            <br />
            <br />
            <p className="how-many">
              What type of committment are you on the look out for
            </p>
            <label for="interns">
              <select name="Part-Time" id="Part-Time" className="how-many">
                <option className="label-drop" value={"Full-Time"}>
                  Full-Time
                </option>
                <option value={"Part-Time"}>Part-time</option>
                <option value={"Remote"}>Remote</option>
              </select>
            </label>
            <p className>
              Are you open to working with remote hires?
            </p>
            <input
              type={"radio"}
              id="Yes"
              name="Yes"
              value={"Yes"}
             
            />{" "}
            <label for="Yes">Yes</label>
            <input
              type={"radio"}
              id="Yes"
              name="Yes"
              value={"Yes"}
              
            />{" "}
            <label for="Yes">No</label>
            <p >
              HNG has a pool of global top talents in the tech industries and{" "}
              <br />
              our subscription goes for $80 per intern. Does your budget <br />{" "}
              align with our subscription rate?
            </p>
            <input
              type={"radio"}
              id="Yes"
              name="Yes"
              value={"Yes"}
             
            />{" "}
            <label for="Yes">Yes</label>
            <input
              type={"radio"}
              id="Yes"
              name="Yes"
              value={"Yes"}
             
            />{" "}
            <label for="Yes">No</label>
          </form>
        </div>
        </div>
        <center>
          <button className="interest-btn">Submit</button>
        </center>
    </div>
  );
};

export default Interestform;
