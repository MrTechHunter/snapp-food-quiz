import React, { useState, useEffect } from 'react';
// Components
import Vendor from './components/Vendor/Vendor';
import VendorList from './components/VendorList/VendorList';
// Styles
import { Content, Loading } from './App.styles';
// API
// eslint-disable-next-line
import { getVendors } from './APIs/API';
import { Link, Router} from 'react-router-dom';

function App() {
  // eslint-disable-next-line
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [vendors, setVendors] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);

  const handleScroll = event => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    
    if (scrollHeight - scrollTop === clientHeight) {
      setPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    const loadVendors = async () => {
      setLoading(true);
      const newVendors = await getVendors(page);
      setVendors((prev) => [...prev, ...newVendors]);
      setLoading(false);
    }

    loadVendors();
  }, [page]);

  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/vendor-list' component={VendorList} />
    </Switch>
  );
}

export default App;
