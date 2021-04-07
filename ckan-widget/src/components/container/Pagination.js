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
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';

import * as actions from '../../actions'


export class Pagination extends Component {
  handlePagination = page => {
    const {
      search,
      rows,
      sort,
      ckanAPI,
      facet_search,
      organizations,
      groups,
      tags
    } = this.props
    const start = page * rows

    this.props.packageSearch({
      ckanAPI: ckanAPI,
      q: search,
      start: start,
      rows: rows,
      page: page,
      sort: sort,
      fq: facet_search,
      organizations: organizations,
      groups: groups,
      tags: tags
    })
  }

  render() {
    const { page, total, rows } = this.props;
    const pageCount = Math.ceil(total / rows)

    if (pageCount > 1) {
      return (
        <ReactPaginate
          previousLabel="Précédent"
          nextLabel="Suivant"
          breakLabel={<a role="button" className="page-link">...</a>}
          breakClassName="page-item disabled"
          forcePage={page}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={data => this.handlePagination(data.selected)}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          activeClassName="active"
          disabledClassName="disabled"
          previousClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
        />
      );
    }

    return (null);
  }
}

const mapStateToProps = state => {
  return {
    search: state.packageSearch.search,
    sort: state.packageSearch.sort,
    rows: state.packageSearch.rows,
    total: state.packageSearch.total,
    page: state.packageSearch.page,
    ckanAPI: state.packageSearch.ckanAPI,
    facet_search: state.packageSearch.facet_search,
    organizations: state.packageSearch.organizations,
    groups: state.packageSearch.groups,
    tags: state.packageSearch.tags
  }
}

export default connect(mapStateToProps, actions)(Pagination)
