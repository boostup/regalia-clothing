import React, { useState } from "react";
import MenuItem from "../MenuItem";

import sectionsData from "./directory.data";

import "./Directory.scss";

function Directory() {
  const [sections, setSections] = useState(sectionsData);

  return (
    <div className="Directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
}

export default Directory;
