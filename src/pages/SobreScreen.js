import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

function SobreScreen(props) {

    const navigation = useNavigation();
    const route = useRoute();

    //pega os parametros enviados para essa tela usando routessssss
    const name = route.params.name;

    //pegando parametros via props
    const nome = props.route.params.name;

    //quando nao mandar ele ainda funciona

   // const nome = props.route.params?.name ?? 'visitante';


    const handleBackButton = () => {

        // opção 01 - volta para tela anterior
        // navigation.goBack();

        //avança para tela home
        // navigation.push('Home');

        //volta para a tela inicial
        //navigation.popToTop();

        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Text> tela de sobre: {name} ou {nome}</Text>

            <Button title="Voltar" onPress={handleBackButton} />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SobreScreen;