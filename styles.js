import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
    width: "80%",
  },
  buttonCount: {
    backgroundColor: "red",
    borderRadius: 30,
    color: "#FFF",
    fontSize: 90,
    fontWeight: "bold",
    padding: 140,
  },
  normal: {
    backgroundColor: "#243447",
    borderRadius: 50,
    color: "#FFF",
    fontSize: 25,
    fontWeight: "bold",
    margin: 10,
    padding: 20,
    textAlign: "center",
    width: "100%",
  },
  tenSeconds: {
    backgroundColor: "#243447",
    borderRadius: 50,
    color: "#FFF",
    fontSize: 25,
    fontWeight: "bold",
    margin: 10,
    padding: 20,
    textAlign: "center",
    width: "100%",
  },
  reset: {
    backgroundColor: "#f2ca52",
    borderRadius: 30,
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 40,
    padding: 20,
    textAlign: "center",
    width: "80%",
  },
  time: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    margin: 30,
  },
  goal: {
    fontSize: 15,
    marginTop: 30,
    opacity: 0.5,
  },
  setGoal: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
  },
  setGoalInput: {
    fontSize: 18,
    marginRight: 25,
  },
  setGoalButton: {
    marginLeft: 25,
  },
  setGoalButtonText: {
    backgroundColor: "#33A622",
    borderRadius: 10,
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default styles;
