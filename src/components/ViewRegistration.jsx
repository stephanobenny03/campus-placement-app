import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewRegistration = () => {
    const [data, changeData] = useState(
        []
    )
    const fetchData = () => {
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        () => {
            fetchData()

        }, []
    )
    return (
        <div
            style={{
                backgroundColor: "#F4F7F2",
                minHeight: "100vh"
            }}
        >

            <NavBar />

            <div className="container py-5">

                <h2
                    className="text-center mb-4 fw-bold"
                    style={{ color: "#2B5748" }}
                >
                    Student Registration Details
                </h2>


                <div
                    className="card shadow-sm border-0"
                    style={{
                        borderRadius: "15px",
                        overflow: "hidden"
                    }}
                >

                    <div className="table-responsive">

                        <table className="table table-hover mb-0">


                            <thead
                                style={{
                                    backgroundColor: "#2B5748",
                                    color: "#FFFFFF"
                                }}
                            >

                                <tr>

                                    <th className="py-3">
                                        Registration No
                                    </th>

                                    <th className="py-3">
                                        Full Name
                                    </th>

                                    <th className="py-3">
                                        Branch
                                    </th>

                                    <th className="py-3">
                                        SSLC Mark
                                    </th>

                                    <th className="py-3">
                                        Plus Two Mark
                                    </th>

                                    <th className="py-3">
                                        UG Mark
                                    </th>

                                    <th className="py-3">
                                        PG Mark
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {
                                    data.map(
                                        (value, index) => {

                                            return (

                                                <tr key={index}>

                                                    <td>
                                                        {value.regNo}
                                                    </td>

                                                    <td>
                                                        {value.fullName}
                                                    </td>

                                                    <td>
                                                        {value.branch}
                                                    </td>

                                                    <td>
                                                        {value.sslcMark} %
                                                    </td>

                                                    <td>
                                                        {value.plusTwoMark} %
                                                    </td>

                                                    <td>
                                                        {value.ugMark} %
                                                    </td>

                                                    <td>
                                                        {
                                                            value.pgMark
                                                                ? value.pgMark + " %"
                                                                : "N/A"
                                                        }
                                                    </td>

                                                </tr>

                                            )

                                        }
                                    )
                                }


                            </tbody>


                        </table>


                    </div>


                </div>


            </div>


        </div>
    )
}

export default ViewRegistration