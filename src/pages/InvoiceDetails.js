import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

function InvoiceDetails() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    // Replace with actual API later
    const dummyData = {
      id,
      client: { name: 'John Doe', email: 'john@example.com' },
      date: '2024-04-17',
      items: [
        { name: 'Design Work', quantity: 2, price: 500 },
        { name: 'Hosting', quantity: 1, price: 200 }
      ]
    };
    setInvoice(dummyData);
  }, [id]);

  const generatePDF = () => {
    const element = document.getElementById('invoice');
    html2pdf().from(element).save(`invoice-${id}.pdf`);
  };

  if (!invoice) return <p>Loading...</p>;

  const total = invoice.items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="invoice-details">
      <div id="invoice" style={{ padding: '20px', border: '1px solid #ccc' }}>
        <h2>Invoice #{invoice.id}</h2>
        <p><strong>Client:</strong> {invoice.client.name}</p>
        <p><strong>Email:</strong> {invoice.client.email}</p>
        <p><strong>Date:</strong> {invoice.date}</p>

        <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Item</th><th>Qty</th><th>Price</th><th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>₹{item.price}</td>
                <td>₹{item.quantity * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={{ textAlign: 'right', marginTop: '20px' }}>Total: ₹{total}</h3>
      </div>

      <button onClick={generatePDF} className="btn btn-primary mt-3">Download PDF</button>
    </div>
  );
}

export default InvoiceDetails;
