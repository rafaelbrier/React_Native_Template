import { Container, Text } from 'native-base';
import React from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';

export default class PeopleDetails extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { person } = this.props.navigation.state.params;
        return (
            <ScrollView>
                <Container style={style.container}>
                    <Image style={style.image}
                        source={{ uri: person.picture.large }} />

                    <Text style={style.title}>
                        {` ${person.name.first} ${person.name.last}`}
                    </Text>
                    <Text note>{person.email}</Text>
                    <Text note>{`Celular: ${person.cell}`}</Text>
                    <Text note>{`Telefone: ${person.phone}`}</Text>
                    <Text note>{`Idade: ${person.dob.age}`}</Text>


                    <Text style={style.title}>Endereço</Text>
                    <Text note>{person.location.street}</Text>
                    <Text note>{`${person.location.city} - ${person.location.state}`}</Text>
                    <Text note>{`CEP: ${person.location.postcode}`}</Text>

                </Container>
            </ScrollView>

        );
    }

}

const style = StyleSheet.create({
    image: {
        borderRadius: 100,
        width: 200,
        height: 200,
        alignItems: 'center'
    },
    container: {
        padding: 15,
        alignItems: 'center'
    },
    title: {
        marginTop: 10,
        fontSize: 20
    },
    galery: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imageGalery: {
        width: 100,
        height: 100,
    }
});