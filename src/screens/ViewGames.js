import { View, Text, FlatList, Button, Pressable, ScrollView } from "react-native";
import { useContext, useEffect, useReducer, useState } from "react";
import styles from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";
import GameContext from "../contexts/GameContext";

const ViewGames = ({navigation}) => {

    const {state, remove} = useContext(GameContext); 
    
    return(

        <View>
            <SafeAreaView>
            <View style={styles.buttonContainerSingle}>
                <Button title='New Game' onPress={() => navigation.navigate("NewGame")}/>
            </View>
            
            <FlatList
                data={state}
                keyExtractor={(e) => e.id.toString()}
                renderItem={({item}) => { 
                    return(
                        <Pressable onPress={() => navigation.navigate("ScoreCard",{game: item})}>
                            <View style={styles.flatlistContainer}>
                                <View style={styles.flatlistButtons}>
                                    <Pressable onPress={() => {remove(item.id)}}>
                                        <Text style={styles.deleteButton}>Delete</Text>
                                    </Pressable>
                                    <Pressable onPress={() => navigation.navigate("EditGame", {game: item})}>
                                        <Text style={styles.editButton}>Edit</Text>
                                    </Pressable>
                                </View>
                                <Text style={styles.ScoreCardTeamLabel}>Competition: {item.Competition}</Text>
                                <Text style={styles.ScoreCardTeamLabel}>Date: {item.date}</Text>
                                <Text style={styles.ScoreCardTeamLabel}>Rink: {item.rinkNo}</Text>
                                <Text style={styles.ScoreCardTeamLabel}>Team 1: {item.teams[0]}</Text>
                                <Text style={styles.ScoreCardTeamLabel}>Team 2: {item.teams[1]}</Text>
                                <Text style={styles.ScoreCardTeamLabel}>Players: {item.players.map((e) =>{
                                    return e + " ";
                                    })}
                                </Text>


                            </View>   
                        </Pressable>
                    )
            }}
            />
            </SafeAreaView>
        </View>

    );
}


export default ViewGames; 
