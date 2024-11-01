import MainLayout from "./components/layouts/MainLayout";

import { Route, Routes } from "react-router-dom";
import { useFormik } from "formik";
import Head from "./components/component/header/Head";
import Login from "./components/Login/Login";
import Singup from "./components/singup/Singup";
import { Navigate , useNavigate } from "react-router-dom";

import { useState, useEffect, usrRef, useRef,useLayoutEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import { getAllToDoList , deleteContact , createToDoList ,updateContact,updateContact2 ,singupUser , loginUser,logoutUser} from "./services/Contactservice";

let x = true;
function App() {
  const navigate = useNavigate();
  const [sinupcontent , setsinupcontent] = useState(
    {
      username:"",
      password:"",
      email:"",
    }
  )
  const [logincontent , setlogincontent] = useState(
    {
      username:"",
      password:"",
    }
  )
  const HeaderFormRef = useRef(null);
  const CaptionFormRef = useRef(null);

  const [forceRender, setForceRender] = useState(false);
  const [forceRender2, setForceRender2] = useState(false);
  const [idEdit , setidEdit] = useState();


  const [succesToDoList, setsuccesToDoList] = useState(100);
  const [value, setValue] = useState(0);
  const [valueToDoList, setvalueToDoList] = useState({
    HeaderForm: "",
    CaptionForm: "",
  });
  const [valuesToDoList, setvaluesToDoList] = useState([]);

  const [update , setupdat] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: booksData } = await getAllToDoList();
        setvaluesToDoList(booksData);
      } catch (err) {
        setvaluesToDoList([]);

      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: booksData } = await getAllToDoList();
        setvaluesToDoList(booksData);
        // console.log("reder2 true");
      } catch (err) {
        setvaluesToDoList([]);
        // console.log("reder2 false");

      }
    };
    fetchData();
    

  },[forceRender]);


  useLayoutEffect(()=>{

    if (!valuesToDoList || valuesToDoList.length === 0) return;

    // console.log(valuesToDoList)
    let count = 0;
    for (let i = 0; i < valuesToDoList.length; i++) {
      if (valuesToDoList[i].bool === true) {
        // console.log(valuesToDoList[i])
        
        count++;
      }
    }
    if (valuesToDoList.length > 0) {
      setsuccesToDoList(Math.floor((count / valuesToDoList.length) * 100));
    } else {
      setsuccesToDoList(0);
    }
  },[valuesToDoList])


  const FormToDOList = (event) => {
    setvalueToDoList({
      ...valueToDoList,
      [event.target.id]: event.target.value,
    });
  };
  const FormToDOList2 = () => {
    setvalueToDoList({
      ...valueToDoList,
      HeaderForm: HeaderFormRef.current.value,
      CaptionForm: CaptionFormRef.current.value,
    });
  };

  const FormButtonToDoList = () => {
    if (valueToDoList.HeaderForm == "") {
      return;
    }

    // setvaluesToDoList(prevvaluesToDoList => [...prevvaluesToDoList].reverse());
    // setvaluesToDoList((prevvaluesToDoList) =>
    //   [...prevvaluesToDoList].reverse()
    // );

    // setvaluesToDoList([...valuesToDoList, valueToDoList]);
    createToDoList(valueToDoList);


    // setvaluesToDoList((prevvaluesToDoList) =>
    //   [...prevvaluesToDoList].reverse()
    // );

    HeaderFormRef.current.value = "";
    CaptionFormRef.current.value = "";
    setvalueToDoList({
    HeaderForm: "",
    CaptionForm: "",
    });

    setForceRender(!forceRender);
  };
  const FormButtonToDoListupdate = () => {
    if (valueToDoList.HeaderForm == "") {
      return;
    }

    // setvaluesToDoList(prevvaluesToDoList => [...prevvaluesToDoList].reverse());
    // setvaluesToDoList((prevvaluesToDoList) =>
    //   [...prevvaluesToDoList].reverse()
    // );

    // setvaluesToDoList([...valuesToDoList, valueToDoList]);
    updateContact2(valueToDoList,idEdit);


    // setvaluesToDoList((prevvaluesToDoList) =>
    //   [...prevvaluesToDoList].reverse()
    // );

    setupdat(false);
    HeaderFormRef.current.value = "";
    CaptionFormRef.current.value = "";
    setvalueToDoList({
    HeaderForm: "",
    CaptionForm: "",
    });

    setForceRender(!forceRender);
  };

  const DeletToDoList = (event) => {
    deleteContact(event.currentTarget.id);
    setForceRender(!forceRender);

    // const deletee = valuesToDoList.filter((item) => {
    //   return item.ID != event.currentTarget.id;
    // });
    // setvaluesToDoList(deletee);
    // setForceRender(!forceRender);
  };

  const SuccessToDolist = (event) => {
    const itemToDoList = valuesToDoList.filter((item) => {
      return item.ID == event.target.id;
    });

    // itemToDoList[0].bool = !itemToDoList[0].bool;

    // const deletee = valuesToDoList.filter((item) => {
    //   return item.ID != event.target.id;
    // });
    updateContact(itemToDoList,event.target.id)

    // deletee.push(itemToDoList[0]);
    // setvaluesToDoList(deletee);
    setForceRender(!forceRender);

    setForceRender2(!forceRender2);
  };

  // const handleSetValue = () => {
  //   formik.setFieldValue('HeaderForm', 'مقدار دلخواه شما'); // تنظیم مقدار دلخواه
  // };

  const EditToDoList = (event) => {
    HeaderFormRef.current.value =
      valuesToDoList[event.currentTarget.id].HeaderForm;
    CaptionFormRef.current.value =
      valuesToDoList[event.currentTarget.id].CaptionForm;
      setupdat(true);
      setidEdit(valuesToDoList[event.currentTarget.id].ID)
   
    FormToDOList2();

    // formik.setFieldValue('HeaderForm',valuesToDoList[event.currentTarget.id].HeaderForm);
  };



  const FormSinup =(event)=>{
    setsinupcontent({
      ...sinupcontent,
      [event.target.id]: event.target.value,
    });
    console.log(sinupcontent)

  }
  const FormSinupButton = ()=>{

    singupUser(sinupcontent);
    setsinupcontent(
      {
        username:"",
        password:"",
        email:"",
      }
    )
    navigate("/Login");
  }

  const FormLogin =(event)=>{
    setlogincontent({
      ...logincontent,
      [event.target.id]: event.target.value,
    });

    console.log(logincontent)

  }
  const FormLoginButton = async ()=>{
    const token =await  loginUser(logincontent);
    setlogincontent(
      {
        username:"",
        password:"",
      });
      if (token) {
        // اگر ورود موفق بود، به صفحه‌ی Todolist بروید
    navigate("/Todolist");  
        
      } else {
        // اگر ورود ناموفق بود، می‌توانید یک پیام خطا نمایش دهید
        console.log("ورود ناموفق بود");
        // می‌توانید اینجا یک پیام یا نوتیفیکیشن برای کاربر نمایش دهید
      }
    setForceRender(!forceRender)
    setForceRender2(!forceRender2);
  }

  return (
    <MainLayout>
      {/* <Head  succesToDoList={succesToDoList} value={value} handleChange={handleChange} FormToDOList={FormToDOList}  FormButtonToDoList={FormButtonToDoList} valuesToDoList={valuesToDoList} HeaderFormRef={HeaderFormRef} CaptionFormRef={CaptionFormRef} DeletToDoList={DeletToDoList} SuccessToDolist={SuccessToDolist} EditToDoList={EditToDoList}/> */}
      <Routes>
        <Route />
        <Route path="/" element={<Navigate to="/Login" />} /> 
        <Route path="/Login" element={<Login FormLogin={FormLogin} FormLoginButton={FormLoginButton} />} />
        <Route path="/Singup" element={<Singup FormSinup={FormSinup} FormSinupButton={FormSinupButton} />} />
        <Route
          path="/Todolist"
          element={
            <Head
              succesToDoList={succesToDoList}
              value={value}
              handleChange={handleChange}
              FormToDOList={FormToDOList}
              FormButtonToDoList={FormButtonToDoList}
              valuesToDoList={valuesToDoList}
              HeaderFormRef={HeaderFormRef}
              CaptionFormRef={CaptionFormRef}
              DeletToDoList={DeletToDoList}
              SuccessToDolist={SuccessToDolist}
              EditToDoList={EditToDoList}
              update={update}
              setupdat={setupdat}
              FormButtonToDoListupdate={FormButtonToDoListupdate}
              setForceRender={setForceRender}
              setForceRender2={setForceRender2}
              forceRender={forceRender}
              forceRender2={forceRender2}
              logoutUser={logoutUser}
              navigate={navigate}
              
            />
          }
        />
      </Routes>
    </MainLayout>
  );
}

export default App;
