import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropsDisplayer from './components/PropsDisplayer/PropsDisplayer' // up the top

{/* Renders the component with no props */}
<PropsDisplayer />

{/* Renders the component with a single prop 'myProp' */}
<PropsDisplayer myProp="first prop"/>

{/* Renders the component with multiple props - add your own! */}
<PropsDisplayer prop1="first" prop2="second" prop3={3} />




function ExampleComponent() {
return (
    <div className="ExampleComponent componentBox">
        <h1>My Example Component</h1>
            <p>My first React component!</p>
</div>
)
}

function Welcome(props) {
return (
<div className="Welcome componentBox">
<h3>Welcome {props.name}!</h3>
</div>
)
}

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
{/* Renders the component with multiple props - add your own! */}
<PropsDisplayer prop1="first" prop2="second" prop3={3}/>
    </div>
  )
}

export default App



