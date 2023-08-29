import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre, validarApellido, validarTelfono } from "./validaciones";

const DatosPersonales = ({actualizarPasos}) => {
  const [nombre, setNombre] = useState ({ value: "", valid: true})
  const [apellido, setApellido] = useState ({ value: "", valid: true})
  const [telefono, setTelefono] = useState ({ value: "", valid: true})

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
        actualizarPasos(2);
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={!nombre.valid}
        helperText={!nombre.valid && "Ingresa al menos dos caracteres"}
        value={nombre.value}
        onChange={(input)=>{
          const value = input.target.value
          const valid = validarNombre(value)
          setNombre({value, valid})
          console.log(value, valid)
        }}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={!apellido.valid}
        helperText={!apellido.valid && "Ingresa al menos dos caracteres"}
        value={apellido.value}
        onChange={(input)=>{
          const value = input.target.value
          const valid = validarApellido(value)
          setApellido({value, valid})
          console.log(value, valid)
        }}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        error={!telefono.valid}
        helperText={!telefono.valid && "Ingresa al menos 8 numeros y maximo 14"}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={telefono.value}
        onChange={(input)=>{
          const value = input.target.value
          const valid = validarTelfono(value)
          setTelefono({value, valid})
          console.log(value, valid)
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
