import React from 'react';
import { StyleSheet, TextInput, Alert, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class TextInputForm extends React.Component {
    render() {
        return (
            <View style={styles.input}>
                {this.props.icon ?
                    this.props.icon
                    : <Ionicons name={this.props.name} size={15} color='gray' ></Ionicons>
                }
                <TextInput
                    style={{ paddingLeft: 5, flex: 1, height: 40 }}
                    underlineColorAndroid="transparent"
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    onChangeText={this.props.onChangeText}
                ></TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '80%',
        height: 40,
        paddingLeft: 10,
        borderColor: 'black',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        backgroundColor: '#fff',
        color: 'gray',
        shadowColor: "gray",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        marginTop: 5,
        marginBottom: 5
    }
});
