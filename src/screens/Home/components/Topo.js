import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

import { carregaTopo } from '../../../services/carregaDados';

import logo from '../../../assets/logo.png';
//Transformando em class para rodar só quando a aplicação estiver criada
class Topo extends React.Component {
    // metodo de estado
    state = {
        topo: {
            boasVindas: '',
            legenda: '',
        }
    }

    //metodo de classe, acessado com this.
    atualizaTopo() {
        const retorno = carregaTopo();
        this.setState({ topo: retorno })
    }

    componentDidMount() {
        this.atualizaTopo();
    }

    render() {
        return <View style={estilos.logo}>
            <Image style={estilos.image} source={logo} />
            <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
            <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
        </View>
    }
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    image: {
        width: 70,
        height: 28,
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26
    }
})

export default Topo();