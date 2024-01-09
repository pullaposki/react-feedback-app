interface FeedbackProps {
    goodCount: number;
    neutralCount: number;
    badCount: number;
}

const calculateAverage = ({goodCount, neutralCount, badCount}: FeedbackProps) => {
    const badCountWeighted = badCount * -1;
    return (goodCount + badCountWeighted) / 3;
}

const calculatePositivePercentage = ({goodCount, neutralCount, badCount}: FeedbackProps) => {
    const totalCount = goodCount + neutralCount + badCount;
    return totalCount > 0 ? ((goodCount / totalCount) * 100) : 0;
}

const Stats = (props: FeedbackProps) => {
    const renderStats = () => {
        const totalCount = props.goodCount + props.neutralCount + props.badCount;

        if (totalCount > 0) {
            return (
                <>
                    <h1>Stats</h1>
                    <p>good: {props.goodCount}</p>
                    <p>neutral: {props.neutralCount}</p>
                    <p>bad: {props.badCount}</p>
                    <p>average: {calculateAverage(props)}</p>
                    <p>positive: {calculatePositivePercentage(props)} %</p>
                </>
            );
        } else {
            return <h3>no feedback given</h3>;
        }
    }

    return renderStats();
}

export default Stats;