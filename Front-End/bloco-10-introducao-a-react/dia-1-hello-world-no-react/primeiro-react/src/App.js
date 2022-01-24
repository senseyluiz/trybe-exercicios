import logo from './logo.svg';
import './App.css';


const Task = (value) =>{
  return (
    <li> {value} </li>
  );
}

const compromissos = ['Fazer café', 'Fazer 1 hora de treino', 'Tomar banho', 'Tomar café', 'Estudar Inglês por 1 hora', 'Revisar matéria do dia anterior', 'Dar uma olhada na matéria do dia', 'Ajudar algum colega com dúvidas', 'Almoçar', 'Ir para a mentoria técnica', 'Estudar matéria do dia', 'Fazer exercícios do dia', 'Ir para fechamento do dia']

function App() {
  return (

    <ul> {compromissos.map(compromisso => Task(compromisso))} </ul>
    
  );
}

export default App;
