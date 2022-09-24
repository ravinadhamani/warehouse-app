import React from "react";
import Inputtag from "./Component/Inputtag";
import MovieCard from "./MovieCard/MovieCard";
import "./App.css";
//import Home from "./Component/Home";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
//import ProtectedRoute from "./Component/ProtectedRoute";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("app.js - constructor");
    this.onQueryChange = this.onQueryChange.bind(this);
    this.state = {
      movieQuery: "",
    };
  }

  onQueryChange(movieQuery) {
    console.log("app.js - onQueryChange");
    //alert(movieQuery);
    this.setState({ movieQuery });
  }

  render() {
    console.log("app.js - render");
    const movieQuery = this.state.movieQuery;
    return (
      <>
      
      {/*   <BrowserRouter>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </BrowserRouter>
        <Inputtag onQueryChange={this.onQueryChange} />
        <MovieCard movieQuery={movieQuery} onQueryChange={this.onQueryChange} /> */}
        <BrowserRouter>
          <UserAuthContextProvider>
            <Routes>           
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />         
          {/*   <Route path="/Inputtag" element={<Inputtag onQueryChange={this.onQueryChange} />} />  */}

              <Route path="/MovieCard" element={ <MovieCard movieQuery={movieQuery} onQueryChange={this.onQueryChange} />} />         
            </Routes>
          </UserAuthContextProvider>
          </BrowserRouter>
      </>
    );
  }
}

export default App;