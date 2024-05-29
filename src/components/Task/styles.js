import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contanier: {
        flexDirection: 'row',
        marginHorizontal: 24,
        paddingVertical: 12,
        alignItems: 'center',
        height: 64,
        backgroundColor: '#262626',
        paddingStart: 12,
        paddingEnd: 8,
        borderRadius: 8,
        borderColor: '#333333',
        borderWidth: 1,
        marginBottom: 8
    },
    check: {
        marginEnd: 8
    },
    text: {
        flex: 1,
        fontSize: 14,
        lineHeight: 19,
        color: '#F2F2F2'
    },
    doneText: {
        textDecorationLine: 'line-through',
        color: '#808080',
        flex: 1,
    },
    trash: {
        marginStart: 8
    }
});