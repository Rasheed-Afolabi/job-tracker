import React, { useState } from "react";

const initialApplications = [
  {
    company: "Acme Corp",
    role: "Frontend Developer",
    location: "Remote",
    category: "Tech",
    status: "Applied",
    date: "2025-10-01",
    resume: "Resume_v2.pdf",
    link: "https://acme.com/careers",
    notes: "Reached out via LinkedIn"
  }
];

export default function App() {
  const [applications, setApplications] = useState(initialApplications);
  const [search, setSearch] = useState("");

  const filtered = applications.filter(app =>
    Object.values(app)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 32 }}>
      <h1>Job Application Tracker</h1>
      <input
        type="text"
        placeholder="Search (company, role, etc.)"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: 16, width: "50%" }}
      />
      <table border="1" cellPadding={8} style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Location</th>
            <th>Category</th>
            <th>Status</th>
            <th>Date Applied</th>
            <th>Résumé Version</th>
            <th>Link</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((app, idx) => (
            <tr key={idx}>
              <td>{app.company}</td>
              <td>{app.role}</td>
              <td>{app.location}</td>
              <td>{app.category}</td>
              <td>{app.status}</td>
              <td>{app.date}</td>
              <td>{app.resume}</td>
              <td>
                <a href={app.link} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </td>
              <td>{app.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginTop: 16 }}>
        <em>Add/edit/delete functionality coming soon!</em>
      </p>
    </div>
  );
}