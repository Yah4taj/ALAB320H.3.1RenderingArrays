

import Score from "./Score";

const Learner = ({ name, bio, scores }) => {
    return (
      <div className="learner bg-gray-900 p-4 rounded-lg m-2 text-center">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="mb-2">{bio}</p>
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
 
