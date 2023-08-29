import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarEmail, validarPassword } from "./validaciones";

const DatosUsuario = ({actualizarPasos})=> {

  const [email, setEmail] = useState({value: "", valid: true})
  const [password, setPassword] = useState({value: "", valid: true})

  
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
        onSubmit={(event) => {
          event.preventDefault();
          console.log(email,password);
          if(email.valid && password.valid){
            console.log("Siguiente Formulario");
            actualizarPasos(1)
          }else{
            console.log("Hay errores")
          }
        }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          onBlur={() => validarEmail(email)}
          type="email"
          error={!email.valid}
          helperText={!email.valid && "Ingresa un correo electrónico válido"}
          value={email.value}
          onChange={(input) => {
            const valorEmail = input.target.value
            setEmail({value: valorEmail, valid: validarEmail(valorEmail)})
          }
          }

        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          onBlur={() => validarPassword(password)}
          type="password"
          error={!password.valid}
          helperText={!password.valid && "Ingresa una password válida, al menos 8 caracteres y maximo 20"}
          value={password.value}
          onChange={(input) => {
            const valorPassword = input.target.value
            setPassword({value: valorPassword, valid: validarPassword(valorPassword)})
          }
          }
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>
    );
  }


export default DatosUsuario;
