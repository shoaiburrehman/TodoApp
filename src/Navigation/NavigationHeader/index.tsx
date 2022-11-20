import React from 'react';
import {
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import {vw, vh} from '../../Utils/units';
import styles from './styles';
import MontBold from '../../Components/TextWrappers/MontBold';
import {generalIcons, generalImages} from '../../Assets/images';

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
    activeRouteName === 'Edit Task' ||
    activeRouteName === 'Task History'
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

  if (activeRouteName === 'Screen Name') {
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
