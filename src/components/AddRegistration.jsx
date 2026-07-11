import React from 'react'


const AddRegistration = () => {
    return (
        <div>
        
            <h2 className="text-center p-5">Campus Placement Registration</h2>

            <div className="container">
                <div className="row">
                    <div className="col col-12">
                        <div className="row g-4">

                            <div className="col col-12 col-sm-6">
                                <label className="form-label">Registration Number</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6">
                                <label className="form-label">Aadhar Number</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6">
                                <label className="form-label">Email Address</label>
                                <input type="email" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6">
                                <label className="form-label">Phone Number</label>
                                <input type="tel" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6">
                                <label className="form-label">Branch / Department</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6">
                                <label className="form-label">SSLC Mark (%)</label>
                                <input type="number" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6">
                                <label className="form-label">Plus Two Mark (%)</label>
                                <input type="number" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6">
                                <label className="form-label">UG Degree Name</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6">
                                <label className="form-label">UG Mark (%)</label>
                                <input type="number" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6">
                                <label className="form-label">PG Degree Name (Optional)</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6">
                                <label className="form-label">PG Mark (%) (Optional)</label>
                                <input type="number" className="form-control" />
                            </div>

                            <div className="col col-12">
                                <button className="btn btn-dark">
                                    Submit
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddRegistration