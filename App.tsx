import {View, Text, StyleSheet} from 'react-native'
import {Lista} from './components/Lista'

function App(){
  return(
    <View>
      <Text style={ styles.title}> Lista de Afazeres Dosméticos </Text>
      <Lista
      horario={['Manhã']} 
      
      afazeres={[
      '1. Lavar as roupas sujas. \n',
      '2. Lavar e guardar a louça\n',
      '3. Limpar a pia da cozinha\n',
      '4. Preparar o almoço.\n',
      '5. Colocar as roupas no varal.\n'
      ]}
      />

    <Lista 
    
    horario={['Tarde']}

    afazeres={[
      '1. Limpar a mesa da cozinha\n',
      '2. Varrer e passar o pano nos cômodos da casa.\n',
      '3. Lavar e guardar a louça\n',
      '4. Limpar a pia da cozinha.\n',
      '5. Tirar as roupas do varal.\n'
    ]}
    />

    <Lista 
    
    horario={['Noite']}

    afazeres={[
      '1. Levar o cachorro para passear.\n',
      '2. Limpar os calçados utilizados durante o dia.\n',
      '3. Preparar o jantar.\n'
    ]}
    />

    </View>
  )
}

const styles = StyleSheet.create ({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },

}) 


export default App