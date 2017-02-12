var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var ReactDOM = require('react-dom');

var Application = require('./js/Application');
var HomePageContainer = require('./js/containers/HomePageContainer');
var AdminPanelComponent = require('./js/components/AdminPanelComponent');
var RepresentativePanelComponent = require('./js/components/RepresentativePanelComponent');
var TerritorialBreakdownContainer = require('./js/territorial_units/containers/TerritorialBreakdownContainer');
var PoliticalUnitsContainer = require('./js/political_units/containers/PoliticalUnitsContainer');
var SingleCandidatesContainer = require('./js/single_m_candidates/containers/SingleCandidatesContainer');
var NoMatch = require('./js/config/NoMatch');
var CountyRepresentativesDisplayContainer = require('./js/territorial_units/containers/CountyRepresentativesDisplayContainer');
var SM_CountyResultsContainer = require('./js/counties_results/singlemandate/containers/SM_CountyResultsContainer');
var MM_CountyResultsContainer = require('./js/counties_results/multimandate/containers/MM_CountyResultsContainer');

ReactDOM.render((
  <Router history={ReactRouter.hashHistory}>
    <Route path="/" component={Application}>
        <IndexRoute component={HomePageContainer}/>
        <Route path="administravimas" component={AdminPanelComponent}>
            <Route path="teritorinis-suskirstymas" component={TerritorialBreakdownContainer}/>
            <Route path="apygardu-kandidatai" component={SingleCandidatesContainer}/>
			      <Route path="apylinkiu-atstovai" component={CountyRepresentativesDisplayContainer}/>
			      <Route path="politinis-suskirstymas" component={PoliticalUnitsContainer}/>
        </Route>
        <Route path="atstovui" component={RepresentativePanelComponent}>
            <Route path="rezultatai">
                <Route path="vienmandaciai" component={SM_CountyResultsContainer}/>
                <Route path="daugiamandaciai" component={MM_CountyResultsContainer}/>
            </Route>
            {/*<Route path="profilis" component={}/>*/}
        </Route>
        <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('root'));
