import { View, Text, TextInput, Button, ScrollView, FlatList, ListViewBase } from "react-native";
import { useContext, useState, useEffect } from "react";
import styles from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";
import GameContext from "../contexts/GameContext";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const EditGame = ({route, navigation}) => {
    const { game } = route.params; 
    const [Competition, setCompetition] = useState(game.Competition); 
    const [rinkNo, setRinkNo] = useState(game.rinkNo); 
    const [Team1, setTeam1] = useState(game.teams[0]); 
    const [Team2, setTeam2] = useState(game.teams[1]); 
    const [players, setPlayers] = useState(game.players); 
    const [Player1, setPlayer1] = useState(""); 
    const [Date, setDate] = useState(game.date); 
    const ends = game.ends; 

    useEffect(() => {
        navigation.setOptions({
            title: game.Competition
        })
    });  

    const {state, updateGame} = useContext(GameContext); 

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.log(date.toLocaleDateString());
      setDate(date.toLocaleDateString()); 
      hideDatePicker();
    };


    return(
        <View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <ScrollView>
            <Text style={styles.textLabel}>Competition Name: </Text>
            <TextInput style={styles.textInput} 
            value={Competition} 
            placeholder="Type Here..."
            onChangeText={(text) => {
                setCompetition(text); 
            }}
            
            />
            <Text style={styles.textLabel}>Add Player: </Text>
            <TextInput style={styles.textInput}
            value={Player1}
            placeholder="Type Here..."
            onChangeText={(text) => {   
                setPlayer1(text); 
                
                
            }}
            />
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => {
                    players.pop(); 
                    setPlayers([...players]); 
                }}>
                    <Text style={styles.deleteButton}>Delete Last Player</Text>
                </Pressable>

                <Pressable onPress={() => {
                    if(players.length < 4 && Player1 !== ""){
                        setPlayers([...players, Player1]);
                    }
                    else if(Player1 == ""){
                        alert("No Player Name Entered"); 
                    }
                    else{
                        alert("Max 4 players"); 
                    }
                }}>
                    <Text style={styles.editButton}>Add Player</Text>
                </Pressable>
            </View>
            <Text style={styles.textLabel}>Players</Text>
            <FlatList 
            data={players}
            horizontal={true}
            renderItem={({item}) => {
                return(
                    <View>
                        <Text style={styles.ScoreCardTeamLabel}>{item}</Text>
                    </View>
                )
            }}

            />

            <Text style={styles.textLabel}>Rink Number: </Text>
            <TextInput style={styles.textInput} keyboardType="decimal-pad" returnKeyType="done"
            value={rinkNo} 
            placeholder="Type Here..."
            onChangeText={(text) => {
                setRinkNo(text); 
            }}
            />



            <Text style={styles.textLabel}>Team 1: </Text>
            <TextInput style={styles.textInput}
            value={Team1} 
            placeholder="Type Here..."
            onChangeText={(text) => {
                setTeam1(text); 
            }}
            />

            <Text style={styles.textLabel}>Team 2: </Text>
            <TextInput style={styles.textInput}
            value={Team2} 
            placeholder="Type Here..."
            onChangeText={(text) => {
                setTeam2(text); 
            }}
            />
            <View style={styles.dateContainer}>
                <Text style={styles.textLabel}>Date: {Date}</Text>
                <Button title="Select Date" onPress={showDatePicker} />
            </View>
            </ScrollView>
            <SafeAreaView>
                <View style={styles.buttonContainerSingle}>
                    <Button title="Confirm Changes" onPress={() => {
                        updateGame(game.id ,Competition, rinkNo, [Team1, Team2], Date, ends, players, () => navigation.navigate("ViewGames"));
                    }}/>
                </View>

            </SafeAreaView>
        </View>
    );
}


export default EditGame; 
