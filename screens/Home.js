import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
} from 'react-native';
import axios from 'axios'

const API_PEOPLE = `https://swapi.co/api/people`
export default class App extends React.Component {
    static navigationOptions = {
        title = "Home"
    }
    constructor(){
        super()
        this.state = {
            people: []
        }
    }
    componentDidMount(){
        axios.get(API_PEOPLE)
        .then(({ data })=> this.setState({ people: data.results }) ).catch((err)=> console.log(err))
    }

  render() {
      const { people } = this.state
    return (
      <View style={styles.container}>
        <Button
            title="go to about"
            onPress={()=> this.props.navigation.navigate('Planet', {text: ' ini adalah nilai params'})}
        />
        {console.log('test')}
        <ScrollView>
            {people.map((list, key)=>{
                // console.log(list.name)
                return (
                    <View key={key}>
                        <Text>name : {list.name} </Text>
                        <Text>gender: {list.gender}</Text>
                        <Text>hair collor: {list.hair_color}</Text>
                        <Text>{"\n"}</Text>
                    </View>
                )
            })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
