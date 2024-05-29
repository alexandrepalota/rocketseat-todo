import { Header } from "../../components/Header";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'

export function Home() {
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor='#808080'
                />
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../../../assets/plus.png')}/>
                </TouchableOpacity>
            </View>

            
        </View>
    );
}