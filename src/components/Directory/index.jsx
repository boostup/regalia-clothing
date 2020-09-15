import React, { useState } from "react";
import MenuItem from "../MenuItem";

import sectionsData from "./directory.data";

import "./Directory.scss";

function Directory() {
  const [sections, setSections] = useState(sectionsData);

  return (
    <div className="Directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}

export default Directory;
