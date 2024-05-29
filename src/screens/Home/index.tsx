import { Header } from "../../components/Header";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { Counter } from "../../components/Counter";
import { Task } from "../../components/Task";
import { EmptyMessage } from "../../components/EmptyMessage";

const tasks = [
    {id: 1, text: 'Lavar a louça', done: false},
    {id: 2, text: 'Levar o lixo na rua', done: false},
    {id: 3, text: 'Comprar açúcar', done: false},
    {id: 4, text: 'Lavar o carro', done: false},
    {id: 5, text: 'Cortar a grama', done: false},
    {id: 6, text: 'Gardar as roupas', done: false},
    {id: 7, text: 'Pagar a conta de luz', done: false},
    {id: 8, text: 'Marcar dentista', done: false}
]

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

            <View style={styles.counters}>
                <Counter counterName="Criadas" count={2}/>
                <Counter counterName="Concluídas" count={2}/>
            </View>

            <FlatList
                data={tasks}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                    <Task text={item.text} done={item.done}/>
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => <EmptyMessage />}
            />
            
        </View>
    );
}