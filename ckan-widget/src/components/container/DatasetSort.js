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

import Sort from '../presentational/Sort'
import * as actions from '../../actions'


export class DatasetSort extends Component{
    handleSort = sort => {
        const {
            search,
            rows,
            facet_search,
            ckanAPI,
            organizations,
            groups,
            tags
        } = this.props
        this.props.packageSearch({
            ckanAPI: ckanAPI,
            q: search,
            sort: sort,
            rows: rows,
            fq: facet_search,
            organizations: organizations,
            groups: groups,
            tags: tags
        })
    }

    render(){
        return (<Sort handleSort={this.handleSort} sort={this.props.sort} />)
    }
}

const mapStateToProps = state => {
    return {
        search: state.packageSearch.search,
        rows: state.packageSearch.rows,
        sort: state.packageSearch.sort,
        facet_search: state.packageSearch.facet_search,
        ckanAPI: state.packageSearch.ckanAPI,
        organizations: state.packageSearch.organizations,
        groups: state.packageSearch.groups,
        tags: state.packageSearch.tags
    }
}

export default connect(mapStateToProps, actions)(DatasetSort);
