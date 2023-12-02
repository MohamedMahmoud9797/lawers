import ReactDOM from 'react-dom'
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from './Api/Store/store.js';


// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
