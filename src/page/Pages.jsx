import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CreateApplication from './CreateAppliction'
import Nopage from './Nopage';
import DashBoard from './DashBoard';
import ProjectView from './ProjectView';
const Pages = () => {
  return (
   

      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/" element={<Navigate replace to="/perfx/dashboard" />} />
        <Route path="/create-application" element={<CreateApplication />} />
        <Route path='/projectview' element={<ProjectView />} />
        <Route path="*" element={<Nopage />} />
      </Routes>

  )
}

export default Pages