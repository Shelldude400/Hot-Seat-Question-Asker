import React, { useState } from "react";
import QuestionComponents from './QuestionComponents.jsx';
import FileImport from './FileImport.jsx';
import GameControl from './GameControl.jsx';

function App() {

  const [questionSet, setQuestionSet] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState("1");

  function goToNextQuestion() {
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  }
  return (
    <>
    <QuestionComponents currentQuestion={questionSet[currentQuestionNumber]}></QuestionComponents>
    <FileImport updateData={setQuestionSet}/>
    <GameControl setQNo={setCurrentQuestionNumber} cQNo={currentQuestionNumber}></GameControl>
    </>
  );
}

export default App;
