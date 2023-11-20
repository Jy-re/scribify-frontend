
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/register/Register';
import Login from './components/login/Login';
import './App.css'
import WriterDashboard from './components/dashboard/writer-dashboard/WriterDashboard';
import ReaderDashboard from './components/dashboard/reader-dashboard/ReaderDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path='/dashboard' element={<ReaderDashboard />} />
      </Routes>
        
    </Router>
  );
}

export default App;
