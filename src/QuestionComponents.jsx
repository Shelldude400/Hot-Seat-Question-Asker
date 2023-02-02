import React, {useEffect, useState} from "react";
import styled from "styled-components";


let questionSet = [];

export function QuestionComponents(props) {
    return <>
        <QuestionBox> {props.currentQuestion?.Question}</QuestionBox>
        <AnswerContainer>
            <AnswerRow>
                <AnswerBox showCorrect={props.correctAnswer === "A"} showUser={props.userAnswer === "A"}><AnswerLetter>A: </AnswerLetter> {props.currentQuestion?.A}</AnswerBox>
                <AnswerBox showCorrect={props.correctAnswer === "B"} showUser={props.userAnswer === "B"}><AnswerLetter>B: </AnswerLetter> {props.currentQuestion?.B}</AnswerBox>
            </AnswerRow>
            <AnswerRow>
                <AnswerBox showCorrect={props.correctAnswer === "C"} showUser={props.userAnswer === "C"}><AnswerLetter>C: </AnswerLetter> {props.currentQuestion?.C}</AnswerBox>
                <AnswerBox showCorrect={props.correctAnswer === "D"} showUser={props.userAnswer === "D"}><AnswerLetter>D: </AnswerLetter> {props.currentQuestion?.D}</AnswerBox>
            </AnswerRow>
        </AnswerContainer>
    </>
}

export default QuestionComponents;

const AnswerLetter = styled.div`
    padding-right: 10px;
    color: gold;
`

const QuestionBox = styled.div`
    display: flex;
    align-items: center;
    border: 3px solid black;
    font-size: 24px;
    width: 700px;
    height: 100px;
    margin: 32px;
    padding: 10px;
    justify-content: center;
    text-align: center;
    background-color: #00008B;
    color: white;
`

const AnswerBox = styled.div`
    display: flex;
    font-size: 20px;
    color: white;
    border: 2px solid black;
    width: 318px;
    height: 50px;
    margin: 32px;
    padding-left: 10px;
    align-items: center;
    background-color: ${props => props.showCorrect? "green" : props.showUser? "orange" : "#00008B"}; 
`

const AnswerContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const AnswerRow = styled.div`
    display: flex;
`