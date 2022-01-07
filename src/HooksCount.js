//Hooks ko use krta waqt react ko import krna zaroori nhi hai wo react ki api ko samajh leta hai.
//Aik useEffect ka undr do useEffect nhi chl skta.
import { useState, useEffect } from 'react';

function HooksCount() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        document.title = `You clicked ${count} times`
        console.log('Component is render every count update becuase dependency given in dependency bracket is count');
    }, [count])

    //Ye wala useEffect jb chala jb HookCount component UI se clean hua.
    useEffect(() => {

        return () => {
            console.log('It works on component unmount');
        }
    }, [])

    return (
        <div>
            <p>You are clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <br />
            <br />
            <div>
                <label htmlFor='name'>Name:</label>
                <input id='name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </div>


        </div>
    )
}
export default HooksCount;