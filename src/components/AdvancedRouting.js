import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AllCampi from "./AllCampi";
import Campus from "./Campus";
import SearchCampus from "./SearchCampus";
import SearchResult from "./SearchResult";

function AdvancedRouting() {
  const [campi, setCampi] = useState([
    { id: 1, name: "Sao Paulo" },
    { id: 2, name: "Mexico City" },
    { id: 3, name: "Miami" },
    { id: 4, name: "Berlin" },
  ]);

  return (
    <BrowserRouter>
      <Route
        path="/"
        exact
        render={() => {
          return <AllCampi campi={campi} />;
        }}
      />
      <Route
        path="/campus/:id"
        exact
        render={() => {
          return <Campus campi={campi} />;
        }}
      />
      <Route
        path="/search"
        exact
        render={() => {
          return <SearchCampus />;
        }}
      />
      <Route
        path="/search-result"
        exact
        render={() => {
          return <SearchResult campi={campi} />;
        }}
      />
    </BrowserRouter>
  );
}

export default AdvancedRouting;
