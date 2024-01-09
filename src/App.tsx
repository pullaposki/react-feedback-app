import Buttons from "./components/Buttons.tsx";
import Stats from "./components/Stats.tsx";
import {useState} from "react";
import QuoteGenerator from "./components/QuoteGenerator.tsx";

function App() {
    const [goodCount, setGoodCount] = useState(0);
    const [neutralCount, setNeutralCount] = useState(0);
    const [badCount, setBadCount] = useState(0);

    const handleButtonClicks=(buttonType:string):void=>{
        switch(buttonType) {
            case "good":
                setGoodCount(goodCount + 1);
                break;
            case "neutral":
                setNeutralCount(neutralCount + 1);
                break;
            case "bad":
                setBadCount(badCount + 1);
                break;
            default:
                console.log("Invalid button type");
        }
    }
    
  return (
    <>
      <h1>give feedback</h1>
        <Buttons handleButtonClick={handleButtonClicks}/>
        <Stats goodCount={goodCount} 
               neutralCount={neutralCount}
               badCount={badCount} />
        <QuoteGenerator/>
    </>
  )
}

export default App
