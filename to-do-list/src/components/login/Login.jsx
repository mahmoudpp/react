import  Grid  from "@mui/material/Grid2"
import { Link } from "react-router-dom"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import post from "../../assets/post.png";
import { Button } from "@mui/material";
import Github from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import sinupsvg from "../../assets/sinup1.svg";
import { Helmet } from "react-helmet-async";
import {useColorScheme } from '@mui/material/styles'
import { yellow } from "@mui/material/colors";
// window.innerWidth;


const Login = ({FormLogin , FormLoginButton}) =>{

//  const[mode , setmode] = useColorScheme();



    return(
        <>

          <Helmet>
            <title>Login</title>
          </Helmet>
         
        <Grid container sx={{height:"100vh",width:"90%",margin:"0 auto ",overflow:"hidden",display:"flex" , justifyContent:"flex-end",}}   spacing={0}>
            <Grid  size={{ xs: 12,sm:12, md: 8,lg:8,xl:8 }}  sx={{display:"flex", justifyContent:"space-between",alignItems:"center",height:"20px",flexWrap:"wrap",marginTop:"10px"  }}>
            
            <div style={{display:"flex" , alignItems:"center", justifyContent:"space-between"}}>
                <img src={post} alt="" style={{marginLeft:"15px", width:"28px", height:"28px"}}/>
                <Link to={""}> <p style={{color:"#EAD02A", fontSize:"18px", fontWeight:"bold"}}>بلاگ پست</p></Link>
                
            </div>

                <div style={{display:"flex" , alignItems:"center", justifyContent:"space-between"}}>
                    <AccountBoxIcon  style={{marginLeft:"15px", width:"28px", height:"28px" , color:"black"}}  />
                    <Link to={"/Singup"} style={{textDecoration:"none", color:"black" , fontSize:"18px", fontWeight:"bold"}}>ثبت نام</Link>   
                </div>
               
                <div style={{width:"100%",marginTop:"10px"}}>
                    <hr  style={{width:"100%",height:"3px",backgroundColor:"#B6B5B1" , color:"#B6B5B1",border:"none"}}/>
                </div>
                 
            </Grid>
            

            <Grid size={{ xs: 0,sm:0, md: 6,lg:6,xl:6 }} sx={{position:"absolute", left:"0", top:"20%"}}    >

                <img src={sinupsvg} alt="" style={{width:"100%" , height:"70vh" }} />

            </Grid>



            <Grid size={{ xs: 12,sm:12, md: 6,lg:6,xl:6 }}    sx={{ display:"flex", alignItems:"flex-start",justifyContent:"flex-start", flexDirection:"column", height:"90vh"}} >
                <div style={{width:"95%" , margin:"auto"}}>
                    <form action="" style={{ display:"flex", justifyContent:"center", flexDirection:"column" , width:"100%"}} className="formLogin">
                        <h2 style={{fontSize:"26px", margin:"40px auto 20px"}}>ورود به حساب</h2>
                        
                        <label htmlFor="email">نام کاربری</label>
                        <input type="text" placeholder="ایمیل خود را اینجا وارد کنید" id="username" name="eusername" onChange={FormLogin} />

                        <label htmlFor="password">پسورد</label>
                        <input type="password" placeholder="پسورد خود را اینجا وارد کنید" id="password" name="password" onChange={FormLogin} />

                        <Button onClick={FormLoginButton} variant="contained" color="yellow" sx={{width:"240px" , height:"50px" , margin:"20px auto" , fontSize:"22px", fontWeight:"600" ,color:"#000"}}>ورود</Button>
                        
                </form>
                
                    <h2 style={{textAlign:"center",fontSize:"22px", color:"grey",marginBottom:"15px"}}> - OR - </h2>

                <div style={{display:"flex", justifyContent:"space-around" , flexWrap:"wrap",gap:"10px"}}>
                    <Button variant="outlined" color="black" sx={{borderRadius:"15px",fontSize:"13px" , width:"187px" }}   >ثبت نام با گیت هاب   <Github sx={{ fontSize: 35 , marginLeft:"auto" }} /></Button>
                    <Button variant="outlined" color="black" sx={{borderRadius:"15px" ,fontSize:"13px", width: "187px" }}>ثبت نام با گوگل <GoogleIcon  sx={{ fontSize: 35 , marginLeft:"auto" }}/></Button>
                </div>
                    

                </div>
               
                
            </Grid>

        </Grid>

        </>
    )
}

export default Login;