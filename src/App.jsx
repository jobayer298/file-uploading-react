import React from 'react';
import Column1 from "./components/Column1";

const App = () => {
  return (
    <div className="container mx-auto p-10 overflow-x-auto">
      <div className="grid grid-cols-4 gap-4 ">
        <Column1 text="Incomplete" color="bg-red-500" />
        <Column1 text="To Do" color="bg-sky-500" />
        <Column1 text="Doing" color="bg-yellow-300" />
        <Column1 text="Under Review" />
        {/* Add more Column1 components here as needed */}
      </div>
    </div>
  );
};

export default App;