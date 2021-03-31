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
import Sort from '../../../components/presentational/Sort';

let component;
let handleSort

describe('Sort', () => {
  beforeEach(() => {
    handleSort = jest.fn();
    component = shallow(
      <Sort handleSort={handleSort} sort={'score desc, metadata_modified desc'} />
    );
  })

  it('should be defined', () => {
    expect(Sort).toBeDefined();
  });

  it('should handle change correctly', () => {
    const selectElement = component.find('select')
    selectElement.simulate('change', {target: {value: 25}})
    expect(handleSort.mock.calls.length).toEqual(1);
  })
});
