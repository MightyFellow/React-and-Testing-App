import React from "react";
import { Route, Routes } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="streams">
          <Route path="new" element={<StreamCreate />} />
          <Route path="edit" element={<StreamEdit />} />
          <Route path="delete" element={<StreamDelete />} />
          <Route path="show" element={<StreamShow />} />
        </Route>

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem", color: "darkgoldenrod" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
