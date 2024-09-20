import './app.css'

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
  const Exams = exam;
  return (
    <div>
      {Exams.map((exam, index) => (
        <div key={index}>
          <h3>{exam.question}</h3>
          <ul>
            <li>
              <input type="radio" name={`question${index}`} /> {exam.choose1}
            </li>
            <li>
              <input type="radio" name={`question${index}`} /> {exam.choose2}
            </li>
            <li>
              <input type="radio" name={`question${index}`} /> {exam.choose3}
            </li>
            <li>
              <input type="radio" name={`question${index}`} /> {exam.choose4}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
