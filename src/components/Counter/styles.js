import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    counterName: {
        color: '#4EA8DE',
        fontWeight: 'bold',
        fontSize: 14,
        marginEnd: 14
    },
    counterValueBox: {
        backgroundColor: '#333333',
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 999
    },
    counterValue: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#D9D9D9'
    }
});