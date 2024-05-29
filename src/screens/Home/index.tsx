import { Header } from "../../components/Header";
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { Counter } from "../../components/Counter";
import { Task } from "../../components/Task";
import { EmptyMessage } from "../../components/EmptyMessage";
import { useState } from "react";

type Task = {
    text: string;
    done: boolean;
}

export function Home() {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [done, setDone] = useState(0);
    const [created, setCreated] = useState(0);
    const [taskInput, setTaskInput] = useState('');

    function handleTaskAdd() {
        const newTask = taskInput.trim()
        if (!newTask) {
            return Alert.alert('O texto da tarefa é obrigatório');
        }
        if (tasks.filter(t => t.text === newTask).length) {
            return Alert.alert(`A tarefa ${newTask} já está na sua lista`);
        }
        setTasks(prevState => [...prevState, {text: newTask, done: false}]);
        setCreated(created + 1)
        setTaskInput('');
    }

    function handleTaskDelete(text: string) {
        Alert.alert('Excluir', `Excluir a tarefa ${text}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    const taskToDelete = tasks.filter(t => t.text)[0];
                    setTasks(prevState => prevState.filter(t => t.text !== text));
                    setCreated(created - 1);
                    if (taskToDelete.done) {
                        setDone(done - 1);
                    }
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

    function handleDoneToggle(text: string) {
        const updatedTasks = tasks.forEach(t => {
            if (t.text === text) {
                t.done = !t.done;
                setDone(t.done ? done + 1 : done - 1);
                return;
            }
        });
    }

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor='#808080'
                    onChangeText={setTaskInput}
                    value={taskInput}
                />
                <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                    <Image source={require('../../../assets/plus.png')}/>
                </TouchableOpacity>
            </View>

            <View style={styles.counters}>
                <Counter counterName="Criadas" count={created}/>
                <Counter counterName="Concluídas" count={done}/>
            </View>

            <FlatList
                data={tasks}
                keyExtractor={item => item.text}
                renderItem={({item}) => (
                    <Task text={item.text} done={item.done} onDelete={handleTaskDelete} onToggleDone={handleDoneToggle}/>
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => <EmptyMessage />}
            />
            
        </View>
    );
}