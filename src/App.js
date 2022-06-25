import './App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { tabledelete, tableget, tablegetbyid, tablepost, tableput } from './store/Actions/data.action';
import { useEffect, useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';

function App() {

  const [addform,setAddform]=useState(false)
  const [editform,setEditform]=useState(false)
  const [id,setId]=useState('')

  const databyid = useSelector(state => state.dataReducer.tabledatabyid);

  const [values,setValues]=useState({ })

    const dispatch = useDispatch();
    

    const deletedata = async (id)=>{
     await dispatch(tabledelete(id))
     //dispatch(tableget())
      toast.success("deleted successfully!");
    }
    const data = useSelector(state => state.dataReducer.tabledata);

    const handlepost=()=>{ 
      if(addform===true){
        setAddform(false)
      }
      else{
        setAddform(true)
      }
      dispatch(tablepost(values))
     toast.success("added successfully!");
    }

    const handleput=(id)=>{ 
      if(editform===true){
        setEditform(false)
      }
      else{
        setEditform(true)
      }
      dispatch(tableput(values,id))
     toast.success("edited successfully!");
    }


    const handleedit=(id)=>{
      if(editform===true){
        setEditform(false)
      }
      else{
        setEditform(true)
      }
      dispatch(tablegetbyid(id))
      setId(id)
    }
    
    const handleChange=(name)=>(event)=>{
    let value = event.target.value
    setValues({...values,[name]:value})
    }

    useEffect(()=>{
      dispatch(tableget())
        setValues({
    "userId":databyid?.userId,
    "title":databyid?.title,
    "body":databyid?.body
        })
},[dispatch,databyid])

  return (
    <div className="App" style={Container}>
       <ToastContainer />
       {addform===true||editform===true?
   <form >
    <br/>
     <TextField
          required
          id="outlined-required"
          placeholder='User Id'
          onChange={handleChange('userId')}
          value={values?.userId}
        />
        &nbsp;
       <TextField
          required
          id="outlined-required"
          placeholder='Title'
          onChange={handleChange('title')}
          value={values?.title}
        />
        &nbsp;
       <TextField
          required
          id="outlined-required"
          placeholder='Body'
          value={values?.body}
          onChange={handleChange('body')}
        /> &nbsp;
        {addform===true?
         <Button variant="contained"  onClick={()=>handlepost()}>Add</Button>
         :
         <Button variant="outlined"  onClick={()=>handleput(id)}>Edit</Button>
        }
   </form>
    : 
    <div style={addbutton}>
    <Button variant="contained" onClick={()=> setAddform(true)} >Add +</Button>
    </div>
    }
       <br/>
       <br/>
     <TableContainer component={Paper} style={table}>
      <Table  stickyHeader aria-label="sticky table">
        <TableHead >
          <TableRow>
          <TableCell><b>S.No</b></TableCell>
            <TableCell><b>UserId</b></TableCell>
            <TableCell ><b>Title</b></TableCell>
            <TableCell ><b>Body</b></TableCell>
            <TableCell ><b>Actions</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item,index)=>{return(
             <TableRow  key={index}
             >
              <TableCell component="th" scope="row">
                {index+1}
               </TableCell>
               <TableCell>
                {item?.userId}
               </TableCell>
               <TableCell>{item?.title}</TableCell>
               <TableCell >{item?.body}</TableCell>
               <TableCell  >
                <div style={buttons}>
               <Button variant="outlined" onClick={()=>handleedit(item?.id)}>Edit</Button> &nbsp;&nbsp;
               <Button variant="outlined" color="error" onClick={()=>deletedata(item?.id)}>Delete</Button>
               </div>
                </TableCell>

             </TableRow>
          )})}
           
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default App;

const Container={
  marginLeft:'100px',
  marginRight:'100px',
  marginTop:'100px'
}
const table={
  border:'1px solid gray',
  height:'500px',
  overflowY:'auto'
}
const buttons={
  display:'flex'
}

const addbutton={
  display:'flex',
  justifyContent:'right'
}