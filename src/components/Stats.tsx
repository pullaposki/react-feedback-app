interface Props {
    value: number;
    buttonType: string;
}

const Stats = ({ value, buttonType}:Props) => {
    
    const handleButtonValue = () => {
        if (buttonType === "good") {
            console.log("good stats up")
            return <p>good: {value}</p>
        }

        if (buttonType === "neutral"){
            console.log("neutral stats up")
            return <p>neutral: {value}</p>
        }
    }
    
    handleButtonValue();
    
    return (
        <div>
            <h1>Stats</h1>
            <div>{handleButtonValue()}</div>
        </div>
    );
}

export default Stats;