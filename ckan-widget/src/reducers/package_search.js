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

import {
  PACKAGE_SEARCH,
  ERROR
} from '../actions/types';

const INITIAL_STATE = {
  ckanAPI: 'https://trouver.datasud.fr',
  datasets: [],
  search_facets: {},
  organizations: [],
  groups: [],
  tags: [],
  search: '',
  rows: 10,
  facets: [],
  total: 0,
  page: 0,
  sort: 'score desc, metadata_modified desc',
  error: '',
  facet_search: '',
  firstCall: false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case PACKAGE_SEARCH:
      return {
        ...state,
        search_facets: action.payload.result.search_facets,
        datasets: action.payload.result.results,
        total: action.payload.result.count,
        search: action.search,
        page: action.page,
        rows: action.rows,
        facets: action.payload.result.search_facets,
        sort: action.sort,
        facet_search: action.facet_search,
        ckanAPI: action.ckanAPI,
        firstCall: action.firstCall,
        organizations: action.organizations,
        groups: action.groups,
        tags: action.tags
      };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
