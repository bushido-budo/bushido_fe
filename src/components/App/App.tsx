import { FC, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Admin } from "../../interfaces/interfaces"
import { Student } from '../../interfaces/interfaces';
import adminData from "../../data/adminData"
import studentData from "../../data/studentData"
import Header from '../Header/Header';
import Login from '../LogIn/LogIn';
import LandingPage from '../LandingPage/LandingPage';
import StudentDashboard from '../StudentDashboard/StudentDashboard';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import Footer from '../Footer/Footer';
import './App.css';

const App: FC = () => {
  const [adminInfo, setAdminData] = useState<Admin>(Object)
  const [studentInfo, setStudentData] = useState<Student>(Object)

  useEffect(():void => { // For testing purposes
    setAdminData(adminData)
    setStudentData(studentData)
  }, [])

  return (
      <main>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard/student_id' element={<StudentDashboard studentInfo={studentInfo} />} />
          <Route path='/dashboard/admin' element={<AdminDashboard adminInfo={adminInfo} />} />
        </Routes>
        <Footer />
      </main>
  );
}

export default App;
