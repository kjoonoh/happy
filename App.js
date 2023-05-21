import axios from 'axios';
import React, { useState } from 'react';
import {View, Text, Button} from 'react-native';


const App = () => {
  const [happys, setHappys] = useState ([])
  const getHappys = async () => {
    try {
      const result = await axios.get("https://api.themoviedb.org/3/person/popular?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")
      console.log(result.data.results)
      setHappys(result.data.results)
      
    } catch (error) {
      
    }
  }
  return (
    <View>
      {happys && happys.map(happy => (
        <Text>
          {happy.id}
        </Text>
      ))}
      <Button title="데이터 가져오기" onPress={getHappys} />
    </View>
  );
  
};
export default App;