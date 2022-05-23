import * as React from 'react'
import PickImage from './screens/alphabet-detection.js'

export default function App() {
  return (
    <View style={styles.container}>
      <PickImage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
