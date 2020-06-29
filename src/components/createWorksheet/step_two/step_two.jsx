import React, { useState, useEffect, useLayoutEffect } from "react";
import "../step_two/step_two.scss";
import $ from "jquery"

function Step_two(props) {
  const [wordsStore, setWordsStore] = useState([]);
  const [inptVal, setInptVal] = useState("");

  useEffect(() => {
    $(".sp").click(() => {
      $(this).find("span").css("color", "#ffc38b")
    })
    fromInputToSpan(props.textVal);

  });

  const fromInputToSpan = (inptVal) => {
    let rows = inptVal.trim().split("\n");
    let words_rows = [];

    rows.forEach(row => {
      words_rows.push(row.split(' '));
    });
    console.log(words_rows);

    var word;

    words_rows.map(row_words => {
      row_words.map(word => {
        let word_span = document.createElement("span");   // Create a <button> element
        word_span.innerHTML = word;
        word_span.className = "word";
        word_span.className = "sp"

        word_span.onclick = (e) => {
          // if (e.target.style.color === "black")
          //   e.target.style.color = "rgb(	255, 195, 139)";
          // else
          //   e.target.style.color = "black"
          //!wordsStore.some(val => { console.log(val, e.target.innerHTML); return val === e.target.innerHTML })) {

          setWordsStore(prevWordsStore => { console.log(prevWordsStore); return ([...prevWordsStore, e.target.innerHTML]) });
          // setWordsStore(e.target.innerHTML);
          console.log(wordsStore);
        }

        $("#inputPlace").append(word_span);
      })

    })
  }


  return (
    <div >
      <div style={{ display: "flex" }}>
        <div style={{ flex: 0.1 }}></div>
        {/* <TextField
          value={textForTextfiled}
          inputProps={{ style: { fontFamily: "Source Sans Pro" } }}
          className="textFiels_place"
          id="standard-multiline-static"
          multiline
          rows={20}
          defaultValue="Your text goes here..."
          variant="outlined"
        /> */}

        <div
          id="inputPlace"
          variant="outlined">
          {/* {props.textVal} */}
        </div>


        <div style={{ flex: 0.1 }}></div>
        <div
          style={{ flex: 1, backgroundColor: "#fff3cd", textAlign: 'center', borderRadius: 10 }}
        >
          <h3 style={{ marginTop: 0 }} >words store</h3>
        </div>
        <div style={{ flex: 0.1 }}></div>
      </div>
    </div>
  );
}


export default Step_two;
