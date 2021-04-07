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

import React, { Component } from "react";
import MaterialIcon from 'material-icons-react';

class SelectedFacet extends Component {

  render() {
    const { facet, search_facets } = this.props
    const facetType = facet.split(':')[0]
    let name = facet.split(':')[1]
    if (name !== undefined) {
      name = name.replace(/"/g, "")
    }

    let facetTitle = ''
    const selectedFacetType = search_facets[facetType]

    if ( selectedFacetType !== undefined) {
      const itemsFacetType = selectedFacetType.items

      itemsFacetType.forEach((type, i) => {
        if (type.name === name) {
          facetTitle = type.display_name
        }
      })
    }


    if (facetTitle !== ''){
      return (
        <li className="list-inline-item btn btn-primary" onClick={e => this.props.onClick(facet)}>
          <span className="mx-2">{facetTitle}</span>
          <MaterialIcon icon="close" size="tiny" />
        </li>
      );
    }

    return(null)
  }
}

export default SelectedFacet;
