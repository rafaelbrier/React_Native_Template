import React from 'react';
import { StyleSheet, 
        Modal, 
        Text,
        View,
        ActivityIndicator } 
from 'react-native';

const Loading = props => (
    <Modal
        visible={props.loading}
        animationType={'none'}
        onRequestClose={()=>{}}>

        <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
                <ActivityIndicator size="large" color="#fff" />
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </View>

    </Modal>
);

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'gray',
        opacity: 0.5
    },
    innerContainer: {
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        opacity: 1,
    }
});

export default Loading;