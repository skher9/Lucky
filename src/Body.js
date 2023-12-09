import { useState } from "react";

const Body = () => {
  const [date, setdate] = useState();

  const [number, setnumber] = useState();

  const [Ans, setAns] = useState("");

  function add() {
    let No = date;
    let Ans = 0;

    const arr = No.split("");

    arr.forEach((element) => {
      if (element != "-") {
        element = parseInt(element);
        Ans = Ans + element;
      }
    });

    return Ans;
  }
  function HandleClick() {
    const Addition = add();
    console.log(Addition);
    console.log(number);

    if (Addition == number) {
      setAns(number + " is Lucky!!! 🥳🥳🥳");
    } else {
      setAns(number + " is not Lucky!!! 😕😕");
    }
  }

  return (
    <div className="body">
      <h1 className="header">Is Your Birthday Lucky? 🤔</h1>
      <h3 className="note">Date of Birth :</h3>
      <input
        className="Date"
        type="Date"
        value={date}
        onChange={(e) => setdate(e.target.value)}
      ></input>
      <h3 className="note">Lucky Number :</h3>
      <input
        className="Number"
        type="Number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setnumber(e.target.value)}
      ></input>
      <br></br>
      <button className="btn" onClick={HandleClick}>
        Check Number
      </button>
      <br />
      <h2 className="Ans">{Ans}</h2>
    </div>
  );
};
export default Body;
