import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropsDisplayer from './components/PropsDisplayer/PropsDisplayer' // up the top
import City from './components/City/City'
import Pets from './components/Pets/pets'
import FullName from './components/Names/Fullname.jsx'
import ComplexComment from './components/Complex/ComplexComment.jsx'
import UserInfo from './components/Exercise/UserInfo.jsx'
import Avatar from './components/Exercise/Avatar.jsx'
import Comment from './components/Exercise/Comment.jsx'
import FormattedDate from './components/Exercise/FormattedDate.jsx'

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
  );
}



function App() {
  //const [count, setCount] = useState(0)

// object storing comment data - passed as props
const Comment = {
date: new Date(),
text: 'I hope you enjoy learning React!',
author: { // author is also an object
name: 'Hello Kitty',
avatarUrl: 'https://placekitten.com/g/64/64',
},
};
  const exampleComment = {
    author: {
        name: "Jane Doe",
        avatarUrl: "https://via.placeholder.com/150"
    },
    text: "This is an example comment.",
    date: new Date()
  };
  
  
  return (
    <div>

      {/* Renders the component with a single prop 'myProp' */}
      <PropsDisplayer myProp="first prop" />

      {/* Renders the component with multiple props - add your own! */}
      <PropsDisplayer prop1="first" prop2="second" prop3={3} />

      {/* state and country are not specified, will use defaults */}
      <City name="Sydney" />

      {/* country is not specified, will use default */}
      <City name="Melbourne" state="VIC" />

      {/* all values are specified, won't use defaults */}
      <City name="Chicago" state="Illinois" country="USA" />

      {/* Everything in between <City> and </City> is passed as
props.children */}
      
      <City name="Newcastle">
        {/*Children */}
        <div>Newcastle is a harbour city in the Australian state of New South Wales.</div>
        <div><strong>Population:</strong> 322,278 (2016)</div>
      </City>

      <Pets name="Doggy" type="" colour="brown">
      </Pets>

      <FullName first="Kendrick" middle="'the GOAT'" last="Lamar"> </FullName>
      <ComplexComment author={Comment.author} date={Comment.date} text={Comment.text}></ComplexComment>
  
      <Comment
        author={exampleComment.author}
        text={exampleComment.text}
        date={exampleComment.date}
      />
    </div>
  );
}



export default App



