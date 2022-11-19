import React from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {vw, vh} from '../../Utils/units';
import styles from './styles';
import MontBold from '../../Components/TextWrappers/MontBold';
import {drawerIcons, drawerIconsWithoutSignIn, generalIcons, generalImages, sampleImages} from '../../Assets/images';
import {colors} from '../../Utils/theme';
import MontRegular from '../../Components/TextWrappers/MontRegular';

const shouldHeaderBeShown = activeRouteName => {
  switch (activeRouteName) {
    default:
      return true;
  }
};

const getTitle = (activeRouteName, props) => {
  switch (activeRouteName) {
    default:
      return props.children;
  }
};

const showLeftButton = (activeRouteName, navigation, route) => {
  if (
    activeRouteName === 'Task Detail' ||
    activeRouteName === 'Edit Task'
  ) {
    return (
      <TouchableOpacity
        style={styles.leftContainer}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          source={generalIcons.arrowBack}
          style={[styles.backArrow]}
        />
      </TouchableOpacity>
    );
  }
  if(
    activeRouteName === 'Todo List' || 
    activeRouteName === 'Done Tasks List' || 
    activeRouteName === 'Doing Tasks List' || 
    activeRouteName === 'Cancelled List' || 
    activeRouteName === 'Add Task'
  ){
    return(
      <View
        style={styles.touchableMenu}
      >
        <Image
          source={generalImages.logo}
          style={styles.menuIcon}
        />
      </View>
    )
  }

  return null;
};

const showHeaderRight = (activeRouteName, navigation, route) => {
  const handleOnFilter = () => {
    if (route.params?.onFilter) {
      route.params.onFilter();
    }
  };

  const handleOnPressThreeDots = () => {
    if (route.params?.onPress) {
      route.params.onPress();
    }
  };

  if (
    activeRouteName === 'HomeScreen' ||
    activeRouteName === 'Products listings' ||
    activeRouteName === 'Categories' ||
    activeRouteName === 'Category' ||
    activeRouteName === 'My Wishlist' ||
    activeRouteName === 'SearchScreen' ||
    activeRouteName === 'PrivacyPolicy' ||
    activeRouteName === 'MyFanRequestScreen' ||
    activeRouteName === 'SubscriptionPlanScreen' ||
    activeRouteName === 'SubscriptionPlanScreen2'
  ) {
    return (
      <View style={[styles.row, styles.center]}>
        <TouchableOpacity
          onPress={() => {
            console.log('onPress')
            navigation.navigate('ProfileNavigator');
            // DrawerActions.toggleDrawer()
            //navigation.dispatch(DrawerActions.toggleDrawer());
          }}
          style={styles.onlineView}>
          <Image source={sampleImages.profilePic} style={styles.userIcon} />
        </TouchableOpacity>
      </View>
    );
  }

  if (activeRouteName === 'ProductDetail') {
    return (
      <TouchableOpacity
        style={styles.rightContainer}
        onPress={() => {
          console.log('ProductDetail area');
        }}>
        {/* <Image source={icons.likeBlank2} style={styles.likeBlank} /> */}
      </TouchableOpacity>
    );
  }

  if (
    activeRouteName === 'VerificationCode' ||
    activeRouteName === 'ResetPassword'
  )
    return (
      <TouchableOpacity onPress={() => navigation.navigate('AddressNavigator')}>
        {/* <Image source={icons.bell} style={styles.notificationIcon} /> */}
      </TouchableOpacity>
    );

  if (
    activeRouteName === 'BookedSessions' ||
    activeRouteName === 'RecentEvents' ||
    activeRouteName === 'MyProgress' ||
    activeRouteName === 'FitnessSessions'
  ) {
    return (
      <TouchableOpacity onPress={handleOnFilter}>
        {/* <Image source={icons.filter} style={styles.filterIcon} /> */}
      </TouchableOpacity>
    );
  }

  if (activeRouteName === 'Message') {
    return (
      <TouchableOpacity onPress={handleOnPressThreeDots}>
        {/* <Image source={icons.threeDots} style={styles.notificationIcon} /> */}
      </TouchableOpacity>
    );
  }

  return null;
};

const showHeaderTransparent = activeRouteName => {
  if (activeRouteName === 'Screen Name') {
    return true;
  }

  return false;
};

const getHeaderStyle = activeRouteName => {
  // if (showHeaderTransparent(activeRouteName)) {
  //   return {
  //     ...styles.headerStyle,
  //   };
  // }

  return styles.headerStyle;
};

export const renderHeaderTitle = (activeRouteName, props) => {
  return (
    <View style={styles.otherHeaderView}>
      <MontBold style={styles.headerText}>
        {getTitle(activeRouteName, props)}
      </MontBold>
    </View>
  );
};

export const options = props => {
  let activeRouteName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : props.route.name;

  return {
    headerShown: shouldHeaderBeShown(activeRouteName),
    headerStyle: getHeaderStyle(activeRouteName),
    headerRightContainerStyle: {
      paddingRight: 5 * vw,
    },
    headerRight: () =>
      showHeaderRight(activeRouteName, props.navigation, props.route),
    headerLeft: () =>
      showLeftButton(activeRouteName, props.navigation, props.route),
    headerTitle: props => renderHeaderTitle(activeRouteName, props),
    headerTransparent: showHeaderTransparent(activeRouteName),
    headerShadowVisible: false,
    headerBackVisible: true,
    headerTitleAlign: 'center',
  };
};
