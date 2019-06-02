import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../src/screens/login/Login';
import Home from '../src/screens/home/Home';
import PeopleDetails from '../src/screens/people/PeopleDetails';
import { capitalizeFirstLetter } from '../src/utils/capitalizeFirstLetter'

const AppNavigator = createStackNavigator({
  'Login': {
    screen: Login,
    navigationOptions: { header: null }
  },

  'Home': {
    screen: Home,
    navigationOptions: {
      title: 'People'
    }
  },
  'PeopleDetails': {
    screen: PeopleDetails,
    navigationOptions: ({ navigation }) => {
      return ({
        title: navigation.state.params.person.name.first
      });
    }
  }
},
  {
    initialRouteName: 'Login'

  });

const AppRoute = createAppContainer(AppNavigator);
export default AppRoute;