import React from 'react';
import { Container } from 'native-base';
import axios from 'axios';
import PeopleList from '../../core/components/PeopleList';
import Loading from '../../core/components/Loading';

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            people: [],
            loading: true
        }
    }

    componentDidMount() {
        axios
            .get('https://randomuser.me/api/?nat=br&&results=10')
            .then(response => {
                const { results } = response.data;
                this.setState({
                    people: results,
                    loading: false
                })
            });
    }

    render() {
        return (
            <Container>
                <Loading loading={this.state.loading} 
                          text={'Carregando...'}/>
                <PeopleList 
                    people={this.state.people}
                    onPress={params => { this.props.navigation.navigate('PeopleDetails', params) }} />
            </Container>
        );
    }
}


