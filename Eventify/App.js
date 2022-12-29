import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "./Screens/Home";
import Login from "./Screens/Login";


const navigator = createStackNavigator(
  {
    Login: Login,
    Home: Home,
  },
  {
    initialRouteName: 'Login'
  }
);

export default createAppContainer(navigator);