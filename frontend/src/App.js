// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import NotFound from './views/NotFound';
import PostList from './components/postList';
import PostDetail from './views/PostDetail';
import InteractiveComponent from './components/InteractiveComponent';  // Agrega la importación

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/posts" component={PostList} />
          <Route path="/post/:postId" component={PostDetail} />
          <Route path="/interactive" component={InteractiveComponent} /> {/* Agrega la ruta del componente interactivo */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
