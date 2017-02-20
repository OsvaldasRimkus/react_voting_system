/**
 * Created by osvaldas on 17.2.7.
 */
var React = require('react');

var CountyRepresentativeListLineComponent = React.createClass ({
    onRemoveRep: function () {
        this.props.onDeleteRepresentative(this.props.repData.id);
    },

    render: function () {
        return (
            <div className="list-group-item passive">
                <div>
                    <div style={{height: "20px"}}>

                        <div className="col-md-4">{this.props.repData.firstName + " " + this.props.repData.lastName}</div>

                        {/*<div className="col-md-2">{this.props.repData.firstName}</div>*/}
                        {/*<div className="col-md-2">{this.props.repData.lastName}</div>*/}
                        <div className="col-md-3">{this.props.repData.county.name}</div>

                        <div className="col-md-4">{this.props.repData.email}</div>
                        <div className="col-md-1">
                            <span className="glyphicon glyphicon-remove-sign" id={"remove-representative-" + this.props.id}
                                  onClick={this.onRemoveRep}
                                  style={{ cursor: 'pointer', padding: '0px 15px 0px 15px' }}>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
});

module.exports = CountyRepresentativeListLineComponent;
