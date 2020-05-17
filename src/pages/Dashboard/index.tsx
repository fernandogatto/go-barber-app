import React from 'react';
import { View, Text, Button } from 'react-native';

import { useAuth } from '../../hooks/AuthContext';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <>
      <View>
        <Text style={{textAlign: 'center', color: '#fff'}}>Dashboard</Text>
        <Button title="Sair" onPress={signOut} />
      </View>
    </>
  );
};

export default Dashboard;
