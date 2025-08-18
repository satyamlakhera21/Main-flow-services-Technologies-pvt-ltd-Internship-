import React from "react";

function Dashboard() {
  const today = new Date().toLocaleDateString();

  return (
    <div className="container mt-5">
      {/* Welcome Section */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <h2 className="card-title">Welcome to Dashboard 🎉</h2>
          <p className="text-muted">Today is {today}</p>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card text-center shadow">
            <div className="card-body">
              <h4 className="card-title">120</h4>
              <p className="card-text text-muted">Students</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow">
            <div className="card-body">
              <h4 className="card-title">12</h4>
              <p className="card-text text-muted">Teachers</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow">
            <div className="card-body">
              <h4 className="card-title">8</h4>
              <p className="card-text text-muted">Subjects</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title mb-3">Recent Activity</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              New student registered: <b>Rohit Biswash</b>
            </li>
            <li className="list-group-item">
              Attendance updated for <b>JAVA PROGRAMMING</b>
            </li>
            <li className="list-group-item">
              Teacher <b>Mr. Sharma</b> assigned to <b>Web Development</b>
            </li>
          </ul>
          <button className="btn btn-primary mt-3">View All</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
