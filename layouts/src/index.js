import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

// Подключаем Material Icons
const link = document.createElement('link');
link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
link.rel = "stylesheet";
document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
