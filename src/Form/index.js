import React, {useState} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";

const Form = () => {

const [pasos, setPasos] = useState(0);

const actualizarPasos = (pasos)=> {
  console.log("Actualizar", pasos);
  setPasos(pasos)
};
 
const paso = {
  0: <DatosUsuario actualizarPasos={actualizarPasos} />, 
  1: <DatosPersonales actualizarPasos={actualizarPasos} />, 
  2: <DatosEntrega actualizarPasos={actualizarPasos} />, 
  3: <Complete />
};

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {(pasos < 3) && <Stepper pasos={pasos} />}
        {/*<DatosUsuario />
        <DatosPersonales />
        <DatosEntrega />*/}
        {paso[pasos]}
      </FormSpace>
    </Box>
  );
};

export default Form;
