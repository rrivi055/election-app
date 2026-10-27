import Vote from './components/Vote/Vote';
import './App.css';

const candidates = ['דני', 'רותי', 'יוסי'];

function App() {
  return (
    <div className="app">
      <h1>אפליקציית בחירות</h1>
      <div className="cards">
        {candidates.map((name) => (
          <Vote key={name} name={name} />
        ))}
      </div>
    </div>
  );
}

export default App;