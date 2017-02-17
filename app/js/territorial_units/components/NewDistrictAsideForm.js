var React = require('react');
var NewCountyAsideFormContainer = require('../containers/tiny_containers/NewCountyAsideFormContainer');
var Validations = require('../../utils/Validations');

var NewDistrictAsideForm = React.createClass({
    getInitialState: function() {
        return ({ jsErrors: [] });
    },
    componentDidUpdate()
    {
        $('.toggleInput').bootstrapToggle();
    },
    reportErrors: function(errors) {
        if (errors.length == 0) {
            this.setState({ jsErrors: [] });
        } else {
            var errors = Validations.prepareErrors(errors);
            this.setState({ jsErrors: errors });
        }
    },
    create: function() {
        //e.preventDefault();
        var errors = Validations.checkErrorsDistrictAsideForm(this.props.name);
        if (errors.length > 0) {
            this.setState({ jsErrors: Validations.prepareErrors(errors) });
        } else {
            this.setState({ jsErrors: [] });
            this.props.create();
        }
    },
    springErrors: function() {
        return Validations.prepareErrors(this.props.springErrors);
    },
    countiesHeader: function() {
        return (this.props.counties.length == 0) ? <span></span> : <p>Apylinkės:</p>;
    },
    render: function() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="inputDistrict">Apygardos pavadinimas</label>
                        <input type="text" className="form-control" id="inputDistrictName" value={this.props.name} onChange={this.props.changeName}/>
                    </div>
                    {this.countiesHeader()}
                    {this.props.counties}
                    <NewCountyAsideFormContainer
                        addCounty={this.props.addCounty}
                        reportErrors={this.reportErrors}
                    />
                    <button type="submit" className="btn btn-primary btn-md" style={{ marginTop: 10 }} onClick={this.create}>Sukurti</button>
                </form>
                <div className="form-group errors-area">
                    {this.state.jsErrors}
                    {this.springErrors()}
                </div>
            </div>
        )
    }
});

module.exports = NewDistrictAsideForm;
