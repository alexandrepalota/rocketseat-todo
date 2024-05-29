import { Text, View } from "react-native";
import { styles } from './styles'

type Props = {
    counterName: string;
    count: number;
}

export function Counter({ counterName, count }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.counterName}>{counterName}</Text>
            <View style={styles.counterValueBox}>
                <Text style={styles.counterValue}>{count}</Text>
            </View>
        </View>
    );
}