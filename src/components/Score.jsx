
const Score = ({ date, score }) => {
    return (
      <div className="score text-center p-2 border rounded m-2">
        <p>Date: {date}</p>
        <p>Score: {score}</p>
      </div>
    );
  };
 
  export default Score