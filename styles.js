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
  buttonCount: {
    backgroundColor: "red",
    borderRadius: 30,
    color: "#FFF",
    fontSize: 90,
    fontWeight: "bold",
    padding: 140,
    paddingTop: 160,
    paddingBottom: 160
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
  settedSettings: {
    margin: 30,
  },
  settedSettingsText: {
    color: "#000",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: 'center'
  },
  settings: {
    fontSize: 15,
    marginTop: 50,
    opacity: 0.5,
  },
  setSettings: {
    alignItems: 'center',
    display: "flex",
    flexDirection: "column",
    height: '100%',
    justifyContent: 'center',
    marginTop: 30
  },
  setSettingsInput: {
    fontSize: 18,
    marginBottom: 25,
  },
  setSettingsButtonText: {
    backgroundColor: "#33A622",
    borderRadius: 10,
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  modal: {
    height: '50%',
    width: '50%'
  }
});

export default styles;
