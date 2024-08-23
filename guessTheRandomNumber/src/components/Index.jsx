import { useState, useEffect } from 'react';

function Index(){
    const [attempts, setAttempts] = useState(0);
    const [target, setTarget] = useState(0);
    const [message, setMessage] = useState('');
    const [userGuess, setUserGuess] = useState('');

    useEffect(() => {
        generateRandomNumber();
    }, []);
    
    const generateRandomNumber = () => {
        const number = Math.floor(Math.random() * 1000) + 1;
        console.log('number is', number);
        setTarget(number);
        setAttempts(0);
        setUserGuess('');
        setMessage('');
    }

    const handleGuess = () => {
        const guess = parseInt(userGuess);
        setAttempts(attempts + 1);

        if(isNaN(guess)){
            console.log('Wrong number');
            setMessage('Please enter a valid number.');
        }
        else if(guess === target){
            console.log('Win', attempts);
            setMessage(`Congratualations! You guessed the number in ${attempts + 1} attempts.`);
        }
        else if(guess < target){
            console.log('Too low');
            setMessage('Too low! Try a higher number.');
        }
        else if(guess > target){
            console.log('Too high');
            setMessage('Too high! Try a lower number.');
        }
    };

    return (
        <div className='w-full h-full'
            style={{
                backgroundColor:'#140B47',
            }}
        >
            <div className='w-auto h-40% gap-3 flex flex-col justify-center items-center rounded border-2 border-black'
                style={{
                    backgroundColor:'#EB9C0A',
                }}
            >
                <h1 className='text-4xl font-bold pt-3 m-2'>Welcome to the Guess The Number Game!</h1>
                <p className='text-xl pt-2 pb-2'>Try to guess the number between 1 to 1000.</p>
                <button onClick={generateRandomNumber}
                    className='border-black border-2 h-10 w-96 m-5 rounded text-white'
                    style={{
                        backgroundColor:'#140B47',
                    }}>
                    New Game</button>
            </div>
            <div className='w-auto h-56 mt-4 gap-5 border-black border-2 flex flex-col justify-center items-center'
                style={{
                    backgroundColor:'#EB9C0A',
                }}
            >
                <h1 className='text-3xl font-bold pt-4'>Enter your guess below</h1>
                <input
                    type='number'
                    value={userGuess}
                    onChange={(e) => setUserGuess(e.target.value)}
                    className='rounded border-black border-2 h-10 w-96'
                />
                <button onClick={handleGuess}
                    className='border-black border-2 h-10 w-96 rounded m-5 text-white' 
                    style={{
                        backgroundColor:'#140B47',
                    }}
                >Submit Guess</button>
            </div>
            <div className='w-auto h-40 mt-4 border-black border-2 rounded flex flex-col justify-center items-center'
                style={{
                    backgroundColor:'#EB9C0A',
                }}
            >
                <p className='font-bold text-xl pb-4'>Attempts: {attempts}</p>
                <p className='font-bold text-xl pb-4'>{message}</p>
            </div>
        </div>
    );
}

export default Index;