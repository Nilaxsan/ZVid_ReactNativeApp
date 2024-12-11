// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
// import { useLocalSearchParams, useRouter } from 'expo-router';
// import useCounterStore from '../store/counterStore';

// const Home = () => {
//   const router = useRouter();

//   const [items, setItems] = useState([]);
//   const { username } = useLocalSearchParams();
//   const { clickCount, incrementCount } = useCounterStore();

//   if (!username) {
//     router.replace('/login');
//     return null;
//   }

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then(setItems)
//       .catch(console.error);
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <Text style={styles.header}>
//           Hi {username} 👋, Welcome to ZVid!
//         </Text>

//         <View style={styles.view}>
//           <FlatList
//             data={items.slice(0, 10)} // Limit to 10 items
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={styles.card}
//                 onPress={incrementCount}
//               >
//                 <Text style={styles.title}>{item.title}</Text>
//                 <Text style={styles.body}>{item.body}</Text>
//               </TouchableOpacity>
//             )}
//           />
//           <TouchableOpacity style={styles.fab}>
//             <Text style={styles.fabText}>{clickCount}</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginTop: 20,
//     color: '#a238d0', // Primary color
//     fontFamily: 'psemibold',
//   },
//   view: {
//     width: '100%',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//   },
//   card: {
//     width: '100%',
//     padding: 15,
//     backgroundColor: '#e0c9f5', // Slightly muted purple for card background
//     marginBottom: 10,
//     borderRadius: 16,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 3 },
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 5,
//     color: '#333',
//     fontFamily: 'psemibold',
//   },
//   body: {
//     fontSize: 14,
//     color: '#666',
//     fontFamily: 'pregular',
//   },
//   fab: {
//     position: 'absolute', // Floating button placement
//     bottom: 20, // 20px from the bottom edge
//     right: 20, // 20px from the right edge
//     backgroundColor: '#a238d0', // Primary button color
//     borderRadius: 25, // Circular button
//     height: 50,
//     width: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   fabText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
// });


// export default Home;
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import useCounterStore from '../store/counterStore';

const Home = () => {
  const router = useRouter();

  const [items, setItems] = useState([]);
  const { username } = useLocalSearchParams();
  const { clickCount, incrementCount } = useCounterStore();

  if (!username) {
    router.replace('/login');
    return null;
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then(setItems)
      .catch(console.error);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>
          Hi {username} 👋, Welcome to ZVid!
        </Text>

        <View style={styles.view}>
          <FlatList
            data={items.slice(0, 10)} // Limit to 10 items
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.card}
                onPress={incrementCount}
              >
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab} onPress={incrementCount}>
        <Text style={styles.fabText}>{clickCount}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#a238d0', // Primary color
    fontFamily: 'psemibold',
  },
  view: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  card: {
    width: '100%',
    padding: 15,
    backgroundColor: '#e0c9f5', 
    marginBottom: 10,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
    fontFamily: 'psemibold',
  },
  body: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'pregular',
  },
  fab: {
    position: 'absolute', 
    bottom: 90, 
    right: 20, 
    backgroundColor: '#a238d0', 
    borderRadius: 25, 
    height: 65,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 10, 
  },
  fabText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  
});

export default Home;
