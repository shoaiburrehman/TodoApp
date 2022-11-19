import React from 'react';
import {View, StyleSheet} from 'react-native';
import { fontSizes, vh, vw } from '../../Utils/units';
import { colors } from '../../Utils/theme';
import MontRegular from '../TextWrappers/MontRegular';
import MainStyle from '../../Utils/mainStyle';
import Feather from 'react-native-vector-icons/Feather'

const EmptyList = () => {
    return(
        <View style={styles.emptyContainer}>
            <Feather name="slash" color={colors.grayColor} size={vh * 9}/>
            <MontRegular style={styles.emptyText}>No Tasks Found</MontRegular>
        </View>
    )
}

const styles = StyleSheet.create({ 
    emptyContainer: {
        height: vh * 78,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyText: {
        marginTop: vh * 5,
        color: colors.grayColor,
        fontSize: fontSizes.f20
    }
});

export default EmptyList;