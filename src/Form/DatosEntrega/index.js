import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarCiudad, validarDireccion, validarEstado } from "./validaciones";

const DatosEntrega = ({actualizarPasos}) => {
  
    const [direccion, setDireccion] = useState ({ value: "", valid: true})
    const [ciudad, setCiudad] = useState ({ value: "", valid: true})
    const [estado, setEstado] = useState ({ value: "", valid: true})
  

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}

      onSubmit = {(evento)=>{
        evento.preventDefault();
        actualizarPasos(3);
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={!direccion.valid}
        helperText={!direccion.valid && "Ingresa al menos dos caracteres"}
        value={direccion.value}
        onChange={(input)=>{
          const value = input.target.value
          const valid = validarDireccion(value)
          setDireccion({value, valid})
          console.log(value, valid)
        }}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={!ciudad.valid}
        helperText={!ciudad.valid && "Ingresa al menos dos caracteres"}
        value={ciudad.value}
        onChange={(input)=>{
          const value = input.target.value
          const valid = validarCiudad(value)
          setCiudad({value, valid})
          console.log(value, valid)
        }}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={!estado.valid}
        helperText={!estado.valid && "Ingresa al menos dos caracteres"}
        value={estado.value}
        onChange={(input)=>{
          const value = input.target.value
          const valid = validarEstado(value)
          setEstado({value, valid})
          console.log(value, valid)
        }}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
