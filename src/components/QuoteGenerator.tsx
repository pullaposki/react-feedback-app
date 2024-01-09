import {useState} from "react";
import data from "../data/quotes.json";

type DataType = { [key: string]: string };
type VoteCountsType = { [key: string]: number };

const getRandomKey = (quotes: DataType) => {
    const keys = Object.keys(quotes);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
};

const initializeVoteCounts = (quotes: DataType) => {
    const initialVoteCounts: VoteCountsType = {};
    for (let quoteKey of Object.keys(quotes)) {
        initialVoteCounts[quoteKey] = 0;
    }
    return initialVoteCounts;
};

const QuoteGenerator = () => {
    const quotes: DataType = data;

    const [quote, setQuote] = useState(quotes[getRandomKey(quotes)]);
    const [voteCounts, setVoteCounts] = useState(initializeVoteCounts(quotes));

    const getRandomQuote = () => {
        const key = getRandomKey(quotes);
        setQuote(quotes[key]);
    };

    const handleVote = () => {
        setVoteCounts((prevCounts) => {
            const prevCount = prevCounts[quote] || 0;
            return {
                ...prevCounts,
                [quote]: prevCount + 1 // Increment the vote count of the current quote
            };
        });
    };

    return (
        <div>
            <button onClick={getRandomQuote}>generate quote</button>
            <blockquote>"{quote}" <button onClick={handleVote}>vote</button> {voteCounts[quote]}</blockquote>
        </div>
    )
}

export default QuoteGenerator;