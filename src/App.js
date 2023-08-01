import { useEffect, useState } from "react";
import "./App.css";
import FormatWord from "./FormatWord";
import axios from "axios";
import alphabets from "./AllAlphabets";
function App() {
  const [selectedAlphabet, setSelectedAlphabet] = useState("");
  const [currentAlphabets, setCurrentAlphabets] = useState([
    "a",
    "b",
    "c",
    "d",
    "e",
  ]);
  const [words, setWords] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      var c = current;
      setCurrentAlphabets([]);
      const val = [];
      for (var i = c; i < c + 5; i++) {
        val.push(alphabets[i]);
      }
      setCurrentAlphabets(val);
      if (c == 21) {
        setCurrent(0);
      } else {
        setCurrent(c + 1);
      }
    }, 1000);
  }, [current]);

  const getWords = async (letter) => {
    await axios
      .get(`https://api.datamuse.com/words?sp=${letter}*&max=7`)
      .then((res) => {
        console.log(res.data);
        setWords(res.data);
      });
  };

  return (
    <div className="App">
      <div className="alphabets">
        {!selectedAlphabet
          ? currentAlphabets.map((alp) => {
              return (
                <div
                  className="alp"
                  onClick={() => {
                    setSelectedAlphabet(alp);
                    getWords(alp);
                  }}
                >
                  {alp}
                </div>
              );
            })
          : words
          ? words.map((word) => {
              return (
                <div className="alp">
                  <FormatWord word={word.word} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default App;
