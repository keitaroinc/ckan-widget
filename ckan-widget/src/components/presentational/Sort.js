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

import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';

class Sort extends Component {
  render() {
    return (
      <div className="mr-0">
      <div className="input-group">
        <div className="input-group-prepend">
            <label htmlFor="order_by" title="Order by" className="input-group-text"><MaterialIcon icon="sort" /></label>
        </div>
        <select id="order_by" className="custom-select" value={this.props.sort} onChange={e => this.props.handleSort(e.target.value)}>
          <option value="score desc, metadata_modified desc">Pertinence</option>
          <option value="title_string asc">Nom (A->Z)</option>
          <option value="title_string desc">Nom (Z->A)</option>
          <option value="metadata_modified desc">Dernière modification</option>
          <option value="views_recent desc">Popularité</option>
        </select>
      </div>
      </div>
    );
  }
}

export default Sort;
