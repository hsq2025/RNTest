import React from 'react';
import { Appearance, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

export class CommonBtnView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        if (this.subscription) {
            this.subscription.remove();
        }
    }

    render() {
        let { btnText, onClick } = this.props
        return (
            <TouchableOpacity style={[styles.bntLayout, (this.props.style && this.props.style.layoutStyle) ? this.props.style.layoutStyle : null]} onPress={() => {
                if (onClick) {
                    onClick()
                }
            }}>
                <Text style={[styles.btnText, (this.props.style && this.props.style.textStyle) ? this.props.style.textStyle : null]}>{btnText}</Text>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    rootBackGround: {
        paddingHorizontal: 16,
    },
    bntLayout: {
        backgroundColor: '#338BFF',
        borderRadius: 12,
        marginBottom: 10,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#338BFF',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 16,
        elevation: 4 // 在 Android 平台上应设置 elevation，使用 shadow 则对 iOS 生效
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
})

export default CommonBtnView;