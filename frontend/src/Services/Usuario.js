import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { RoutesContext } from '../Contexts/RoutesContext'

import api from './api'

const Usuario = {

  buscaNomeDeUsuarioById(id, setNome){
    
    const user = {
      id: id
    }
    
    api.post("usuarios/buscanomeusuario", user).then((res, error) => {
      console.log(res.data.nome)
      setNome(res.data.nome)
      if(error){
        console.log(error)
        return "erro"
      }
      else return res.data.nome;
    })
  },

  listaAmigos(id, setListaAmigos){
    
    api.post("usuarios/buscaamigos", {id : id}).then((res, error) => {
      setListaAmigos(res.data)
    })
  }

  


}

export default Usuario