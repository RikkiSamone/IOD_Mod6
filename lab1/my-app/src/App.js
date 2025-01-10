import logo from './logo.svg';
import './App.css';
import Greeting from './Components/Greeting/greeting';
import BigCats from './Components/BigCats/BigCats';
import MoodChanger from './Components/Emoji/Emoji';


function App() {
  return (
    <div>
    <Greeting title='Greetings!' name='Rikki'>
      <div>This supports children props</div>
      </Greeting>

      <BigCats />
      <MoodChanger />
     
      </div>
  )
}

export default App;
