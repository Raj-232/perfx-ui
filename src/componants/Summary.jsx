import React from 'react'
import Table from '../componants/Table'
import PieChart from '../componants/PieChart'
import SummaryCard from './SummaryCard'
const Summary = () => {
    return (
        <div className="  ">
            <div className="flex   ">
                <div className="grid grid-cols-2 gap-1 justify-evenly    w-full ">
                    <div>
                        <SummaryCard Title={"Test Name"} Testname={"Endurance testing"} />
                    </div>
                    <div>
                        <SummaryCard Title={"Test Name"} Testname={"Endurance testing"} />
                    </div>
                    <div>
                        <SummaryCard Title={"Test Name"} Testname={"Endurance testing"} />
                    </div>
                    <div>
                        <SummaryCard Title={"Test Name"} Testname={"Endurance testing"} />
                    </div>
                    <div>
                        <SummaryCard Title={"Test Name"} Testname={"Endurance testing"} />
                    </div>
                    <div>
                        <SummaryCard Title={"Test Name"} Testname={"Endurance testing"} />
                    </div>
                    <div>
                        <SummaryCard Title={"Test Name"} Testname={"Endurance testing"} />
                    </div>
                    <div>
                        <SummaryCard Title={"Test Name"} Testname={"Endurance testing"} />
                    </div>

                    <div className="col-span-2">
                        <PieChart/>
                    </div>
                </div>
                <div className="flex   w-full">
                    <div className=" p-4   w-full space-y-2">
                        <SummaryCard Title={"Test Name"} Testname={"Endurance testing"} />
                        <SummaryCard Title={"Test Name"} Testname={"Endurance testing"} />
                        <SummaryCard Title={"Test Name"} Testname={"Endurance testing"} />
                        <SummaryCard Title={"Test Name"} Testname={"Endurance testing"} />
                        <SummaryCard Title={"Test Name"} Testname={"Endurance testing"} />
                        <SummaryCard Title={"Test Name"} Testname={"Endurance testing"} />
                    </div>
                    <div className=" p-4  w-full space-y-2">
                        <SummaryCard Title={"Test Name"} Testname={"Endurance testing"} />
                        <SummaryCard Title={"Test Name"} Testname={"Endurance testing"} />
                        <SummaryCard Title={"Test Name"} Testname={"Endurance testing"} />
                        <SummaryCard Title={"Test Name"} Testname={"Endurance testing"} />
                        <SummaryCard Title={"Test Name"} Testname={"Endurance testing"} />
                        <SummaryCard Title={"Test Name"} Testname={"Endurance testing"} />
                    </div>
                </div>
            </div>
            <div className="flex   p-4 ">
                <div className="flex   p-4 w-full">
                    <Table />
                </div>
                <div className="flex   p-4 w-full">
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Summary