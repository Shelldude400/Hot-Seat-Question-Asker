import React, { useState } from "react";
import QuestionComponents from './QuestionComponents.jsx';
import FileImport from './FileImport.jsx';
import GameControl from './GameControl.jsx';

function App() {

  const [questionSet, setQuestionSet] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [correctAnswer, setCurrentCorrectAnswer] = useState("");
  const [userAnswer, setCurrentUserAnswer] = useState("");

  function goToNextQuestion() {
    setCurrentQuestionNumber(currentQuestionNumber + 1);
    setCurrentCorrectAnswer("");
    setCurrentUserAnswer("");
  }

  function updateCorrectAnswer() {
    setCurrentCorrectAnswer(questionSet[currentQuestionNumber].Answer);
  }

  function updateUserAnswer(answer) {
    setCurrentUserAnswer(answer);
  }

  return (
    <>
    <QuestionComponents userAnswer={userAnswer} correctAnswer={correctAnswer} currentQuestion={questionSet[currentQuestionNumber]}></QuestionComponents>
    <FileImport updateData={setQuestionSet}/>
    <GameControl userFunc={updateUserAnswer} correctFunc={updateCorrectAnswer} goToNextQuestion={goToNextQuestion}></GameControl>
    </>
  );
}

export default App;
