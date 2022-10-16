import React from "react";
import Header from '../Header/header'
import ContentHeader from "../ContentHeader/ContentHeader";
import './dashboard.css'

function Dashboard() {
  return (
    <div className="App">
      <div className="container">
        <aside className="drawer">
          <Header />
        </aside>
        <main className="main">
          <ContentHeader />
        </main>
      </div>
    </div>
    // <div className="App">
    //   <Header />
    // </div>
  );
}

export default Dashboard;