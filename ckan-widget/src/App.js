import React, { Component } from 'react';
import './App.css';
import DatasetSearchBar from './components/container/DatasetSearchBar';
import DatasetInfoList from './components/container/DatasetInfoList';
import FacetList from './components/container/FacetList';
import DatasetSort from './components/container/DatasetSort';


class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <DatasetSearchBar />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
                <DatasetInfoList />
          </div>
          <div className="col-lg-4">
              <DatasetSort />
              <FacetList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
