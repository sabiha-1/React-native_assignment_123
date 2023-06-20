import React from 'react';
import { Appbar } from 'react-native-paper';

const Navbar = () => {
  const handleDownload = () => {
    // Generate Excel file and store/download it
  };

  return (
    <Appbar.Header>
      <Appbar.Content title="Google Sheets Clone" />
      <Appbar.Action icon="download" onPress={handleDownload} />
    </Appbar.Header>
  );
};

export default Navbar;
