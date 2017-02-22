var React = require('react');

var SearchCandidatesHeaderComponent = React.createClass({
    render: function() {
        return (
            <div className="unit">
                  <div className="list-group-item">
                    <div>
                      <div style={{height: "20px"}}>
                        <div className="col-md-4">
                            Vardas Pavardė
                        </div>
                        <div className="col-md-5">
                            Partija
                        </div>
                        <div className="col-md-3">Kita info</div>
                      </div>
                    </div>
                  </div>
            </div>
        );
    }
});

module.exports = SearchCandidatesHeaderComponent;
