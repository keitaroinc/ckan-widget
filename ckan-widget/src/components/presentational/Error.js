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
import MaterialIcon from 'material-icons-react'

class Error extends Component {
    constructor() {
        super()
        this.state = { show: true }
    }

    handleClose = e => {
        this.setState({ show: false })
    }

	render() {
        if (this.state.show) {
            return(
                <div className="my-3 alert alert-warning alert-dismissible" role="alert">
                    <strong>Upps, error!</strong> {this.props.error};
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.handleClose}>
                    <MaterialIcon icon="close" size="tiny" color="inherit" />
                    </button>
                </div>
            )
        }

        return(null)
  	}
}

export default Error
