import { useEffect,useLayoutEffect } from "react";
import {
    Box,
    Typography,
    Checkbox,
  } from "@mui/material";
  
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { grey, yellow } from "@mui/material/colors";
import Grid from "@mui/material/Grid2";


const Todolists = ({valuesToDoList,SuccessToDolist,DeletToDoList,EditToDoList , setupdate ,setForceRender,
  setForceRender2,
  forceRender,
  forceRender2 }) =>{

  useEffect(()=>{
    setForceRender(!forceRender);
    setForceRender2(!forceRender2)
    return ()=>{}
  },[])
    return(
        <>
        
        {valuesToDoList.map((item,index,) => (
            <Box
              sx={{
                width: { md: "90%", sm: "95%" },
                bgcolor: grey[300],
                padding: "15px",
                borderRadius: "10px",
                marginTop: "15px",
              }}
            >
              <Grid size={12}>
                <Box fullWidth sx={{ borderRadius: "20px" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox
                    onMouseUp={SuccessToDolist}
                    id={`${item.ID}`}
                    checked={item.bool}
                   
                      sx={{
                        "& .MuiSvgIcon-root": { fontSize: 28 },
                        color: "black.main",
                        "&.Mui-checked": { color: "#f9a825" },
                      }}
                    />
                    <Typography variant="h6" sx={{ width: "85%" }}>
                      {item.HeaderForm}
                    </Typography>
                    <BorderColorRoundedIcon
                      sx={{
                        fontSize: 25,
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                      id={index}
                      onClick={(event)=>{ EditToDoList(event);}}
                    />
                   
                    <DeleteForeverRoundedIcon
                        sx={{ color: "red", fontSize: 25, cursor: "pointer" }}
                        id={`${item.ID}`} onClick={DeletToDoList}
                      />
                    
                      
                  </Box>
                  <Box sx={{ marginTop: "10px" }}>
                    <Typography variant="subtitle2">
                      {item.CaptionForm}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Box>
          ))}
        </>
    )
}


export default Todolists;