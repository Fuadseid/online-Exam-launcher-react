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
];

function App() {
  
  return (
    <Test/>
  );
}
function Test(){
  const Exams = exam;
return(
  <div className='outer'>
    
      {Exams.map((exam, index) => (
        <div className='inner' key={index}>
          <h3>{exam.question}</h3>
          <ul>
            <li>
              <input type="radio" id={`choose1-${index}`} name={`question${index}`} />
              <label htmlFor={`choose1-${index}`}> {exam.choose1}</label>
            </li>
            <li>
              <input type="radio" id={`choose2-${index}`} name={`question${index}`} />
              <label htmlFor={`choose2-${index}`}> {exam.choose2}</label>
            </li>
            <li>
              <input type="radio" id={`choose3-${index}`} name={`question${index}`} />
              <label htmlFor={`choose3-${index}`}> {exam.choose3}</label>
            </li>
            <li>
              <input type="radio" id={`choose4-${index}`} name={`question${index}`} />
              <label htmlFor={`choose4-${index}`}> {exam.choose4}</label>
            </li>
          </ul>
        </div>
      ))}
    </div>
);


}

export default App;
