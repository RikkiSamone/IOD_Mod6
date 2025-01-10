import { useState } from "react";

function MoodChanger() {
  const [mood, setMood] = useState(' 😁 ');

  // Calls setMood with a fixed value of 'ecstatic'
  // begin with 'handle' prefix by convention

  // Calls setMood with a conditional state value
  const stayUpLate = () => {
    let newMood = ' 😩 ';
    if (mood === ' 😩 ') newMood = ' 😭 ' 
    else if (mood === ' 😭 ') newMood = ' 🤯 ';

    setMood(newMood)
  }

  return (
    <div className="MoodChanger">
       Current Mood: {mood}
       {/* Using arrow functions */}
       <button onClick={stayUpLate}>Stay Up Late</button>
    
    </div>
  )
}

export default MoodChanger;