import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: "stretch",
      justifyContent: 'top',
    },
    totalScoreContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 30,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    dateContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "flex-end", 
      padding: 20
    },
    buttonContainerSingle: {
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: 30
    },
    textInput: {
      fontSize: 20, 
      padding: 10, 
      margin: 5, 
      borderWidth: 1,
    },
    textLabel: {
      fontSize: 20, 
      paddingLeft: 10, 
      marginTop: 10,
    }, 
    submitButton: {
      textAlign: "center", 
    }, 
    scoreCardRow: {
      flex: 1, 
      flexDirection: "row", 
      flexWrap: "wrap", 
      padding: 20,
      borderWidth: 1, 
      borderColor: "black"
    }, 
    scoreCardTextInput: {
      fontSize: 20, 
      padding: 10, 
      margin: 5, 
      borderWidth: 1,
      width: 140, 
    }, 
    ScoreCardTeamLabel: {
      fontSize: 20,  
      padding: 10, 
    }, 
    footer: {
      flex: 1, 
      alignItems: "center", 
      height: 200,
    },
    flatlistContainer: {
      flexDirection: "column", 
      borderWidth: 1, 
      borderColor: "black",
      alignItems: "center"
    },
    flatlistButtons: {
      flex: 1,
      flexDirection: "row"
      
    },
    editButton:{ 
      alignItems:"center", 
      padding: 10,
      backgroundColor: "blue",
      color: "white",
      margin: 10
      
    },
    deleteButton:{ 
      alignItems:"center", 
      padding: 10,
      backgroundColor: "red",
      color: "white",
      margin: 10
      
    },
    dropDownButton: {
      fontSize: 20,
      padding: 10,
      color: "white",
    },

    dropDownContainer:{
      width: 150,
      margin: 10,
      backgroundColor: "blue",
      alignItems: "center"
    },

    dropDownText:{
      fontSize: 15,
      textAlign: "center"
    },
    dropDownMenu:{
      borderWidth: 1,
      padding: 10
    },

    selectedTeam:{
      padding: 20,
      fontSize: 20,
    },

    teamSelectContainer:{
      flexDirection: "row"
    },
    cameraContainer: {
      flex: 1,
    }, 
    cameraSubContainer: {
      flex: 1, 
      backgroundColor: "transparent", 
      flexDirection: "row-reverse", 
      alignItems: "flex-end"
    }, 
    cameraButtonStyle: {
      flex: 0.1,
      alignItems: "center",
    },
    cameraTextStyle: {
      fontSize: 24, 
      marginBottom: 15, 
      color: "yellow", 
    }
    
  });

  export default styles; 
