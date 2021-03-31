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
import DatasetSortConnected, { DatasetSort } from '../../../components/container/DatasetSort';


let component;
let store;
let mockPackageSearch;
const mockStore = configureMockStore();
const initialState = {
  packageSearch: {
    datasets: [],
    search: '',
    rows: 10,
    facets: [],
    total: 20,
    page: 1,
    sort: 'score desc, metadata_modified desc',
    error: '',
    facet_search: ''
  }
};

describe('DatasetSort', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    mockPackageSearch = jest.fn()
    component = shallow(
      <DatasetSort packageSearch={mockPackageSearch} />
    );

    shallow(
      <DatasetSortConnected store={store} />
    );
  })

  it('should be defined', () => {
    expect(DatasetSort).toBeDefined();
  });

  it('should handle input change', () => {
    component.instance().handleSort('score desc, metadata_modified desc')
    expect(mockPackageSearch.mock.calls.length).toEqual(1);
  })
})