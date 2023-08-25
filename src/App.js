
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './Components/Pages/HomePage';
import OrderList from './Components/Pages/OrderList/OrderList';
import Header from "./Components/Pages/Header";
import { UserProvider } from "./Provider";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Routes >
            <Route path="/" index element={<HomePage />} />
            <Route path="orderList" element={<OrderList />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>

  );
}

export default App;
