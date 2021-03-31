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
import Error from '../../../components/presentational/Error';

let component

describe('Error', () => {
  beforeEach(() => {
    component = shallow(
      <Error error={'Network error!'} />
    );
  })

  it('should be defined', () => {
    expect(Error).toBeDefined();
  });

  it('should be shown at the begging', () => {
    expect(component.find('div.alert').length).toEqual(1);
  })

  it('should close the alert', () => {
    expect(component.instance().state.show).toBe(true)

    const alert = component.find('button')
    alert.simulate('click')
    expect(component.instance().state.show).toBe(false)
    expect(component.find('div.alert').length).toEqual(0);
  })
});
