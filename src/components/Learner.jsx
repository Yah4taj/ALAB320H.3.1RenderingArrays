

import Score from "./Score";

const Learner = ({ name, bio, scores }) => {
    return (
      <div className="learner bg-gray-100 p-4 rounded-lg m-2">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="mb-3">{bio}</p>
        <div className="scores">
          <h3 className="font-semibold mb-2">Scores:</h3>
          {scores.map((scoreObj, index) => (
            <Score 
              key={index} 
              date={scoreObj.date} 
              score={scoreObj.score} 
            />
          ))}
        </div>
      </div>
    );
  };

  export default Learner
 
  