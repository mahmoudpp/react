import { useFormik } from "formik";
import { Box, TextField, Button,Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { grey, yellow } from "@mui/material/colors";
import { Formik } from 'formik';
import { contactValidationSchema } from "./validitions.js/contactValidation";
const Formtodolist = ({
  HeaderFormRef,
  FormToDOList,
  FormButtonToDoList,
  CaptionFormRef,
  update,
  setupdate,
  FormButtonToDoListupdate
}) => {





  const InputFormToDoList = {
    HeaderForm: "",
  };
  const formik = useFormik({
    initialValues: InputFormToDoList,
    onSubmit: (values , { resetForm }) => {
     
      resetForm(); 
      
    },
    validationSchema: contactValidationSchema,
  });

  return (
    <>
    <form autoComplete="off" onSubmit={formik.handleSubmit} >
    <Box
        sx={{
          width: { md: "90%", sm: "95%" },
          bgcolor: grey[300],
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        <Grid container spacing={2}>
          <Grid size={9} >
            <Box sx={{position:"relative", width:"1005"}}>
            <TextField
              inputRef={HeaderFormRef}
              onChange={(event)=>{
                formik.handleChange(event);
                FormToDOList(event);
              }

              }
              // onChange={FormToDOList}
              id="HeaderForm"
              label="کار جدید ..."
              variant="outlined"
              fullWidth
              sx={{
                bgcolor: "white",
                borderRadius: "10px",
                color: "#000",
                "& .MuiInputBase-input": { color: "black.main" },
                "& .MuiInputLabel-root": { color: grey[800] },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: grey[300] },
                  "&:hover fieldset": { borderColor: "#E7D24E" },
                  "&.Mui-focused fieldset": { borderColor: "#E7D24E" },
                  
                },       }}
            //   helperText={
            //     formik.touched.HeaderForm
            //         ? formik.errors.HeaderForm
            //         : null
            // }
            error={Boolean(
              formik.touched.HeaderForm &&
                  formik.errors.HeaderForm
          )}
          // value={formik.values?.HeaderForm}
          
            />
            
            <Typography variant="caption" sx={{fontSize:"10px" , color:"red" ,position:"absolute", left:"4px", bottom:"-17px" }}  >
              {formik.touched.HeaderForm ? formik.errors.HeaderForm: null}
            </Typography>

            </Box>
            
          </Grid>
          <Grid size={3}>
            <Button
              type="submit"
              onClick={(event)=> {FormButtonToDoList(event) ; }}
              // onClick={(values, { resetForm }) => {
              //   console.log('Submitted values:', values);
              //   FormButtonToDoList();   
              //   resetForm();    
              // }}
              
              id="ButtonForm"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                display:update? "none":"inline-block",
                fontSize: "21px",
                bgcolor: "yellow.main",
                borderRadius: "10px",
              }}
            >
              {" "}
              افزودن
            </Button>
            <Button
              type="submit"
              onClick={(event)=> {FormButtonToDoListupdate(event) ; }}
              // onClick={(values, { resetForm }) => {
              //   console.log('Submitted values:', values);
              //   FormButtonToDoList();   
              //   resetForm();    
              // }}
              
              id="ButtonForm"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                display:update? "inline-block":"none",
                fontSize: "21px",
                bgcolor: "yellow.main",
                borderRadius: "10px",
              }}
            >
              {" "}
              ویرایش
            </Button>
          </Grid>
          <Grid size={12} sx={{marginTop:"10px"}}>
            <TextField
              inputRef={CaptionFormRef}
              onChange={FormToDOList}
              multiline
              rows={2}
              id="CaptionForm"
              label="توضیحات..."
              variant="outlined"
              fullWidth
              sx={{
                bgcolor: "white",
                borderRadius: "10px",
                color: "#000",
                "& .MuiInputBase-input": { color: "black.main" },
                "& .MuiInputLabel-root": { color: grey[800] },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: grey[300] },
                  "&:hover fieldset": { borderColor: "#E7D24E" },
                  "&.Mui-focused fieldset": { borderColor: "#E7D24E" },
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>

    </form>
      
    </>
  );
};

export default Formtodolist;
