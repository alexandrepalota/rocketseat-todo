import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import uncheckedImage from './../../../assets/unchecked.png';
import checkedImage from './../../../assets/checked.png';
import trashImage from './../../../assets/trash.png';

type Props = {
    done: boolean;
    text: string;
}

export function Task(props: Props) {
    return (
        <View style={styles.contanier}>
            <TouchableOpacity>
                <Image style={styles.check} source={props.done ? checkedImage : uncheckedImage} />
            </TouchableOpacity>
            <Text
                style={props.done ? styles.doneText : styles.text}
                numberOfLines={2}
                ellipsizeMode='tail'>{props.text}</Text>
            <TouchableOpacity>
                <Image style={styles.trash} source={trashImage} />
            </TouchableOpacity>
        </View>
    );
}