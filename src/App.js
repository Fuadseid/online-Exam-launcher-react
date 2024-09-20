import { useState } from 'react';
import './app.css';

const exam = [
  {
    question: "What is React?",
    choose1: "It is a JS framework",
    choose2: "It is a Java framework",
    choose3: "It is a JS library",
    choose4: "It is a UI library",
    answer: "choose3",
  },
  {
    question: "Who is the owner of TESLA?",
    choose1: "Mark Z",
    choose2: "Kastrov",
    choose3: "Warren",
    choose4: "Elon",
    answer: "choose4",
  },
  {
    question: "Who is the owner of TESLA?",
    choose1: "Mark Z",
    choose2: "Kastrov",
    choose3: "Warren",
    choose4: "Elon",
    answer: "choose4",
  },
  {
    question: "Who is the owner of TESLA?",
    choose1: "Mark Z",
    choose2: "Kastrov",
    choose3: "Warren",
    choose4: "Elon",
    answer: "choose4",
  },
];

function App() {
  return <Test />;
}

function Test() {
  const Exams = exam;
  const [selectedAnswers, setSelectedAnswers] = useState(Array(Exams.length).fill(''));
  const [results, setResults] = useState(Array(Exams.length).fill(null)); 
  const [display,setdisplay]= useState('');
  const [isSelected,setisSelected]=useState(false);

  function handleAnswer() {
    const newResults = Exams.map((exam, index) => {
      if (selectedAnswers[index] === exam.answer) {
        return 'correct';
      } else if (selectedAnswers[index]) {
        return 'notcorrect';
      }
      return null;
    });
    setResults(newResults);
    const score = newResults.filter(result => result === 'correct').length;
    setdisplay(`Your score: ${score}/${Exams.length}`);
    setisSelected(true);
  }

  return (
    <div className='outer'>
      <h1 className='diplay'>{display}</h1>
      {Exams.map((exam, index) => (
        <div className='inner' key={index}>
          <h3>{exam.question}</h3>
          <ul>
            {['choose1', 'choose2', 'choose3', 'choose4'].map((choice, i) => (
              <li 
                key={choice} 
                className={results[index] === 'correct' && choice === exam.answer ? 'correct' : 
                           results[index] === 'notcorrect' && choice === selectedAnswers[index] ? 'notcorrect' : ''}>
                <input 
                  type="radio" 
                  id={`${choice}-${index}`} 
                  name={`question${index}`} 
                  value={choice} 
                  onChange={e => {
                    const newAnswers = [...selectedAnswers];
                    newAnswers[index] = e.target.value;
                    setSelectedAnswers(newAnswers);
                  }} 
                  disabled={isSelected}
                />
                <label htmlFor={`${choice}-${index}`}> {exam[choice]}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={handleAnswer}>Submit</button>
    </div>
  );
}

export default App;
