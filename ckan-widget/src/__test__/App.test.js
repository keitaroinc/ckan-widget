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
import { shallow } from 'enzyme'
import App from '../App';


describe('App', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });

  it('should render correctly', () => {
    var config = {
      ckan_api: 'https://demo.org',
      ckan_organizations: undefined,
      ckan_groups: undefined,
      ckan_tags: undefined,
      ckan_facets: undefined,
      data_sort: 'title_string asc',
      result_page_size: 25,
      thumbnails_display: false
    }

    const component = shallow(
      <App config={config} />
    );
  });
});