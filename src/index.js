import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CreateService from './pages/create-service/create-service';
import Service from "./components/Services/summarizer/summarizer"
import QuestionAnsweringService from './components/Services/question-answering/question-answering';
import GenderClassification from './components/Services/gender-classification/gender-classification';
import SignInUp from './pages/sign-in-up/sign-in-up';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/home" element={<Navigate to="/" replace />} /> 
        <Route path="/sign-in-up" element={<SignInUp/>} />
        <Route path="/create-service" element={<CreateService/>}/>
        <Route path="/summarize" element={<Service/>}/>
        <Route path ="/question-answering" element={<QuestionAnsweringService/>}/>
        <Route path ="/genderapp" element={<GenderClassification/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
