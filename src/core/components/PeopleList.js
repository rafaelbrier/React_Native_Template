import {
    Body,
    Content,
    Left,
    List,
    ListItem,
    Text,
    Thumbnail
} from "native-base";
import React from "react";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

const PeopleList = propos => {
    const { people, onPress } = propos;
    const elements = people.map(person => {
        return (
            <List key={person.name.first}>
                <ListItem
                    avatar
                    onPress={() => {
                        onPress({ person });
                    }}
                >
                    <Left>
                        <Thumbnail source={{ uri: person.picture.thumbnail }} />
                    </Left>

                    <Body>
                        <Text>
                            {/* {`${capitalizeFirstLetter(person.name.first)} ${capitalizeFirstLetter(person.name.last)}`} */}
                            {`${person.name.first} ${person.name.last}`}
                        </Text>
                        <Text note>E-mail: {person.email}</Text>
                        <Text note>Celular: {person.cell}</Text>
                    </Body>
                </ListItem>
            </List>
        );
    });

    return <Content>{elements}</Content>;
};

export default PeopleList;
