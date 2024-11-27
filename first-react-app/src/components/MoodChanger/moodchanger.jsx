import { useState } from "react";
function MoodChanger() {
  const [mood, setMood] = useState('happy');

  // Calls setMood with a fixed value of 'ecstatic'
  // begin with 'handle' prefix by convention
  const handleWinLotto = () => {
    setMood('ecstatic')
  }  

  // Calls setMood with a conditional state value
  const handleRunningLate = () => {
    let newMood = '😩';
    if (mood === '😩') newMood = 'really stressed'
    else if (mood === 'really stressed') newMood = 'giving up';

    setMood(newMood)
  }

  return (
    <div className="MoodChanger">
       Current Mood: {mood}
       {/* Using arrow functions */}
       <button onClick={() => setMood('tired')}>Stay Up Late</button>

       {/* Using custom event handler functions */}
       <button onClick={handleRunningLate}>Running Late</button>
       <button onClick={handleWinLotto}>Win Lotto</button>
    </div>
  )
}
// ++ add your own buttons to handle different moods!
/*// save in MoodChanger.jsx
function MoodChanger() {
    // two variables :
    // mood stores current mood, default happy
    // setMood is a function for updating mood
    const [mood, setMood] = useState('happy');

    return (
    
       
 <div>
<button onClick={() => setMood('tired')}>
    Stay Up Late
</button>

<button 
    onClick={() => setMood('hungry')}>
    Skip Lunch
</button>


            Current Mood: {mood}
        </div>)
    
}*/

export default MoodChanger;