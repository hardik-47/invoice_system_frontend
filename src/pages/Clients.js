import React from 'react'
import '../styles/Clients.css'

function Clients() {
  return (
    <div className="clients container mt-4">
     <div className="d-flex justify-content-between align-items-center mb-3">
  <h1 className="mb-0">Clients</h1>
  <button
    type="button"
    className="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#addClientModal"
  >
    Add Client
  </button>
</div>

      {/* Modal */}
      <div className="modal fade" id="addClientModal" tabIndex="-1" aria-labelledby="addClientModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            
            <div className="modal-header">
              <h5 className="modal-title" id="addClientModalLabel">Add Client</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="clientName" className="form-label">Name</label>
                  <input type="text" className="form-control" id="clientName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="clientEmail" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="clientEmail" />
                </div>
                <div className="mb-3">
                  <label htmlFor="clientPhone" className="form-label">Phone Number</label>
                  <input type="text" className="form-control" id="clientPhone" />
                </div>
                <div className="mb-3">
                  <label htmlFor="clientAddress" className="form-label">Address</label>
                  <input type="text" className="form-control" id="clientAddress" />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save Client</button>
            </div>

          </div>
        </div>
      </div>

      {/* <h2 className="mt-5">Client List</h2> */}
<table className="table table-striped mt-3">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Address</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {[
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        address: "123 Main St, City",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "9876543210",
        address: "456 Oak Ave, Town",
      },
    ].map((client, index) => (
      <tr key={client.id}>
        <td>{index + 1}</td>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>{client.address}</td>
        <td>
          <button className="btn btn-sm btn-warning me-2">Edit</button>
          <button className="btn btn-sm btn-danger">Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  )
}

export default Clients
