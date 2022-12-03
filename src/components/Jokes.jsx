export default function Jokes({j}) {
    return (
            <div>
                {j.joke && <h2>{j.joke}</h2>}
                {j.setup && <h2>{j.setup}<hr /><span style={{color: '#840000'}}>{j.delivery}</span></h2>}
            </div>
                
                
                )
            }