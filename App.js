

import React, { useState } from 'react';
import UserDetailsTab from './UserDetailsTab';
import AccountCreationTab from './AccountCreationTab';

const App = () => {
  const [activeTab, setActiveTab] = useState('userDetails');

  return (
    <div>
      <div className="tabs">
        <button onClick={() => setActiveTab('userDetails')}>User Details</button>
        <button onClick={() => setActiveTab('accountCreation')}>Account Creation</button>
      </div>
      {activeTab === 'userDetails' && <UserDetailsTab />}
      {activeTab === 'accountCreation' && <AccountCreationTab />}
    </div>
  );
};

export default App;