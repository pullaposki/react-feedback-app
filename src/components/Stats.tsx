interface Props {
    goodCount: number;
    neutralCount: number;
    badCount: number;
    buttonType: string;
}

const Stats = ({ goodCount, neutralCount, badCount, buttonType}:Props) => {
    const handleButtonValue = () => {
        if (buttonType === "good") {
            console.log("good stats up")
            return <p>{goodCount}</p>
        }

        if (buttonType === "neutral"){
            console.log("neutral stats up")
            return <p>{neutralCount}</p>
        }

        if (buttonType === "bad"){
            console.log("bad stats up")
            return <p>{badCount}</p>
        }
    }
    
    handleButtonValue();
    
    return (
        <div>
            <h1>Stats</h1>
            <p>good: {goodCount}</p> 
            <p>neutral: {neutralCount}</p>
            <p>bad: {badCount}</p> 
        </div>
    );
}

export default Stats;