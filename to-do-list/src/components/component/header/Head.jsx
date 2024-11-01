// import Grid from '@mui/material/Grid2';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  TextField,
  Button,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import { grey, yellow } from "@mui/material/colors";
import Pomodoro from "../pomodoro/Pomodoro";

import Todolists from "../todolists/Todolists";
import Formtodolist from "../todolists/Formtodolist";

import Grid from "@mui/material/Grid2";


const Head = ({
  succesToDoList,
  value,
  handleChange,
  FormToDOList,
  FormButtonToDoList,
  valuesToDoList,
  HeaderFormRef,
  CaptionFormRef,
  DeletToDoList,
  SuccessToDolist,
  EditToDoList,
  update,
  setupdate,
  FormButtonToDoListupdate,
  setForceRender,
  setForceRender2,
  forceRender,
  forceRender2,
  logoutUser,
}) => {
  const tabProps = (index) => {
    return {
      id: `sidbar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  return (
    <>
      <Grid container sx={{ paddingTop: "40px" }} direction="ltr">
        <Grid
          size={{ lg: 6, xl: 6, md: 6, sm: 12, xs: 12 }}
          sx={{
            display: "flex",
            position: "relative",
            maxHeight: "220px",
            justifyContent: { xs: "center", sm: "center", md: "start" },
          }}
        >
          <Box
            component="div"
            sx={{
              position: "relative",
              width: "220px",
              height: "220px",
              border: "none",
              borderRadius: "50%",
              backgroundColor: "yellow.main",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress
              variant="determinate"
              value={succesToDoList}
              thickness={1.5}
              sx={{
                position: "absolute",
                "& .MuiCircularProgress-circle": { strokeLinecap: "round" },
              }}
              size="220px"
              color="black.main"
            />
            <Typography
              variant="h3"
              fontSize={"40px"}
              sx={{
                fontFamily: "GROBOLD",
                textAlign: "center",
                color: "black.main",
              }}
            >
              ToDo{<br />}List{<br />}
              {succesToDoList}%
            </Typography>
          </Box>
        </Grid>
        <Grid
          size={{ lg: 6, xl: 6, md: 6, sm: 12, xs: 12 }}
          sx={{
            height: { md: "110px", sm: "50px" },
            alignItems: "end",
            display: "flex",
          }}
        >
          <Box
            component="div"
            sx={{
              width: "100%",
              borderBottom: `3px solid ${grey[400]}`,
              display: "flex",
              justifyContent: { xs: "space-between", md: "end" },
              paddingBottom: "20px",
            }}
          >
            {/* <Link
              to=""
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "50px",
              }}
            >
              <AssignmentIndRoundedIcon
                sx={{
                  color: `${grey[800]}`,
                  marginRight: "10px",
                  fontSize: "25px",
                }}
              />
              <Typography sx={{ color: `${grey[800]}`, fontSize: "25px" }}>
                ثبت نام
              </Typography>
            </Link> */}

            <Link to="/Login" style={{ display: "flex", alignItems: "center" }} onClick={()=>{logoutUser();window.location.href = window.location.href="/Login";}}>
              <ExitToAppRoundedIcon
                sx={{
                  color: `${grey[800]}`,
                  marginRight: "10px",
                  fontSize: "25px",
                }}
              />
              <Typography   sx={{ color: `${grey[800]}`, fontSize: "25px" }}>
                خروج
              </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid
          size={{ lg: 6, xl: 6, md: 6, sm: 12, xs: 12 }}
          sx={{ mx: { sm: "auto", md: "0" }, my: { xs: "30px", md: "17px" } }}
        >

          <Formtodolist  FormButtonToDoListupdate={FormButtonToDoListupdate} HeaderFormRef={HeaderFormRef} FormToDOList={FormToDOList} FormButtonToDoList={FormButtonToDoList} CaptionFormRef={CaptionFormRef} update={update} setupdate={setupdate} />
          <Todolists setForceRender={setForceRender} setForceRender2={setForceRender2} forceRender={forceRender} forceRender2={forceRender2}  setupdate={setupdate} valuesToDoList={valuesToDoList} SuccessToDolist={SuccessToDolist} DeletToDoList={DeletToDoList} EditToDoList={EditToDoList} />
        </Grid>
        <Grid
          size={{ lg: 6, xl: 6, md: 6, sm: 12, xs: 12 }}
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            marginTop: { md: "-110px" },
          }}
        >
          <Box component="div" sx={{ width: "100%" }}>
            <Box component="div" sx={{ width: "100%", paddingTop: "20px" }}>
              <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                TabIndicatorProps={{ style: { backgroundColor: "#000" } }}
                sx={{
                  "& .MuiTab-root": {
                    bgcolor: grey[400],
                    margin: "auto",
                    fontSize: "20px",
                    transition: ".3s ease",
                  },
                  "& .Mui-selected": {
                    bgcolor: "yellow.main",
                    color: "black.main",
                  },
                }}
              >
                <Tab
                  sx={{
                    "&.MuiTab-root": {
                      borderTopLeftRadius: "10px",
                      color: "black.main",
                    },
                  }}
                  label="پومودورو"
                  {...tabProps(0)}
                />
                <Tab
                  sx={{
                    "&.MuiTab-root": {
                      borderTopRightRadius: "10px",
                      color: "black.main",
                    },
                  }}
                  label="ساعت"
                  {...tabProps(1)}
                />
              </Tabs>
            </Box>
            <Box>
              <Pomodoro value={value} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Head;
