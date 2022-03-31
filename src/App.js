
import './App.css';
import AppRouter from './Config/Router';
import { Provider } from 'react-redux';
import store from './store'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppRouter/>


    </div>
    </Provider>
  );
}

export default App;
