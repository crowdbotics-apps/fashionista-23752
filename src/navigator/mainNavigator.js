import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings191394Navigator from '../features/Settings191394/navigator';
import Settings191379Navigator from '../features/Settings191379/navigator';
import NotificationList191378Navigator from '../features/NotificationList191378/navigator';
import Maps191377Navigator from '../features/Maps191377/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings191394: { screen: Settings191394Navigator },
Settings191379: { screen: Settings191379Navigator },
NotificationList191378: { screen: NotificationList191378Navigator },
Maps191377: { screen: Maps191377Navigator },

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
