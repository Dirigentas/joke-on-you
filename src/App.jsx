import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {

    const [juokas, setJuokas] = useState();

    useEffect(() => {
        fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
        .then((res) => res.json())
        .then((data) => setJuokas(data));
    }, []);

    return (
        <div>
            <div className='container'>
              {
                juokas?.jokes.map(j =><div key={j.id}>
                    <h2>{j.joke}</h2>
                    <h2>{j.setup} {j.delivery}</h2>
                </div>)
              }
            </div> 
        </div>
    );
}

export default App;