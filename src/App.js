import logo from './logo.svg';
import './App.css';
import Question from "./Components/Question"
import TopBar from "./Components/TopBar"

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import {db} from "./Firebase"
import { doc, collection, query, where, onSnapshot, getDocs, limit} from "firebase/firestore";
import * as React from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import data from "./Data/practiceQuestions.json"
import Resources from './Components/Resources';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  const [questionIndex, setQuestionIndex] = useState(1)
  const [questions, setQuestions] = useState([
   
  ])


  React.useEffect(()=>{
    
    
    // const db = getFirestore(app);
    // const getQuestions =() => {
    //   const q = query(collection(db, "questions"))
    //   getDocs(q).then((querySnapshot) => {
    //     const questions = [];
    //     querySnapshot.forEach((doc) => {
    //       // doc.data() is never undefined for query doc snapshots
    //       questions.push(doc.data());
    //     });
    //     console.log("GOT DATA", questions)
    //     setQuestions(questions)
    //   });
      
    // }

    const getQuestions = ()=> {
      // fetch('./Data/practiceQuestions.json')
      // .then((response) => response.json())
      // .then((json) => { 
      //   console.log(json) 
      //   setQuestions(json["data"])
      // });
      console.log(data)
      setQuestions(data["data"])
    }

    getQuestions()
  }, [])
 

  // const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     const questions = [];
  //     querySnapshot.forEach((doc) => {
  //         questions.push(doc.data());
  //     });

  //     console.log("GOT QUESTIONS", questions)
  //     setQuestions(questions)
  // });

  const onJump = (jumpTo) => {
    setQuestionIndex(jumpTo)
  }


  const onPrevQuestion = () =>{
    if(questionIndex === 1) {
        return
    } else {
      setQuestionIndex(questionIndex -1)
    }
  }

  const onNextQuestion = () => {
    if (questionIndex < questions.length) {
       setQuestionIndex(questionIndex + 1)
    }
  }

  return (

    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <TopBar/>

       
        <div id = "question">
         
          
          {questions.length > 0 ? <Question 
            questionObj = {questions[questionIndex-1]}
            onNextQuestion= {onNextQuestion}
            onPrevQuestion={onPrevQuestion}
            onJump ={onJump}
            questionLength = {questions.length}
            questionIndex={questionIndex}
          />  : <h5> Loading... </h5>}
          
        </div> 

        <div id = "resources">
            <Resources/>
        </div>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
