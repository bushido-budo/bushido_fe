import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import StudentDashboard from '../StudentDashboard/StudentDashboard';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  return (
      <main>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/dashboard/student_id' element={<StudentDashboard />} />
          <Route path='/dashboard/admin' element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </main>
  );
}

export default App;
