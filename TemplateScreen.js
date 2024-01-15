import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Appearance } from 'react-native';
import CommonBtnView from './js/CommonBtnView';


export class TemplateScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        // styles = this.state.colorScheme == ColorSchemeConst.light ? stylesLight : stylesDark
        return (
            <SafeAreaView style={styles.rootBackGround}>
                <StatusBar
                    barStyle={'default'}
                    backgroundColor={'#000'}
                />
                <View>
                    <Text style={styles.text}>模板</Text>
                    <CommonBtnView
                        btnText={'同意'}
                        onClick={this.agreeOnClick}
                    />
                </View>
            </SafeAreaView>
        )
    }

    agreeOnClick = () => {
        console.log('同意--------');
    }

}

const styles = StyleSheet.create({
    rootBackGround: {
        paddingHorizontal: 16
    },
    text: {
        color: 'black',
        fontSize: 14
    }
})

const stylesLight = StyleSheet.create({
    rootBackGround: {
        paddingHorizontal: 16
    },
    text: {
        color: 'white',
        fontSize: 14
    }
})

export default TemplateScreen;