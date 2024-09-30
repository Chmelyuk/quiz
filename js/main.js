const { useState } = React;
const rootElement = document.getElementById('app');


const questions =  [
  {
    title: 'Какой язык программирования используется для веб-разработки на стороне клиента?',
    variants: [
       'JavaScript',
       'Python', 
       'Java'
      ],
    correct: 0,
  },
  {
    title: 'Как называется базовый протокол передачи данных в интернете?',
    variants: [ 
      'FTP',
      'HTTP',
      'SMTP',
    ],
    correct: 1,
  },
  {
    title: 'Какой из этих языков является строго типизированным?',
    variants: [
      'Python',
      'JavaScript',
      'Java',
    ],
    correct: 2,
  },
  {
    title: 'Что такое "бэкенд" в веб-разработке?',
    variants: [
      'Сторона, работающая на сервере',
      'Интерфейс для взаимодействия с пользователем',
      'Набор стилей для оформления сайта',
    ],
    correct: 0,
  },
  {
    title: 'Какая команда Git используется для создания новой ветки?',
    variants: [
      'git commit',
      'git branch',
      'git merge',
    ],
    correct: 1,
  },
  {
    title: 'Какой фреймворк используется для разработки мобильных приложений на React?',
    variants: [
      'React Native',
      'Flutter',
      'Ionic',
    ],
    correct: 0,
  },
  {
    title: 'Какой из этих типов данных отсутствует в JavaScript?',
    variants: [
      'Boolean',
      'String',
      'Double',
    ],
    correct: 2,
  },
  {
    title: 'Что такое "CSS"?',
    variants: [
      'Язык для стилизации веб-страниц',
      'Язык программирования для работы с базами данных',
      'Протокол передачи данных',
    ],
    correct: 0,
  },
];


function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      {Boolean(correct  === 0) && (
           
           <h2>Вы не отгадали нихера</h2>
      
             )}
              {Boolean((correct)  === 1) && (
           
           <h2>Вы отгадали {correct} ответ из {questions.length}</h2>
      
             )}
      {Boolean((correct)  <= (questions.length) && (correct) > 1 && (correct) <5  ) && (
           
           <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      
             )}
      {Boolean((correct)  > (questions.length) && (correct) >5 ) && (
           
           <h2>Вы отгадали {correct} ответов из {questions.length}</h2>
      
             )}
             
      {Boolean((correct)  === (questions.length)) && (
           
           <h2>Вы отгадали все правильно</h2>
      
             )}
      
      <a href='/'>
      <button>Попробовать снова</button>
      </a>
    </div>
  );
}


function Game({step, question, onClickVariant}) {
  const percentage = Math.round((step / questions.length) * 100);
  console.log(percentage)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
       {
       question.variants.map((text, index) =>
       <li onClick={() => onClickVariant(index)} key={text}>{text}</li>)
       }
      </ul>
    </>
  );
}

function App() {
const [ step, setStep ] = useState(0);
const [correct,setCorrect] = useState(0);
const question = questions[step];
const onClickVariant = (index) => {
  setStep(step + 1 );
  if(index == question.correct){
    setCorrect(correct + 1)
  }
}


  return (
    <div className="App">

      { step !== questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant} /> :
       (<Result correct={correct}/>)}
      
     
    </div>
  );
}


ReactDOM.createRoot(rootElement).render(<App />);
