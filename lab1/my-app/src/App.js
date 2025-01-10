import logo from './logo.svg';
import './App.css';
import Greeting from './Components/Greeting/greeting';
import BigCats from './Components/BigCats/BigCats';
import MoodChanger from './Components/Emoji/Emoji';
import Calculator from './Components/Calculator/calculator';



function App() {
  return (
    <div>
      
    <Greeting title='Greetings!' name='Rikki'>
      <div>This supports children props</div>
      </Greeting>

      <BigCats />
      <MoodChanger />
     <Calculator />
      </div>
  )
}

export default App;
