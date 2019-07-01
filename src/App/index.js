import React, {useState} from 'react';
import {Loader} from './Components/Loader'

function App() {

  const [Loading, setLoading] = useState(true);
  setTimeout(() => {
     setLoading(false);
  }, 4000)

  return (
    <div>
      {
        Loading ? <Loader /> : <div>Hola Mundo</div>
      }
    </div>
  );
}

export default App;
