import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyMessage() {
    return (
        <View style={styles.contaniner}>
            <Image style={styles.image} source={require('../../../assets/Clipboard.png')}/>
            <Text style={styles.mainText}>Você não tem tarefas cadastradas</Text>
            <Text style={styles.secondaryText}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    );
}