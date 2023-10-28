import React from 'react'
import Table from '../componants/Table'
import { ProjectCard } from '../componants/ProjectCard'
import PieChart from '../componants/PieChart'
const DashBoard = () => {
  return (
    <div className="w-full space-y-8">
      <div className="flex   justify-center w-full space-x-6">
        <ProjectCard Nooftest={14} Testtitle={"Load Test"}/>
        <ProjectCard Nooftest={24} Testtitle={"Performance testing"}/>
        <ProjectCard Nooftest={19} Testtitle={"Stress testing"}/>
        <ProjectCard Nooftest={12} Testtitle={"Spike testing"}/>
        <ProjectCard Nooftest={14} Testtitle={"Functional testing"}/>
        <ProjectCard Nooftest={14} Testtitle={"Endurance testing"}/>
    
      </div>
      <div className="flex   justify-around items-center w-full">
        <div className="flex w-96">
        <PieChart/>
        </div>
        <div  className="flex space-x-6">
        <ProjectCard Nooftest={16} Testtitle={"No.of.Projects"}/>
        <ProjectCard Nooftest={14} Testtitle={"History of projects"}/>
        </div>
      </div>
      <div className="flex   justify-center w-full">
        <Table />
      </div>
    </div>
  )
}

export default DashBoard