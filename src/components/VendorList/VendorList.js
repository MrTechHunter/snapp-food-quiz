import React from 'react';

function VendorList() {
    return (
      <div>
        <Content onScroll={handleScroll}>
          {vendors && vendors.map(vendor => <Vendor key={vendor.data.id} vendor={vendor} logo={vendor.data.backgroundImage} />)}
        </Content>
        {loading && <Loading>Loading ...</Loading>}
      </div>
    );
  }

  export default VendorList;