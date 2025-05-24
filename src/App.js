import logo from './logo.svg';
import "./App.css"
import Sidebar from './components/sidebar';
import Dashboard from './components/dashboard';
import Header from './components/header';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className='main-body'>
      <Header />
      <Dashboard />
      </div>
    </div>
  );
}

export default App;
