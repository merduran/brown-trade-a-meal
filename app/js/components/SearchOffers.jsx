import React from 'react';

export default class SearchOffers extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="div-search-body">
                <div className="col-sm-6">
                    <div className="input-group">
                        <input type="text" id="input-search" className="form-control" placeholder="Search" />
                        <span className="input-group-btn">
                            <button className="btn" type="submit" id="search-button">
                                <span className="glyphicon glyphicon-search"></span>
                            </button>  
                        </span>
                    </div>
                </div>
                <div className="dropdown">
                  <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Search As
                    <span className="caret" id = "dropdown-caret"></span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#">Anyone</a></li>
                    <li><a href="#">Buyer</a></li>
                    <li><a href="#">Seller</a></li>
                  </ul>
                </div>

            </div>
        )
  }
}
