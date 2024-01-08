interface Props {
    handleButtonClick: (buttonType: string) => void;
}

const Buttons = ({handleButtonClick}:Props) => {
    
    return (
        <div>
            <button onClick={()=>handleButtonClick("good")}>good</button>
            <button onClick={()=>handleButtonClick("neutral")}>neutral</button>
            <button onClick={()=>handleButtonClick("bad")}>bad</button>
        </div>

    );
}

export default Buttons;