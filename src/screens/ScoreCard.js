import { View, FlatList, Text, Button } from "react-native";
import { useContext, useEffect } from "react";
import GameContext from "../contexts/GameContext";
import styles from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const ScoreCard = ({route, navigation}) => {
    const {state} = useContext(GameContext); 
    const {game} = route.params; 
    const {Competition} = route.params; 
    const {teams} = route.params; 

    useEffect(() => {
        navigation.setOptions({
            title: game.Competition
        })
    });  

    let totalTeam1 = 0; 

    for(let i = 0; i <= game.ends.length - 1; i++){
        if(game.ends[i].Team == game.teams[0]){
            totalTeam1 += parseInt(game.ends[i].shots); 
        }
    } 

    let totalTeam2 = 0; 
    for(let i = 0; i <= game.ends.length - 1; i++){
        if(game.ends[i].Team == game.teams[1]){
            totalTeam2 += parseInt(game.ends[i].shots); 
        }
    } 

    
     return (
        <View>
            <View style={styles.totalScoreContainer}>
                <Text style={styles.textLabel}>{game.teams[0]}: {totalTeam1}</Text>
                <Text style={styles.textLabel}>{game.teams[1]}: {totalTeam2}</Text>
                
            </View>
            <View style={styles.buttonContainerSingle}>
            <Button title="Next End" onPress={() => navigation.navigate("AddEnd", {id: game.id})}/>
            </View>
            <FlatList 
                data={game.ends}
                keyExtractor={(e) => e.end}
                renderItem={({item}) => {
                    return(
                        <Pressable onPress={() => navigation.navigate("EditEnd", {id :game.id, end: item.end})}>
                            <View style={styles.scoreCardRow}>
                            <Text style={styles.ScoreCardTeamLabel}>End: {item.end}</Text>
                            <Text style={styles.ScoreCardTeamLabel}>Team: {item.Team}</Text>
                            <Text style={styles.ScoreCardTeamLabel}>Shots: {item.shots}</Text>
                            </View>
                        </Pressable>
                    )
                }}/>
        </View>
     )
}


export default ScoreCard;