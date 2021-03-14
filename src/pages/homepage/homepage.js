import React from 'react';

function HomePage() {
    return (
      <div>
        <h1>Home Page</h1>
        <Router>
          <Link to="/vendors">Vendor List</Link>
        </Router>
      </div>
    );
  }

  export default HomePage;