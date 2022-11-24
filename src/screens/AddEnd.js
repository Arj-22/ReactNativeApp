
import { View, Text, TextInput, Button } from "react-native";
import { useContext, useState } from "react";
import styles from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";
import GameContext from "../contexts/GameContext";
import ModalDropdown from 'react-native-modal-dropdown';


const AddEnd = ({route, navigation}) => {

    const {id} = route.params; 
    const [Team, setTeam] = useState(""); 
    const [shots, setShots] = useState(""); 
    const {state, update} = useContext(GameContext); 
    const currentGame = state.find((e) => e.id === id); 

    return(
        <View>
            <View style={styles.teamSelectContainer}>
            <View style={styles.dropDownContainer}>
                <ModalDropdown options={currentGame.teams} onSelect={(index, value) => setTeam(value)} 
                isFullWidth={true}
                dropdownTextStyle={styles.dropDownText}
                dropdownStyle={styles.dropDownMenu}
                >
                    <Text style={styles.dropDownButton}>Select Team</Text>
                    
                </ModalDropdown>

            </View>
            <Text style={styles.selectedTeam}>{Team}</Text>
            </View>

            


            <Text style={styles.textLabel}>Shots: </Text>
            <TextInput style={styles.textInput} keyboardType="decimal-pad" returnKeyType="done"
            value={shots} 
            onChangeText={(text) => {
                setShots(text); 
            }}
            />
            <SafeAreaView>
                <Button title="Submit" onPress={() => {
                    update(id, {Team: Team, end: currentGame.ends.length + 1, shots: shots}, currentGame.teams, () => navigation.pop());
                }}/>
            </SafeAreaView>
        </View>
    );
    
}


export default AddEnd; 