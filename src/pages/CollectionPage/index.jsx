import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import CollectionItem from "../../components/CollectionItem";
import { seclectCollection } from "../../redux/shop/selectors";

import "./CollectionPage.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  const history = useHistory();
  return (
    <div className="CollectionPage">
      <span className="go-back-button" onClick={(e) => history.goBack()}>
        <span className="icon">&#10092;</span> Go back
      </span>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapsStateToProps = (state, ownProps) => ({
  collection: seclectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapsStateToProps)(CollectionPage);
