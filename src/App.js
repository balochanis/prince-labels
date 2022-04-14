
import './App.css';
import AppRouter from './Config/Router';
import { Provider } from 'react-redux';
import store from './store'


function App() {
  return (
    <Provider store={store}>
    <div className='app'>
      <AppRouter/>


    </div>
    </Provider>
  );
}

export default App;
