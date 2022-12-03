import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Jokes from './components/Jokes';

function App() {

    const [juokas, setJuokas] = useState(null);

    useEffect(() => {
        fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            console.log(data.jokes);
            setJuokas(data.jokes)
        },
        // ateičiai prisiminimas, čia error handlinti
        );
    }, []);

    return (
        <div>
            <div className='container'>
              {
                juokas?.map(j =><Jokes key={j.id} j = {j}/>)
              }
            </div> 
        </div>
    );
}

export default App;