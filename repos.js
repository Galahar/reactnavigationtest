function DetailsScreen({ route, navigation }) {

    /* 2. Get the param */
    const { itemId, otherParam } = route.params;
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    )
  

}

{/* <Stack.Screen
name="Profile"
component={ProfileScreen}
option={{ title: route.params.name}}
/> */}

<Stack.Navigator initialRouteName="Home" >
<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/>
<Stack.Screen name="Details" component={DetailsScreen} />
</Stack.Navigator>

{/* <Button
title="Update the title"
onPress={() => navigation.setOptions({ title: 'Updated! '})}
/> */}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const [count, setCount] = React.useState(0);

React.useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <Button onPress={() => setCount(c => c + 1)} title="Update count" />
    ),
  });
}, [navigation]);
<Button 
  title="Learn more"
  onPress={() => {
    navigation.navigate("DetailsScreen");
  }}
/>
return <Text>Count: {count}</Text>

/* screenOptions={{ 
  title: 'My home',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}}
> */

function HomeScreen({ navigation }) {
  const [name, setName] = React.useState("");

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={{ fontSize: 30}} 
        placeholder="Enter your name"
        value={name} 
        onChangeText={(text)=> setName(text)} />
      <Button 
        title="Learn More"
        onPress={() => {
          navigation.navigate("DetailScreen", { name });
        }}
      />
    </View>
  )
}

function DetailScreen({ route, navigation }) {
  const { name } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 40}}>Welcome {name}</Text>
      <Text style={{ fontSize: 20}}>We value your game and job skills.</Text>
{/*       <Button 
        title="Find your path"
        onPress={() => {
          navigation.navigate("HomeScreen")
        }}
      /> */}
    </View>
  )
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 40, height: 40 }}
      source={{ uri: "https://www.usacheer.org/wp-content/uploads/2020/11/rit-1.png"}}
    />
  );
}

function WrenchTitle() {
  return (
    <Image
      style={{ width: 40, height: 40}}
      source={{ uri: "https://cdn.iconscout.com/icon/free/png-256/technical-tools-1555805-1317001.png"}}
    />
  )
}

// createStackNavigator is a function that returns an object containing 2 properties
// createStackNavigator provides the platform-specific defaults for the back button. 
// On iOS this includes a label next to the button, which shows the title of the previous
// screen when the title fits in the available space, otherwise it says "Back".
// You can change the label behavior with headerBackTitle and headerTruncatedBackTitle
const Stack = createStackNavigator();
const Tab = createBottomNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ 
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            headerTitle: props => <LogoTitle {...props} />,
          })}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={({ navigation, route }) => ({
            headerTitle: props => <WrenchTitle {...props} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* export default App; */
/* screenOptions={{ 
  title: 'My home',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}}
>
<Stack.Screen
  name="HomeScreen"
  component={HomeScreen}
  options={({ navigation, route }) => ({
    headerTitle: props => <LogoTitle {...props} />,
  })}
/>
<Stack.Screen
  name="DetailScreen"
  component={SettingsScreen}
  options={({ navigation, route }) => ({
    headerTitle: props => <WrenchTitle {...props} />,
  })}
/>
</Stack.Navigator> */

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={SettingsScreen} />
        <Tab.Screen name="Chat" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={SettingsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </View>
  );
}