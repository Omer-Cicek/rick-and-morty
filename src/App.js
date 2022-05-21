import './App.css';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContextProvider from './context/AppContext';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
    </div>
  );
}

export default App;
