
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box, Button, Checkbox, CircularProgress, Dialog, DialogActions, DialogContent,
  DialogTitle, Modal,
  Pagination, Stack, TextField, styled
} from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { CloudUploadIcon, XCircle } from 'lucide-react';
import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import * as yup from 'yup';
import LinearProgress from '@mui/material/LinearProgress';
import { useEffect } from 'react';

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
})
const style = {
  position: 'absolute',
  top: '50%',
  left: '60%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',

});



const ClientTable = () => {
    const [open,setOpen] = useState(false)
    const [openAdd,setOpenAdd] = useState(false)
    const [isSearch,setIsSearch] = useState(false)
    const [records,setRecords] = useState(0)
    const [img,setImg] = useState()
    const {register,handleSubmit,reset,formState:{errors}} = useForm({
      resolver: yupResolver(schema)
    }) 

    const [progress, setProgress] = React.useState(0);


    const fetchUsers = async (api) => {
      const response = await axios.get(api);
      return response.data;
    };

    const handleSave = (upImg)=>{
      const file = upImg.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setImg(reader.result); 
            };
            reader.readAsDataURL(file);
            setImg(file);
          }
    }
    
    const handleEdit = (client)=>{
      //setSelectedClient(client)
      reset(client)
      console.log("Following are editable")
      console.log(client.firstName)
      console.log(client.gender)
      setOpen(true)
      
    }
    
    const handleDelete = (client)=>{
      console.log("Following are Deletable")
      console.log(client.firstName)
      console.log(client.gender)
    }

    const handleClose = () => setOpen(false)
  
    const {data,error} = useSWR(`https://dummyjson.com/users?limit=6&skip=${records}`,fetchUsers);
    if (error) return <div>Failed to load data</div>;
    if (!data) return  <Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>;

    const clients = data.users;
    const count = clients.length;
    const paginationFunction = (val) => {
      console.log(val)
      setRecords((val-1)*10)
    }

    const handleSearch = (item)=>{
        console.log(item)
        setIsSearch(!isSearch)
    }

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div className='p-3'>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
  {/* Search row with merged cells */}
  <TableRow className="searchRow">
    <TableCell colSpan={7} align="center">
    <div className="flex items-center justify-evenly px-5">
        <input
          type="text"
          placeholder="Search..."
          className={`border-2 h-8 w-9/12 text-sm px-2`}
          onChange={(e) => console.log(e.target.value)}

        />
        <Button color='primary'>Clear</Button>
         <Button variant="contained" color='primary' onClick={()=>setOpenAdd(true)}>
         Add New
         </Button>
      </div>
    </TableCell>
  </TableRow>
</TableHead>
        <TableHead>
          <TableRow>
            <TableCell align='center'><div className='flex flex-col items-center'>
            <div className='flex justify-evenly items-center'>
            <Checkbox {...label} color="secondary" />
            Name
            </div>
            </div>
            </TableCell>
            <TableCell align='center'><div className='flex flex-col items-center'>
            <div className='flex justify-evenly items-center'>
            <Checkbox {...label} color="secondary" />
            Mobile
            </div>
            </div>
            </TableCell>
            <TableCell align='center'><div className='flex flex-col items-center'>
            <div className='flex justify-evenly items-center'>
            <Checkbox {...label} color="secondary" />
            DOB
            </div>
            </div>
            </TableCell>
            <TableCell align='center'><div className='flex flex-col items-center'>
            <div className='flex justify-evenly items-center'>
            <Checkbox {...label} color="secondary"/>
            IP Address
            </div>
           </div>
            </TableCell>
            <TableCell align="center" colSpan={2}> Process </TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client,index) => (  
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell align="center">{client.firstName}</TableCell>
              <TableCell align="center">{client.phone}</TableCell>
              <TableCell align="center">{client.birthDate}</TableCell>
              <TableCell align="center">{client.ip}</TableCell>
              <TableCell align="center"><Button color='primary' 
              onClick={()=>handleEdit(client)}>Edit</Button></TableCell>
              <TableCell align="center"><Button color='error'
              onClick={()=>handleDelete(client)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div className='flex justify-center items-center py-3.5'>
    <Stack spacing={2} className=''>
      <Pagination count={50} shape="rounded" onChange={(e,v)=>paginationFunction(v)}/>
    </Stack>
    </div>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Client</DialogTitle>
        <form onSubmit={handleSubmit(handleSave)}>
          <DialogContent>
            <TextField
              label="First Name"
              fullWidth
              margin="normal"
              {...register('firstName')}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
            <TextField
              label="Gender"
              fullWidth
              margin="normal"
              {...register('gender')}
              error={!!errors.gender}
              helperText={errors.gender?.message}
            />
            <TextField
              label="Phone"
              fullWidth
              margin="normal"
              {...register('phone')}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
            <TextField
              label="Date of Birth"
              fullWidth
              margin="normal"
              {...register('birthDate')}
              error={!!errors.birthDate}
              helperText={errors.birthDate?.message}
            />
            <TextField
              label="IP Address"
              fullWidth
              margin="normal"
              {...register('ip')}
              error={!!errors.ip}
              helperText={errors.ip?.message}
            />
          </DialogContent>
          <DialogActions className=''>
            <div className='w-11/12 flex justify-end px-1 pb-3'>
            <div className='w-1/3 flex justify-evenly'>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="secondary">
              Save
            </Button>
            </div>
            </div>
          </DialogActions>
        </form>
      </Dialog>
      <Modal
  open={openAdd}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} className="shadow-2xl drop-shadow-xl py-5">
  <form className="">
<div className='flex flex-col justify-center items-center 
gap-y-10 p-5'>
<div className='flex justify-between w-full'>
<TextField
          id="standard-search"
          label="Wedding Hall Name"
          type="text"
          
          color='secondary'
          className='w-1/3'
        />
        <TextField
          id="standard-search"
          label="Owner Name"
          type="text"
          
          color='secondary'
          className='w-1/3'
        />
      <TextField
          id="standard-search"
          label="Contact Number"
          type="number"
          
          color='secondary'
          className='w-1/4'
        />
        </div>
        <div className='flex justify-between w-full'>
        <TextField
          id="standard-search"
          label="Email"
          type="text"
          
          color='secondary'
          className='w-1/3'
        />
        
        <TextField
          id="standard-search"
          label="Address"
          type="text"
          
          color='secondary'
          className='w-1/3'
        />
        <TextField
          id="standard-search"
          label="City"
          type="text"
          
          color='secondary'
          className='w-1/4'
        />
        </div>
        <div className='flex justify-center items-center w-10/12 gap-10'>
       <div className='w-1/4 h-52 flex flex-col justify-center border-2'>
       <img src={img != null ? img : null} alt='' className='w-full'/>
       </div>
       <Button
  component="label"
  role={undefined}
  
  color="secondary"
  tabIndex={-1}
  startIcon={<CloudUploadIcon />}
  className='h-12'
>
  Upload files
  <VisuallyHiddenInput
    type="file"
    onChange={handleSave}
    multiple
  />
</Button>
        </div>
        <div className=' w-full flex gap-10 justify-center'>
        <Button color='secondary' className='w-1/6' onClick={()=>setOpenAdd(false)}>Cancel</Button>
        <Button color='secondary' variant="contained" className='w-1/6'>
        Submit
        </Button>
        </div>
        </div>
 </form>
  </Box>
</Modal>
    </div>
  )
}

export default ClientTable
