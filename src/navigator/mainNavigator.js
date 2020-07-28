import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen685190Navigator from '../features/BlankScreen685190/navigator';
import BlankScreen585189Navigator from '../features/BlankScreen585189/navigator';
import BlankScreen485188Navigator from '../features/BlankScreen485188/navigator';
import BlankScreen385187Navigator from '../features/BlankScreen385187/navigator';
import BlankScreen285186Navigator from '../features/BlankScreen285186/navigator';
import BlankScreen185185Navigator from '../features/BlankScreen185185/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen685190: { screen: BlankScreen685190Navigator },
BlankScreen585189: { screen: BlankScreen585189Navigator },
BlankScreen485188: { screen: BlankScreen485188Navigator },
BlankScreen385187: { screen: BlankScreen385187Navigator },
BlankScreen285186: { screen: BlankScreen285186Navigator },
BlankScreen185185: { screen: BlankScreen185185Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
