import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import CollectionItem from "../../components/CollectionItem";
import { seclectCollection } from "../../redux/shop/selectors";

import Container from "./styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  const history = useHistory();
  return (
    <Container>
      <div className="back-button" onClick={(e) => history.goBack()}>
        <span className="nav-icon">&#10092;</span> back
      </div>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

const mapsStateToProps = (state, ownProps) => ({
  collection: seclectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapsStateToProps)(CollectionPage);
