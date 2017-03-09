var React = require('react');
var NewCountyAsideFormContainer = require('../containers/tiny_containers/NewCountyAsideFormContainer');
var Validations = require('../../utils/Validations');

var NewDistrictAsideForm = React.createClass({
    getInitialState: function() {
        return ({ jsErrors: [], springErrors: [] });
    },
    componentWillReceiveProps: function(newProps) {
        if (newProps.springErrors != this.state.springErrors) {
            this.setState({ springErrors: newProps.springErrors })
        }
    },
    reportCountyErrors: function(errors, countyName) {
        if (errors.length == 0) {
            this.setState({ jsErrors: [] });
        } else {
            var errors = Validations.prepareJSerrors(errors, "Klaida registruojant apylinkę " + countyName);
            this.setState({ jsErrors: errors });
        }
    },
    create: function(e) {
        e.preventDefault();
        var errors = Validations.checkErrorsDistrictAsideForm(this.props.name);
        if (errors.length > 0) {
            this.setState({
                jsErrors: Validations.prepareJSerrors(errors, "Klaida registruojant apygardą " + this.props.name),
                springError: []
            });
        } else {
            this.setState({ jsErrors: [] });
            this.props.create();
        }
    },
    springErrors: function() {
        return Validations.prepareSpringErrors(this.props.springErrors);
    },
    countiesHeader: function() {
        return (this.props.counties.length == 0) ? <span></span> : <p>Apylinkės:</p>;
    },
    render: function() {
        var springErrors = (this.props.springErrors.length > 0) ? this.springErrors() : [];
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="inputDistrict">Apygardos pavadinimas</label>
                        <input type="text" className="form-control" id="input-district-name" value={this.props.name} onChange={this.props.changeName}/>
                    </div>
                    {this.countiesHeader()}
                    {this.props.counties}
                    <NewCountyAsideFormContainer
                        addCounty={this.props.addCounty}
                        reportCountyErrors={this.reportCountyErrors}
                        toggle={this.state.toggleCountyAsideForm}
                        clearCountyForm={this.props.clearCountyForm}
                    />
                    <button type="submit" id="create-district-button" className="btn btn-primary btn-md" style={{ marginTop: 10 }} onClick={this.create}>Sukurti</button>
                </form>
                <div className="form-group errors-area">
                    {this.state.jsErrors}
                    {springErrors}
                </div>
            </div>
        )
    }
});

module.exports = NewDistrictAsideForm;
