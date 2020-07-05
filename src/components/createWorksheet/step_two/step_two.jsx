import React, { useState, useEffect, useLayoutEffect } from "react";
import "../step_two/step_two.scss";
import $ from "jquery"

function Step_two(props) {
  const [wordsStore, setWordsStore] = useState([]);
  let key = 0;
  const [inptVal, setInptVal] = useState("");

  useEffect(() => {
    $(".sp").click(() => {
      $(this).find("span").css("color", "#ffc38b")
    })
    fromInputToSpan(props.textVal);

  });

  // $("span").click(function (e) {
  //   console.log(e.target.id)
  //   console.log(e.target.innerHTML)
  //   setWordsStore([...wordsStore, { k: e.target.id, v: e.target.innerHTML }])
  // });

  // const handleSpanClick = (word, key) => {
  //   setWordsStore([...wordsStore, { k: key, v: word }])
  // }


  const fromInputToSpan = (inptVal) => {
    let words = inptVal.split(' ');
    words.map(word => {
      let word_span = document.createElement("span");   // Create a <button> element
      word_span.innerHTML = word;
      word_span.id = key;
      word_span.className = "word";
      word_span.className = "sp";
      // word_span.addEventListener("click", function (e) {
      //   console.log(e.target.id, e.target.innerHTML)
      //   setWordsStore([...wordsStore, { k: e.target.id, v: e.target.innerHTML }])
      //   console.log("wordsStore", wordsStore);
      // });
      $("#inputPlace").append(word_span);
      key++;
    })
  }


  return (
    <div >
      <div style={{ display: "flex" }}>
        <div style={{ flex: 0.1 }}></div>
        <div
          id="inputPlace"
          variant="outlined">
        </div>
        <div style={{ flex: 0.1 }}></div>
        <div
          style={{ flex: 1, backgroundColor: "#fff3cd", textAlign: 'center', borderRadius: 10 }}
        >
          <h3 style={{ marginTop: 0 }}  >words store</h3>
        </div>
        <div style={{ flex: 0.1 }}></div>
      </div>
    </div>
  );
}


export default Step_two;
