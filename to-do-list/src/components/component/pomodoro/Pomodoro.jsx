import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import moment from "moment-jalaali";
const Pomodoro = ({ value }) => {
  const [minute, setminute] = useState(25);
  const [second, setsecond] = useState(0);

  const [date, setdate] = useState();

  const [datesecond, setdatesecond] = useState();
  const [dateminute, setdateminute] = useState();
  const [datehours, setdatehours] = useState();

  const [startPomodoro, setstartPomodoro] = useState(true);

  useEffect(() => {
    const today = moment();
    const dayOfWeek = today.format("dddd"); // نام روز هفته
    const day = today.format("jD"); // روز شمسی
    const month = today.format("jMMMM"); // نام ماه
    moment.loadPersian();

    const todayEn = new Date();

    // گرفتن شماره روز (1 تا 31)
    const dayMonth = todayEn.getDate();

    // گرفتن نام روز هفته
    const daysfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayfWeek = daysfWeek[todayEn.getDay()];
    const formattedDate = `${dayOfWeek} ${day} ${month} ${dayfWeek} ${dayMonth}`;
    setdate(formattedDate);

    const now = new Date();

    // گرفتن ساعت، دقیقه و ثانیه
    let hours = now.getHours(); // ساعت (0 تا 23)
    let minutes = now.getMinutes(); // دقیقه (0 تا 59)
    let seconds = now.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    setdatesecond(seconds);
    setdateminute(minutes);
    setdatehours(hours);

    const counter = setInterval(() => {
      let m = minute;
      let s = second;
      s -= 1;
      if (s == -1) {
        s = 59;
        m -= 1;
      }
      setminute(m);
      setsecond(s);
    }, 1000);

    if(!startPomodoro){
        clearInterval(counter);
    }

    if (minute == 0 && second == 0) {
      clearInterval(counter);
    }

    return () => {
      clearInterval(counter);
    };
  });
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0px 6px 0px",
        }}
      >
        <Typography variant="h5" sx={{fontWeight:"bold"}}>{date}</Typography>
      </Box>
      <div hidden={value === 1}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between", alignItems:"center",
          }}
        >
          <Typography
            sx={{
              borderRadius: "10px",
              fontFamily: "GROBOLD",
              fontSize: "130px",
              bgcolor: grey[300],
              width: "283px",
              height: "283px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {second < 10 ? "0" : ""}
            {second}
          </Typography>
          <Typography sx={{ fontFamily: "GROBOLD", fontSize: "130px" }}>
            {" "}
            :{" "}
          </Typography>
          <Typography
            sx={{
              borderRadius: "10px",
              fontFamily: "GROBOLD",
              fontSize: "130px",
              bgcolor: grey[300],
              width: "283px",
              height: "283px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {minute < 10 ? "0" : ""}
            {minute}
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            width: "100%",
            justifyContent: "space-between",
            display: "flex",
            marginTop: "20px",
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{ fontSize: "20px", width: "150px", bgcolor: "yellow.main", borderRadius:"10px" }}
            onClick={()=>{setstartPomodoro(prestartPomodoro => {return !prestartPomodoro})}}
          >
            {startPomodoro ? "مکث" : "شروع"}
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{ fontSize: "20px", width: "150px", bgcolor: "yellow.main", borderRadius:"10px" }}
            onClick={()=>{setminute(25) ; setsecond(0)}}
          >
            شروع مجدد
          </Button>

        </Box>
      </div>

      <div hidden={value === 0}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between", alignItems:"center"
          }}
        >
          <Typography
            sx={{
              borderRadius: "10px",
              fontFamily: "GROBOLD",
              fontSize: "130px",
              bgcolor: grey[300],
              width: "283px",
              height: "283px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {dateminute}
          </Typography>
          <Typography sx={{ fontFamily: "GROBOLD", fontSize: "130px" }}>
            {" "}
            :{" "}
          </Typography>
          <Typography
            sx={{
              borderRadius: "10px",
              fontFamily: "GROBOLD",
              fontSize: "130px",
              bgcolor: grey[300],
              width: "283px",
              height: "283px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {datehours}
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default Pomodoro;
