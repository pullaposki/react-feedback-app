    import Buttons from "./components/Buttons.tsx";
import Stats from "./components/Stats.tsx";
import {useState} from "react";


function App() {
    const [goodValue, setGoodValue] = useState(0);
    const [neutralValue, setNeutralValue] = useState(0);
    const[buttonType, setButtonType] = useState("");
    const handleButtonClicks=(buttonType:string):void=>{
        if(buttonType === "good"){
            setGoodValue(goodValue + 1);
        }
        
        if(buttonType === "neutral"){
            setNeutralValue(neutralValue + 1);
        }
        setButtonType(buttonType);
    }
    
  return (
    <>
      <h1>give feedback</h1>
        <Buttons handleButtonClick={handleButtonClicks}/>
        <Stats value={goodValue} buttonType={buttonType} />
    </>
  )
}

export default App
