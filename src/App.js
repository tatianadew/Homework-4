import { Provider } from "react-redux";
import "./App.css";
import store from './redux/store';
import AppRouter from "./routes/AppRouter"

function App() {
  return (
    // <div className='App'>
    //   <Spotify/>
    // </div>
    <Provider store={store}>
      <div className="App">
        <AppRouter />
      </div>
    </Provider>
    
  );
}
export default App;