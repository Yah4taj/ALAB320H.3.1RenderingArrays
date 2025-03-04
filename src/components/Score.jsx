
const Score = ({ date, score }) => {
    return (
      <div className="score p-2 border rounded m-1">
        <p>Date: {date}</p>
        <p>Score: {score}</p>
      </div>
    );
  };
 
  export default Score