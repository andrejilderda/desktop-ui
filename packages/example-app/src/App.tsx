// import './App.css';
import Button from '../../components/Button/src/Button';

function App() {
  return (
    <div className="App">
      Button:
      <Button label="foo" disabled={false} variants={{ variant: 'accent' }} />
    </div>
  );
}

export default App;
