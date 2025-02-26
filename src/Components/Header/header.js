import React, { Component } from 'react';
import './header.css';

const headerData = [
  "Features", "Enterprise","Support","pricing"
]

class Header extends Component {
  render() {
    return (
        <nav class="header-navbar navbar navbar-expand-lg navbar-light box-shadow ps-4 pe-4">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Company name</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              {
                headerData.map((value) => (
                  <li class="nav-item">
                    <a class="nav-link" href="#">{value}</a>
                  </li>
                ))
              }
              <li class="nav-item">
                <button class="btn btn-outline-primary ms-3" href="#">Sign up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header