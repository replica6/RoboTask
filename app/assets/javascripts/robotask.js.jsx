$(function() {
  'use strict';
  if (window.CURRENT_USER_ID) {
    var root = document.getElementById("static-root");
    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;
    var IndexRoute = ReactRouter.IndexRoute;

    var App = root.App = React.createClass({
     render: function() {
       return (
         <div>
          <header>
            <h3>App Component Placeholder</h3>
          </header>
          {this.props.children}
         </div>
       );
     }
    });

    var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={NavBar} />
      </Route>
    );

    React.render(<Router>{routes}</Router>, root);
  }
});
