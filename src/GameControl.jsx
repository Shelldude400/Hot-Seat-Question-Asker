import React, {useEffect, useState} from "react";
import styled from "styled-components";

export function GameControl(props) {

    return <>
        <PlayerAnswerBox>
            Player Answer: 
            <SelectAnswerButton onClick={ () => {props.userFunc("A")}}>A</SelectAnswerButton>
            <SelectAnswerButton onClick={ () => {props.userFunc("B")}}>B</SelectAnswerButton>
            <SelectAnswerButton onClick={ () => {props.userFunc("C")}}>C</SelectAnswerButton>
            <SelectAnswerButton onClick={ () => {props.userFunc("D")}}>D</SelectAnswerButton>
        </PlayerAnswerBox>
        <CorrectAnswerButton onClick={ () => {props.correctFunc()}}>Show Correct Answer</CorrectAnswerButton>
        <NextQuestionButton onClick={props.goToNextQuestion}>Next Question</NextQuestionButton>
    </>
}

const PlayerAnswerBox = styled.div`
    margin: 24px;
`

const SelectAnswerButton = styled.button`
    width: 135px;
    height: 40px;
    margin: 12px;
    font-size: 24px;
`
export default GameControl;

const CorrectAnswerButton = styled.button`
    width: 270px;
    height: 40px;
    font-size: 24px;
    margin: 12px;
    background-color: green;
`

const NextQuestionButton = styled.button`
    width: 270px;
    height: 40px;
    font-size: 24px;
    margin: 12px;
    background-color: grey;
`