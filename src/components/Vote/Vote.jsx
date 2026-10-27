import { useState } from 'react';
import './Vote.css';

function Vote({ name }) {
  const [votes, setVotes] = useState(0);

  return (
    <div className={votes >= 5 ? 'vote-card popular' : 'vote-card'}>
      <h2>{name}</h2>
      <p className="votes">קולות: <strong>{votes}</strong></p>

      <div className="buttons">
        <button onClick={() => setVotes(votes + 1)}>הצבע</button>
      </div>
    </div>
  );
}

export default Vote;