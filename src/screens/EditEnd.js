
import { View, Text, TextInput, Button } from "react-native";
import { useContext, useState, useEffect } from "react";
import styles from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";
import GameContext from "../contexts/GameContext";
import ModalDropdown from 'react-native-modal-dropdown';


const EditEnd = ({route, navigation}) => {
    const { id } = route.params; 
    const { end } = route.params; 
    const {state, updateEnds} = useContext(GameContext); 
    const currentGame = state.find((e) => e.id === id); 
    const currentEnd = currentGame.ends.find((f) => f.end === end); 
    const [Team, setTeam] = useState(currentEnd.Team); 
    const [shots, setShots] = useState(currentEnd.shots); 

    useEffect(() => {
        navigation.setOptions({
            title: "End:" + currentEnd.end
        })
    });  

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
                    updateEnds(currentGame.id, currentEnd.end, shots, Team, () => navigation.pop());
                }}/>
            </SafeAreaView>
        </View>
    );
    
}


export default EditEnd; 