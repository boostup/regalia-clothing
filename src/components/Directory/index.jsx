import React from "react";
import { useSelector } from "react-redux";
import { selectDirectoryCollections } from "../../redux/directory/selectors";

import MenuItem from "../MenuItem";

import Container from "./directory-styles";

function Directory() {
  const collections = useSelector(selectDirectoryCollections);

  return (
    <Container>
      {collections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </Container>
  );
}

export default Directory;
