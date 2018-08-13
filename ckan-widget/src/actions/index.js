import axios from 'axios'

import { PACKAGE_SEARCH } from './types'

const SITE_URL = 'https://trouver.datasud.fr'

export function packageSearch() {
  return dispatch => {
    axios.get(`${SITE_URL}/api/action/package_search`)
        .then(response => {
            dispatch({
                type: PACKAGE_SEARCH,
                payload: response.data
            })
        })
    }
}