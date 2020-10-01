import React from "react";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/selectors";

import MenuItem from "../MenuItem";

import Container from "./styles";

function Directory() {
  const sections = useSelector(selectDirectorySections);

  return (
    <Container>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </Container>
  );
}

export default Directory;
