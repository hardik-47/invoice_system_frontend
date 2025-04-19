import React from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
  const stats = {
    totalClients: 12,
    totalInvoices: 45,
    totalRevenue: 120000,
    pendingPayments: 8
  };

  const recentInvoices = [
    { id: 101, client: 'John Doe', amount: 5000, status: 'Paid', date: '2025-04-10' },
    { id: 102, client: 'Jane Smith', amount: 8000, status: 'Unpaid', date: '2025-04-11' },
    { id: 103, client: 'Bob Johnson', amount: 3000, status: 'Paid', date: '2025-04-12' },
    { id: 104, client: 'Alice White', amount: 6500, status: 'Unpaid', date: '2025-04-13' },
    { id: 105, client: 'Charlie Brown', amount: 7200, status: 'Paid', date: '2025-04-14' }
  ];

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      <div className="stats-container">
        <div className="stat-card">Total Clients<br /><strong>{stats.totalClients}</strong></div>
        <div className="stat-card">Total Invoices<br /><strong>{stats.totalInvoices}</strong></div>
        <div className="stat-card">Total Revenue<br /><strong>₹{stats.totalRevenue.toLocaleString()}</strong></div>
        <div className="stat-card">Pending Payments<br /><strong>{stats.pendingPayments}</strong></div>
      </div>

      <h3>Recent Invoices</h3>
      <table className="recent-invoices">
        <thead>
          <tr>
            <th>ID</th>
            <th>Client</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {recentInvoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.id}</td>
              <td>{invoice.client}</td>
              <td>₹{invoice.amount}</td>
              <td className={invoice.status === 'Paid' ? 'paid' : 'unpaid'}>{invoice.status}</td>
              <td>{invoice.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
