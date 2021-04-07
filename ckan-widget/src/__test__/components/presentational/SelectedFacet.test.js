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
import SelectedFacet from '../../../components/presentational/SelectedFacet';

let component;
let onClick

describe('Sort', () => {
  beforeEach(() => {
    onClick = jest.fn();
    component = shallow(
      <SelectedFacet onClick={onClick} search_facets={{
        organization: {"items": [{ "count": 150, "display_name": "Org1", "name": "org1" }]}}} facet={'organization:org1'} />
    );

    shallow(
      <SelectedFacet onClick={onClick} search_facets={{}} facet={''} />
    );
  })

  it('should be defined', () => {
    expect(SelectedFacet).toBeDefined();
  });

  it('should handle button click', () => {
    const buttonElement = component.find('li')
    buttonElement.simulate('click', { target: { value: 'event' }})
    expect(onClick.mock.calls.length).toEqual(1);
  })
});