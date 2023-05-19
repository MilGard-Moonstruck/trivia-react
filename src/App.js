import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import CategoryList from './components/CategoryList';
import Question from './components/Question';

const CATEGORIES = [
  'artliterature',
  'language',
  'sciencenature',
  'general',
  'fooddrink',
  'peopleplaces',
  'geography',
  'historyholidays',
  'entertainment',
  'toysgames',
  'music',
  'mathematics',
  'religionmythology',
  'sportsleisure',
  'random',
];
const URL = 'https://api.api-ninjas.com/v1/trivia';
// TODO: Add Your API key
// DO NOT PUSH TO GITHUB
const API_KEY = ''

function App() {
  const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');

  useEffect(() => {
    if (category) {
      fetchQuestion();
    }
  }, [category]);

  const fetchQuestion = async () => {
    if (category) {
      const { data: [response] } = await axios.get(`${URL}?category=${category}`, {headers: {'X-Api-Key': API_KEY}});

      const { question, answer } = response;
      setQuestion(question);
      setCorrectAnswer(answer);
    }
  }

  const handlePickCategory = (category) => {
    setCategory(category)
  }

  const handleBack = () => {
    setCategory('');
    setQuestion('');
    setCorrectAnswer('');
  }

  // TODO: Write function to check the answer
  // TODO: write what should happen next
  const handleSubmitAnswer = () => {}

  return (
    <div className="App">
      <h2>WEB 2.5 TRIVIA</h2>
      {
        category ? (
            <Question question={question} handleBack={handleBack} handleSubmitAnswer={handleSubmitAnswer}/>
          ) : (
            <CategoryList
              categories={CATEGORIES}
              handlePickCategory={ handlePickCategory }
            />
          )
      }
    </div>
  );
}

export default App;
