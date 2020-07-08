import React, { useState, useEffect, useLayoutEffect } from "react";
import "../step_two/step_two.scss";
import $ from "jquery"
import Word from '../word/word'


function Step_two(props) {

  const [wordsStore, setWordsStore] = useState([]);
  const [wordsStoreToRender, setWordsStoreToRender] = useState();

  let key = 0;
  let index = 0;

  useEffect(() => {
    $(".sp").click(() => { $(this).find("span").css("color", "#ffc38b") })
    userInputToSpan(props.textVal);
  });

  const checkIfExistInWordsStore = (keyOfWord) => {
    wordsStore.map(x => {
      if (x.key === keyOfWord) return true;
    })
    return false;
  }


  const userInputToSpan = (inptVal) => {

    //ריקון המילים באינפוט פלייס אחרי כל רינדור
    $("#inputPlace").empty();
    let words = inptVal.split(' ');
    words.map(word => {
      let word_span = document.createElement("span");
      word_span.innerHTML = word;
      word_span.id = key;
      word_span.className = "word";
      word_span.className = "sp";


      word_span.addEventListener("click", function (e) {
        $("#" + e.target.id).css("color", "white");

        let wordToInsert = {
          key: e.target.id,
          value: e.target.innerHTML
        }


        let someArray = wordsStore;
        someArray.push(wordToInsert);

        //setWordsStore([...wordsStore, wordToInsert])//------not working!!!
        setWordsStore(someArray);
        setWordsStoreToRender(wordsStore.map(x => <div key={index++} id={x.key}> {x.value} </div>));

        //console.log("wordsStore", wordsStore);
        //console.log(e.target.id, e.target.innerHTML)
        // setWordsStore([...wordsStore, { k: e.target.id, v: e.target.innerHTML }])
        console.log(wordToInsert, wordsStore);
      });
      $("#inputPlace").append(word_span);

      //   key++;
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
          {wordsStoreToRender}
        </div>


        <div style={{ flex: 0.1 }}></div>
      </div>
    </div>
  );
}


export default Step_two;
