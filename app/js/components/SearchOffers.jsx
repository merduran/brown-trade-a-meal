import React from 'react';
import js from '../../js/search.js'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="div-search-body">
                <div className="col-sm-6 col-sm-offset-3">
                    <div className="input-group">
                        <input type="text" id="input-search" className="form-control" placeholder="Search" />
                        <span className="input-group-btn">
                            <button className="btn" type="submit">
                                <span className="glyphicon glyphicon-search"></span>
                            </button>  
                        </span>
                    </div>
                </div>
                Sort By
                <select className="selectpicker">
                    <option>Mustard</option>
                    <option>Ketchup</option>
                    <option>Relish</option>
                </select>

            </div>
        )
  }
}
