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
import { connect } from 'react-redux'

import SelectedFacet from '../presentational/SelectedFacet'
import * as actions from '../../actions'

export class SelectedFacetList extends Component {

  onClick = facet => {
    const {
      search,
      sort,
      rows,
      selected_facets,
      ckanAPI,
      organizations,
      groups,
      tags
    } = this.props

    let newFacetQuery = selected_facets.replace(`${facet}+`, '')
    newFacetQuery = newFacetQuery.replace(`+${facet}`, '')
    newFacetQuery = newFacetQuery.replace(facet, '')

    this.props.packageSearch({
      ckanAPI: ckanAPI,
      q: search,
      rows: rows,
      sort: sort,
      fq: newFacetQuery,
      organizations: organizations,
      groups: groups,
      tags: tags
    })
  };

  render() {
    let { selected_facets, search_facets }  = this.props;
    let list = selected_facets.split('+');
    let facetSearch = []

    list.forEach((facet, i) => {
      facetSearch.push(<SelectedFacet facet={facet} search_facets={search_facets} onClick={this.onClick} key={i} />);
    });

    return facetSearch;
  }
}

export default connect(null, actions)(SelectedFacetList);
