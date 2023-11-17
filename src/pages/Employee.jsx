function Employee ({firstname, lastname, number}){


    return (
        <div className="alert alert-light">
            {lastname}, {firstname} <span class="badge bg-primary"> {number}</span>
            <button className="btn btn-danger btn-sm float-end"> Delete </button>
            <button className="btn btn-secondary btn-sm float-end me-2"> Edit </button>
        </div>
        
    )
}

export default Employee; 