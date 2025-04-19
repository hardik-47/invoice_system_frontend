import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import '../styles/Invoices.css';

function Invoices() {

    const navigate = useNavigate();
    const [items, setItems] = useState([
        { description: '', quantity: 1, price: 0 },
    ]);

    const handleItemChange = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = field === 'quantity' || field === 'price' ? parseFloat(value) || 0 : value;
        setItems(newItems);
    };

    const addItem = () => {
        setItems([...items, { description: '', quantity: 1, price: 0 }]);
    };

    const removeItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    const getTotal = () => {
        return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    };

    const dummyInvoices = [
        {
            id: 1,
            invoiceNumber: 'INV-001',
            clientName: 'John Doe',
            date: '2024-04-15',
            amount: '₹2500',
            status: 'Paid',
        },
        {
            id: 2,
            invoiceNumber: 'INV-002',
            clientName: 'Jane Smith',
            date: '2024-04-14',
            amount: '₹4300',
            status: 'Unpaid',
        },
    ];

    return (
        <div className="invoices p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Invoices</h1>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#addInvoiceModal"
                >
                    + Add Invoice
                </button>
            </div>

            {/* Modal */}
            <div
                className="modal fade"
                id="addInvoiceModal"
                tabIndex="-1"
                aria-labelledby="addInvoiceModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addInvoiceModalLabel">
                                Create New Invoice
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            {/* Add your invoice form here */}
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Client Name</label>
                                    <input type="text" className="form-control" />
                                </div>

                                {items.map((item, index) => (
                                    <div key={index} className="border p-3 mb-2">
                                        <div className="row g-2">
                                            <div className="col-md-4">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Description"
                                                    value={item.description}
                                                    onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-2">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Qty"
                                                    value={item.quantity}
                                                    onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-3">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Unit Price"
                                                    value={item.price}
                                                    onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-2 d-flex align-items-center">
                                                ₹{(item.quantity * item.price).toFixed(2)}
                                            </div>
                                            <div className="col-md-1 d-flex align-items-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => removeItem(index)}
                                                >
                                                    &times;
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <button type="button" className="btn btn-outline-primary mb-3" onClick={addItem}>
                                    + Add Item
                                </button>

                                <h5>Total: ₹{getTotal().toFixed(2)}</h5>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save Invoice
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <h3>Invoice List</h3>
            <table className="table table-bordered table-hover mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Invoice #</th>
                        <th>Client</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyInvoices.map((invoice, index) => (
                        <tr key={invoice.id}>
                            <td>{index + 1}</td>
                            <td>{invoice.invoiceNumber}</td>
                            <td>{invoice.clientName}</td>
                            <td>{invoice.date}</td>
                            <td>{invoice.amount}</td>
                            <td>
                                <span
                                    className={`badge ${invoice.status === 'Paid' ? 'bg-success' : 'bg-warning'
                                        }`}
                                >
                                    {invoice.status}
                                </span>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-info me-2" onClick={() => navigate(`/invoices/${invoice.id}`)}>View</button>
                                <button className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Invoices;
