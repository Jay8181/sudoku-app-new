
import './App.css';
import React from 'react';
import Playground  from './Playground';
import WelcomePage  from './WelcomePage';
function App() {  
   const [difficulty,setDifficulty] = React.useState(0);
   function changeDifficulty(level)
   {
    setDifficulty(level);
   }

   return(<main >
               {(difficulty == 0) && <WelcomePage changeDifficulty={changeDifficulty}/>}
               {(difficulty > 0) && <Playground difficulty ={difficulty}/>}
          </main>)
}

export default App;



