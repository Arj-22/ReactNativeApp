import { createContext, useEffect, useReducer } from "react";
import { actionTypes } from "../helpers/actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage"; 

const GameContext = createContext(); 

const STORAGE_KEY = "my_key"; 


/*const dummyData = [
    {
        id: -1, 
        Competition: "TestComp", 
        rinkNo: "4", 
        teams: ["Team A", "Team B"],
        date: "dd-mm-yyyy", 
        ends: [{
            end: "1", 
            shots: "5",
            Team: "Team A"
        }],
        players: ["John", "Steve"],
    }
] */

let Games = []; 

const reducer = (state, action) =>{
    switch (action.type){
        case actionTypes.create: 
            return [ 
                ...state, 
                {
                    id: Math.floor(Math.random() * 99999), 
                    Competition: action.payload.Competition, 
                    rinkNo: action.payload.rinkNo, 
                    teams: action.payload.teams,
                    date: action.payload.Date,
                    ends: [],
                    players: action.payload.players,
                }
            ];
        case actionTypes.delete: 
            return state.filter((item) => item.id !== action.payload.id);
    
        case actionTypes.update: 
            return state.map((e) => {
                if (e.id === action.payload.id){
                    e.ends.push(action.payload.ends);
                    return e; 
                } else{
                    return e; 
                }
            }); 
    
        case actionTypes.updateEnd: 
            return state.map((e) => {   
                if (e.id == action.payload.gameId){
                    e.ends[action.payload.end - 1].shots = action.payload.shots;
                    e.ends[action.payload.end - 1].Team = action.payload.Team;
                    return e;
                } else{
                    return e; 
                }
            });
        case actionTypes.updateGame: 
            return state.map((e) => {
                if (e.id === action.payload.id){
                    return action.payload; 
                } else{
                    return e; 
                }
            });  
        
        case actionTypes.save:
            try{
                AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state)); 
            }
            catch(e){
                console.log(e); 
            }
            finally{
                return state; 
            }
        case actionTypes.load: 
            return[
                ...state, 
                {
                    id: action.payload.id, 
                    Competition: action.payload.Competition, 
                    rinkNo: action.payload.rinkNo, 
                    teams: action.payload.teams,
                    date: action.payload.date,
                    ends: action.payload.ends,
                    players: action.payload.players,
                }
            ]
        default: 
            return state; 
    }
}

export const ItemProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, Games);   

    useEffect(() =>{
        const loadStorage = async () => {
            const storage = await AsyncStorage.getItem(STORAGE_KEY); 
            if(storage !== null && state.length === 0){
                Games = JSON.parse(storage); 
                Games.forEach(item => {
                    dispatch({type: actionTypes.load, payload: item}); 
                });
            }
        }
        loadStorage(); 
    }, [STORAGE_KEY])

    const addGame = (Competition, rinkNo, teams, Date, players, callback) =>{
        dispatch({type: actionTypes.create, payload: { Competition: Competition, rinkNo: rinkNo,
             teams: teams, Date: Date, players: players}}); 
        dispatch({type: actionTypes.save});
        if(callback) {
            callback(); 
        }
        
    }

    const deleteGame = (id, callback) => { 
        dispatch({type: actionTypes.delete, payload: {id: id}}); 
        dispatch({type: actionTypes.save});
        if(callback){
            callback(); 
        }
    }

    const addEnds = (id, ends, teams, callback) =>{ 
        dispatch({type: actionTypes.update, payload: {id: id, ends: ends, teams: teams}}); 
        dispatch({type: actionTypes.save});
        if(callback){
            callback(); 
        }
    }

    const updateEnd = (gameId, end, shots, Team, callback) =>{ 
        dispatch({type: actionTypes.updateEnd, payload: {gameId: gameId, end: end, shots: shots, Team: Team} });
        dispatch({type: actionTypes.save});
        if(callback){
            callback(); 
        }
    }

    const updateGame = (id, Competition, rinkNo, teams, Date, ends, players,  callback) =>{ 
        dispatch({type: actionTypes.updateGame, payload: {id: id, Competition: Competition, rinkNo: rinkNo, 
            teams: teams, date: Date, ends: ends, players: players} });
        dispatch({type: actionTypes.save});
        if(callback){
            callback(); 
        }
    }

    return (
        <GameContext.Provider 
            value={{
                state: state, 
                create: addGame, 
                remove: deleteGame, 
                update: addEnds, 
                updateEnds: updateEnd, 
                updateGame: updateGame
            }}
        >
            {children}
        </GameContext.Provider>
    );
}

export default GameContext; 