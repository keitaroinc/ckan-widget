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

class DatasetDetails extends Component {
    renderResources = (resources, datasetName) => {
        let items = []
        resources.forEach((resource, i) => {
            let restricted = resource.restricted ? JSON.parse(resource.restricted) : 'N/A'
            items.push(
                <li className="list-group-item d-flex flex-wrap align-items-center" key={i}>
                    <span className="type">
                        <span className="badge badge-secondary">{resource.format}</span>
                    </span>
                    <a className="px-3 title" href={resource.url} target="_blank">{resource.name}</a>
                    <span className="ml-auto mr-3 date">{this.formatDate(resource.last_modified)}</span>
                    <span className="visibility">
                        <span className="badge badge-pill badge-dark">{restricted.level}</span>
                    </span>
                </li>
            )
        })

        return items
    }

    formatDate = date => {
        const d = new Date(date)
        return d.toUTCString()
    }

    render() {
        const {
            ckanAPI,
            name,
            notes,
            resources,
            dataset_creation_date,
            dataset_modification_date,
            dataset_publication_date,
            organization,
            collapsed
        } = this.props

        const orgName = organization !== null ? organization.title : 'N/A'
        const collapseClass = collapsed ? 'collapse' : ''

        return(
            <div className={"card-footer px-5 py-4 " + collapseClass}>
                <p className="lead">{notes}</p>
                <hr/>
                <ul className="text-muted list-inline">
                    <li className="list-inline-item"><strong>Créé le :</strong> {dataset_creation_date}</li>
                    <li className="list-inline-item"><strong>Publié le :</strong> {dataset_publication_date}</li>
                    <li className="list-inline-item"><strong>Modifié le :</strong> {dataset_modification_date}</li>
                    <li className="list-inline-item"><strong>Organisation:</strong> {orgName}</li>
                </ul>
                <div className="my-4">
                    <h3>Ressources</h3>
                    <ul className="list-inline">
                        { this.renderResources(resources, name) }
                    </ul>
                </div>
                <a className="btn btn-success mb-1" href={`${ckanAPI}/dataset/${name}`} target="_blank">
                    <MaterialIcon icon="open_in_new" size="tiny" color="#fff" />
                    <span className="ml-1">Voir sur Datasud.fr</span>
                </a>
            </div>
        )
    }
}

export default DatasetDetails
