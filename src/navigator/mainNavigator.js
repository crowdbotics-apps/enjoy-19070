import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen989870Navigator from '../features/BlankScreen989870/navigator';
import BlankScreen889869Navigator from '../features/BlankScreen889869/navigator';
import BlankScreen789868Navigator from '../features/BlankScreen789868/navigator';
import BlankScreen689867Navigator from '../features/BlankScreen689867/navigator';
import BlankScreen2186566Navigator from '../features/BlankScreen2186566/navigator';
import BlankScreen2085250Navigator from '../features/BlankScreen2085250/navigator';
import BlankScreen1985249Navigator from '../features/BlankScreen1985249/navigator';
import BlankScreen1885238Navigator from '../features/BlankScreen1885238/navigator';
import BlankScreen1785237Navigator from '../features/BlankScreen1785237/navigator';
import BlankScreen1685219Navigator from '../features/BlankScreen1685219/navigator';
import BlankScreen1585218Navigator from '../features/BlankScreen1585218/navigator';
import BlankScreen1485198Navigator from '../features/BlankScreen1485198/navigator';
import BlankScreen1385197Navigator from '../features/BlankScreen1385197/navigator';
import BlankScreen1285196Navigator from '../features/BlankScreen1285196/navigator';
import BlankScreen1185195Navigator from '../features/BlankScreen1185195/navigator';
import BlankScreen1085194Navigator from '../features/BlankScreen1085194/navigator';
import BlankScreen985193Navigator from '../features/BlankScreen985193/navigator';
import BlankScreen885192Navigator from '../features/BlankScreen885192/navigator';
import BlankScreen785191Navigator from '../features/BlankScreen785191/navigator';
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
BlankScreen989870: { screen: BlankScreen989870Navigator },
BlankScreen889869: { screen: BlankScreen889869Navigator },
BlankScreen789868: { screen: BlankScreen789868Navigator },
BlankScreen689867: { screen: BlankScreen689867Navigator },
BlankScreen2186566: { screen: BlankScreen2186566Navigator },
BlankScreen2085250: { screen: BlankScreen2085250Navigator },
BlankScreen1985249: { screen: BlankScreen1985249Navigator },
BlankScreen1885238: { screen: BlankScreen1885238Navigator },
BlankScreen1785237: { screen: BlankScreen1785237Navigator },
BlankScreen1685219: { screen: BlankScreen1685219Navigator },
BlankScreen1585218: { screen: BlankScreen1585218Navigator },
BlankScreen1485198: { screen: BlankScreen1485198Navigator },
BlankScreen1385197: { screen: BlankScreen1385197Navigator },
BlankScreen1285196: { screen: BlankScreen1285196Navigator },
BlankScreen1185195: { screen: BlankScreen1185195Navigator },
BlankScreen1085194: { screen: BlankScreen1085194Navigator },
BlankScreen985193: { screen: BlankScreen985193Navigator },
BlankScreen885192: { screen: BlankScreen885192Navigator },
BlankScreen785191: { screen: BlankScreen785191Navigator },
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
