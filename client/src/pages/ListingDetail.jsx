import React from 'react';
import { useParams } from 'react-router-dom';

function ListingDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Listing Detail - {id}</h1>
    </div>
  );
}

export default ListingDetail;