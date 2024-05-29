import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A1A1A',
        flex: 1,
    },
    form: {
        height: 56,
        marginHorizontal: 24,
        marginTop: -27,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        padding: 16,
        borderRadius: 6,
        color: '#F2F2F2',
        borderColor: '#0D0D0D',
        borderWidth: 2,
        backgroundColor: '#262626',
        flex: 1,
        marginEnd: 4
    },
    button: {
        width: 52,
        height: 52,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counters: {
        flexDirection: 'row',
        marginTop: 32,
        justifyContent: 'space-between',
        paddingHorizontal: 26
    }
});