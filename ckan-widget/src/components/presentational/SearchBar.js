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
import Autocomplete from 'react-autocomplete'
import { packageAutocomplete } from '../../actions'
import MaterialIcon from 'material-icons-react'


class SearchBar extends Component{
    constructor() {
        super()
        this.state = {
            value: '',
            isOpen: false,
            suggestions: []
        }
    }

    handleOnChange = (event, value) => {
        const { ckanAPI, organizations } = this.props
        this.setState({ value })

        if (value.length > 3) {
            packageAutocomplete({ ckanAPI, q: value, organization: organizations }).then(data => {
                const suggestions = data.result
                if (Array.isArray(suggestions) && suggestions.length) {
                    this.setState({ suggestions })
                }
            })
        } else {
            this.setState({ suggestions: [] })
        }
    }

    handleOnSubmit = event => {
        const value = this.state.value
        this.props.handleInputChange(event, value)
    }

    render(){
        return(
            <form onSubmit={this.handleOnSubmit}>
                <Autocomplete
                    inputProps={{
                        id: 'datasets-autocomplete',
                        placeholder: 'Rechercher...',
                        className: 'form-control form-control-lg border-0 autocomplete'
                    }}
                    wrapperStyle={{ position: 'relative', zIndex: 1000, width: '90%', display: 'inline-block' }}
                    value={this.state.value}
                    items={this.state.suggestions}
                    open={( this.state.value.length >= 1 && this.state.isOpen )}
                    onMenuVisibilityChange={isOpen => this.setState({ isOpen })}
                    autoHighlight={false}
                    getItemValue={(item) => item.title}
                    onSelect={(value, item) => {
                        this.setState({ value, suggestions: [item] })
                        this.props.handleInputChange(null, value)
                    }}
                    onChange={this.handleOnChange}
                    renderMenu={children => (
                        <div className="menu list-group">
                            {children}
                        </div>
                    )}
                    renderItem={(item, isHighlighted) => (
                        <div className={`list-group-item list-group-item-light ${isHighlighted ? 'active' : ''}`} key={item.title}>
                            {item.title}
                        </div>
                    )}
                />

                <button type="button" className="btn btn-search" onClick={this.handleOnSubmit}>
                    <MaterialIcon icon="search" size="medium" />
                </button>
            </form>
        )
    }
}

export default SearchBar
