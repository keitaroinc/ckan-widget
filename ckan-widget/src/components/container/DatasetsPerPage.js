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
import { connect } from 'react-redux'
import MaterialIcon from 'material-icons-react'
import * as actions from '../../actions'

export class DatasetsPerPage extends Component {
  handleOnChange = e => {
    const {
      search,
      sort,
      facet_search,
      ckanAPI,
      organizations,
      groups,
      tags
    } = this.props

    this.props.packageSearch({ ckanAPI: ckanAPI,
      q: search,
      sort: sort,
      rows: e.target.value,
      fq: facet_search,
      organizations: organizations,
      groups: groups,
      tags: tags
     })
  }

  render() {
    return (
      <div className="ml-0">
        <div className="input-group">
          <div className="input-group-prepend">
            <label htmlFor="datasets_per_page" title="Results per page" className="input-group-text">
                <MaterialIcon icon="list" />
            </label>
          </div>
          <select id="datasets_per_page" className="custom-select" value={this.props.rows} onChange={this.handleOnChange}>
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    search: state.packageSearch.search,
    sort: state.packageSearch.sort,
    facet_search: state.packageSearch.facet_search,
    rows: state.packageSearch.rows,
    ckanAPI: state.packageSearch.ckanAPI,
    organizations: state.packageSearch.organizations,
    groups: state.packageSearch.groups,
    tags: state.packageSearch.tags
  }
}

export default connect(mapStateToProps, actions)(DatasetsPerPage)
