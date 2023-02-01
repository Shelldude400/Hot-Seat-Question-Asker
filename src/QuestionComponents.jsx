import React, {useEffect, useState} from "react";
import styled from "styled-components";


let questionSet = [];

export function QuestionComponents(props) {
    return <>
        <QuestionBox> {props.currentQuestion?.Question}</QuestionBox>
        <AnswerContainer>
            <AnswerRow>
                <AnswerBox showCorrect={props.correctAnswer === "A"} showUser={props.userAnswer === "A"}>A: {props.currentQuestion?.A}</AnswerBox>
                <AnswerBox showCorrect={props.correctAnswer === "B"} showUser={props.userAnswer === "B"}>B: {props.currentQuestion?.B}</AnswerBox>
            </AnswerRow>
            <AnswerRow>
                <AnswerBox showCorrect={props.correctAnswer === "C"} showUser={props.userAnswer === "C"}>C: {props.currentQuestion?.C}</AnswerBox>
                <AnswerBox showCorrect={props.correctAnswer === "D"} showUser={props.userAnswer === "D"}>D: {props.currentQuestion?.D}</AnswerBox>
            </AnswerRow>
        </AnswerContainer>
    </>
}

export default QuestionComponents;


const QuestionBox = styled.div`
    border: 3px solid black;
    font-size: 24px;
    width: 720px;
    height: 50px;
    margin: 32px;
    text-align: center;
`

const AnswerBox = styled.div`
    font-size: 24px;
    border: 2px solid black;
    width: 318px;
    height: 50px;
    margin: 32px;
    padding-left: 10px;
    padding-top: 10px;
    background-color: ${props => props.showCorrect? "green" : props.showUser? "orange" : ""}; 
`

const AnswerContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const AnswerRow = styled.div`
    display: flex;
`