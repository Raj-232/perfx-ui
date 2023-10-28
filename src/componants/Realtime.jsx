import React from 'react'
import Progressbar from './Progressbar'
import Realtimecard from './Realtimecard'
import SummaryCard from './SummaryCard'
import PieChart from './PieChart'
const Realtime = () => {
    return (
        <div className=" w-full">
            <div className="flex justify-center items-center space-x-8  w-full p-4">
                <Progressbar/>
                <Realtimecard Title={46} Testname={"Endurance testing"} />
                <Realtimecard Title={46} Testname={"Endurance testing"} />
                <Realtimecard Title={46} Testname={"Endurance testing"} />
                <Realtimecard Title={46} Testname={"Endurance testing"} />
                <Realtimecard Title={46} Testname={"Endurance testing"} />
   
            </div>
            <div className="flex items-center  p-4">
                <div className=" w-full">
                <PieChart/>
                </div>
                <div className=" w-full">
                   <PieChart/>
                </div>
                <div className=" w-full space-y-4 p-4">
                <SummaryCard Title={"loda Test"} Testname={"Endurance testing"} />
                <SummaryCard Title={"loda Test"} Testname={"Endurance testing"} />
                <SummaryCard Title={"loda Test"} Testname={"Endurance testing"} />
                <SummaryCard Title={"loda Test"} Testname={"Endurance testing"} />
                <SummaryCard Title={"loda Test"} Testname={"Endurance testing"} />
                <SummaryCard Title={"loda Test"} Testname={"Endurance testing"} />
                </div>
            </div>
        </div>
    )
}

export default Realtime