
// AddContact.jsx
export default function AddContact() {

return (
        <div className="container">

            <div className="row">

                <div className="col-md-8 col-lg-6 mx-auto mt-5">
                    
                    <h1 className="text-center mb-4 mb-5">Add a new contact</h1>

                    <form action="">
                        
                        <div className="mb-3"> 
                            <label className="form-label fw-bold" htmlFor="">Full Name</label>
                            <input className="form-control" type="text" placeholder="Full Name" />
                        </div>

                        <div className="mb-3"> 
                            <label className="form-label fw-bold" htmlFor="">Email</label>
                            <input className="form-control" type="email" placeholder="Enter Email" />
                        </div>

                        <div className="mb-3"> 
                            <label className="form-label fw-bold" htmlFor="">Phone</label>
                            <input className="form-control" type="tel" placeholder="Enter Phone" />
                        </div>

                        <div className="mb-3"> 
                            <label className="form-label fw-bold" htmlFor="">Address</label>
                            <input className="form-control" type="text" placeholder="Enter Address" />
                        </div>

                        <button className="btn btn-primary w-100" type="submit">save</button>

                        
                        
                    </form>

                </div>

            </div>

        </div>
    )
};