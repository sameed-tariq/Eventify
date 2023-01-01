import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import AddEvent from "./Screens/AddEvent";

const navigator = createStackNavigator(
  {
    Login: Login,
    Home: Home,
    Signup: Signup,
    AddEvent: AddEvent,
  },
  {
    initialRouteName: "Login",
  }
);

export default createAppContainer(navigator);
