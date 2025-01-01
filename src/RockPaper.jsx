import './style.css'
import { useState,useRef } from 'react'


function RockPaper(){
    const [playerScore, setPlayerScore] = useState(0)
    const [computererScore, setComputerScore] = useState(0)
    const actions = ["✌","🖐","✊"]
    const [playerAction, setPlayerAction] = useState(2);
    const [computerAction, setComputerAction] = useState(2); 
    const resultRef = useRef()

    const Play = (action) =>{
       resultRef.current.textContent = ""

       setPlayerAction(2);
       setComputerAction(2);
       
       document.querySelector('.right-side .action').classList.add('animated1')
       document.querySelector('.left-side .action').classList.add('animated2')

       setTimeout(() =>{

            const randomAction = Math.floor(Math.random() * 3);
            setPlayerAction(action);       
            setComputerAction(randomAction);

            if(action === 0){
            
                if(randomAction == 0){
                    
                    resultRef.current.textContent = "Draw"
                }
                else if(randomAction == 1){
                
                    resultRef.current.textContent = "You Win"
                    setPlayerScore(s => s + 1);
                
                }
                else if(randomAction == 2){
                
                    resultRef.current.textContent = "You Lose"
                    setComputerScore(s => s + 1);
                }
            }
            else if(action == 1){
            
                if(randomAction == 0){
                
                    resultRef.current.textContent = "You Lose"
                    setComputerScore(s => s + 1);
                }
                else if(randomAction == 1){
                    resultRef.current.textContent = "Draw"
                }
                else if(randomAction == 2){
                    resultRef.current.textContent = "You Win"
                    setPlayerScore(s => s + 1);
                }
            }
            else if(action == 2){
            
                if(randomAction == 0){
                    resultRef.current.textContent = "You Win"
                    setPlayerScore(s => s + 1);
                }
                else if(randomAction == 1){
                    resultRef.current.textContent = "You Lose"
                    setComputerScore(s => s + 1);
                }
                else if(randomAction == 2){
                    resultRef.current.textContent = "Draw"
                }
            
            }   

            document.querySelector('.right-side .action').classList.remove('animated1');

            document.querySelector('.left-side .action').classList.remove('animated2');
       },2500)
      
     
       
    }
    const ResetGame = () =>{
        document.querySelector('.right-side .action').classList.remove('animated1');
        document.querySelector('.left-side .action').classList.remove('animated2');

        setComputerScore(0);
        setPlayerScore(0);
        setPlayerAction(2);
        setComputerAction(2);

        resultRef.current.textContent = " "
        

    }
    return(
        <>
            <div className='game-wrapper'>
                <div className='battle-wrapper'>
                    <div className='left-side '>
                        <div className='action'>{actions[playerAction]}</div>
                        <div className='label'>Player</div>
                    </div>
                    <div ref={resultRef} className='result'></div>
                    <div className='right-side'>
                        <div className='action'>{actions[computerAction]}</div>
                        <div className='label'>Computer</div>
                        </div>
                </div>
                <div className='actions-wrapper'>
                    
                    <div onClick={() =>Play(2)}>✊</div>
                    <div onClick={() =>Play(1)}>🖐</div>
                    <div onClick={() => Play(0)}>✌</div>
                </div>
                <div className='score-wrapper'>
                    <p className='score'>Player: {playerScore}</p>
                    <p className='score'>Computer: {computererScore}</p>
                </div>

                <button onClick={ResetGame} className='resetBtn'>Reset</button>
              
              
              
            </div>
        </>
    )
}

export default RockPaper