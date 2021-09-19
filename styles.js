import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor:"#fff"
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: "center",
    flexDirection: 'row',
    marginBottom: 30,
    width:"80%"
  },
  buttonCount: {
    padding: 90,
    borderRadius: 30,
    color:"white",
    fontSize:90,
    fontWeight:"bold",
    backgroundColor: 'red',
  },
  normal: {
    backgroundColor: "#243447",
    color:"white",
    fontSize:25,
    margin: 10,
    padding: 20,
    fontWeight:"bold",
    borderRadius:50,
    width: "70%",
    textAlign: "center"
  },
  dezSegundos: {
    backgroundColor: "#243447",
    color:"white",
    fontSize:25,
    margin: 10,
    padding:20,
    fontWeight:"bold",
    width:"70%",
    borderRadius:50,
    textAlign: "center"
  },
  reset: {
    backgroundColor: "#f2ca52",
    color:"white",
    fontSize:30,
    padding:20,
    marginTop:40,
    fontWeight:"bold",
    borderRadius:30,
    width:"55%",
    textAlign:"center"
  },
  tempo: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 30,
    marginBottom: 30,
  }
});

export default styles;