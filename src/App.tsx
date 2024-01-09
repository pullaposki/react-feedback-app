import Buttons from "./components/Buttons.tsx";
import Stats from "./components/Stats.tsx";
import {useState} from "react";


function App() {
    const [goodCount, setGoodCount] = useState(0);
    const [neutralCount, setNeutralCount] = useState(0);
    const [badCount, setBadCountCount] = useState(0);

    const [buttonType, setButtonType] = useState("");
    const handleButtonClicks=(buttonType:string):void=>{
        if(buttonType === "good"){
            setGoodCount(goodCount + 1);
        }
        
        if(buttonType === "neutral"){
            setNeutralCount(neutralCount + 1);
        }

        if(buttonType === "bad"){
            setBadCountCount(badCount + 1);
        }
        
        setButtonType(buttonType);
    }
    
  return (
    <>
      <h1>give feedback</h1>
        <Buttons handleButtonClick={handleButtonClicks}/>
        <Stats goodCount={goodCount} 
               neutralCount={neutralCount}
               badCount={badCount}
               buttonType={buttonType} />
    </>
  )
}

export default App
