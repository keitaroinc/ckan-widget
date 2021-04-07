/*
Copyright (c) 2018 Keitaro AB

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import React, { Component } from 'react'
import DatasetSearchBar from './components/container/DatasetSearchBar'
import DatasetInfoList from './components/container/DatasetInfoList'
import FacetList from './components/container/FacetList'
import DatasetSort from './components/container/DatasetSort'
import TotalDatasets from './components/container/TotalDatasets'
import DatasetsPerPage from './components/container/DatasetsPerPage'
import Pagination from './components/container/Pagination'
import MaterialIcon from 'material-icons-react'

class App extends Component {
    render() {
        const { config } = this.props

        return (
        <div className="App">
            <div className="bg-secondary header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <DatasetSearchBar />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="d-flex justify-content-between">
                                    <TotalDatasets />
                                    <DatasetsPerPage />
                                </div>
                                    <DatasetInfoList
                                        organizations={config.ckan_organizations}
                                        groups={config.ckan_groups}
                                        tags={config.ckan_tags}
                                        thumbnailsDisplay={config.thumbnails_display}
                                        resultPageSize={config.result_page_size}
                                        dataSort={config.data_sort}
                                        ckanFacets={config.ckan_facets}
                                        ckanAPI={config.ckan_api} />
                                <nav className="my-5">
                                    <Pagination />
                                </nav>
                            </div>
                            <div className="col-lg-4">
                                <DatasetSort />
                                <FacetList facetDisplay={config.facet_display} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;

