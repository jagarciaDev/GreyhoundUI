import Button from './components/Button.jsx';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>GreyhoundUI</h1>
      <Button onClick={() => alert('¡Botón clicado!')}>Haz clic aquí</Button>
    </div>
  );
}

export default App;
