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

import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import FacetListConnected, { FacetList } from '../../../components/container/FacetList';


let component;
let store;
let mockPackageSearch;
const mockStore = configureMockStore();
const initialState = {
  packageSearch: {
    datasets: [],
    search: '',
    rows: 10,
    facets: {
      datatype: { items: [{ count: 392, display_name: "name", name: "name" }], title: "datatype" },
      groups: undefined,
      license_id: undefined,
      organization: undefined,
      res_format: undefined,
      support: undefined,
      tags: undefined,
      update_frequency: undefined
    },
    total: 20,
    page: 1,
    sort: 'score desc, metadata_modified desc',
    error: '',
    facet_search: ''
  }
};

describe('FacetList', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    mockPackageSearch = jest.fn()
    const facets = {
      datatype: { items: [{ count: 392, display_name: "name", name: "name" }], title: "datatype" },
      groups: undefined,
      license_id: undefined,
      organization: undefined,
      res_format: undefined,
      support: undefined,
      tags: undefined,
      update_frequency: undefined
    }
    component = shallow(
      <FacetList facets={facets} facet_search={'organization:org1'} packageSearch={mockPackageSearch} />
    );

    shallow(
      <FacetList facets={facets} facetDisplay={['datatype']} packageSearch={mockPackageSearch} />
    );

    shallow(
      <FacetListConnected store={store} />
    );
  })

  it('should be defined', () => {
    expect(FacetList).toBeDefined();
  });

  it('should handle onClick event', () => {
    component.instance().onClick('data')
    expect(mockPackageSearch.mock.calls.length).toEqual(1);
  })
})