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
import { mount } from 'enzyme';
import SearchBar from '../../../components/presentational/SearchBar';
import * as actions from '../../../actions'


let component;
let handleInputChange

describe('SearchBar', () => {
  beforeEach(() => {
    //Mocks packageAutocomplete from actions/index.js
    actions.packageAutocomplete = () => {
      return new Promise(
        function (resolve, reject) {
          const resp = {
            data: ['Suggestion1', 'Suggestion2']
          };
          resolve(resp);
        }
      );
    }

    handleInputChange = jest.fn()
    component = mount(
      <SearchBar handleInputChange={handleInputChange} />
    );
  })

  it('should be defined', () => {
    expect(SearchBar).toBeDefined();
  });

  it('should submit form', () => {
    const form = component.find('form')
    form.simulate('submit')
    expect(handleInputChange.mock.calls.length).toEqual(1);
  })

  it('should handle changes properly', () => {
    const input = component.find('input')
    input.simulate('submit')
    expect(handleInputChange.mock.calls.length).toEqual(1);
  })
});