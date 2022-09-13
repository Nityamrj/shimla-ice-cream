import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import { useSnackbar } from 'notistack'; 
import '../../../index.css';
import { Typography, Box, Paper, Grid, TextField, InputLabel, MenuItem, FormControl, Select, FormHelperText, Button, Stack} from '@mui/material';
import UploadFile from '../../partials/uploadFile';
import CheckPageAccess from '../../../contexts/checkPageAccess.js';
    
const AddProduct = () => {
    const history = useNavigate();
    document.title = 'Add Product'
    CheckPageAccess();
    const { enqueueSnackbar } = useSnackbar();
    const [ categoryList, setCategoryList] = useState([]);
    const [ apiErrors, setApiErrors] = useState(''); 
    const [formData, setFormData] = useState({
        errors: {},
        product_name: '',
        category_id: '',
        category_name: '',
        desc: '',
        price: '',
        image_name: '',
        image_url: '',
        status: ''
    })

    const handleOnChange = (e) => {
        e.preventDefault();
        let targetName = e.target.name;
        let targetValue = e.target.value;
        console.log('-addProduct--typing-:', targetValue, formData);
        if(targetName === 'category_id'){
            let data = {[targetName]: targetValue}
            let err = validate(data);
            let filteredItem = categoryList.find((item) => item._id == targetValue);
            setFormData(prev => {
                return {
                    ...prev,
                    [targetName]: targetValue,
                    ['category_name']: filteredItem.category
                }
            })
        }else {
            let data = {[targetName]: targetValue}
            let err = validate(data);
            setFormData(prev => {
                return {
                    ...prev,
                    [targetName]: targetValue,
                    errors: {...prev.errors, ...err}
                }
            })
        }
    }

    const validate = (data) => {
        console.log('-validate--data-:', data);
        let err = {},
            product_name,
            category_id,
            desc,
            price,
            image_url,
            status;
        if(data.hasOwnProperty('product_name')){
            if(data.product_name === ''){
                product_name = 'This field is required'
            }else {
                product_name = '';
            }
            err.product_name = product_name;
        }
        if(data.hasOwnProperty('category_id')){
            if(data.category_id === ''){
                category_id = 'This field is required'
            }else {
                category_id = '';
            }
            err.category_id = category_id;
        }
        if(data.hasOwnProperty('desc')){
            if(data.desc === ''){
                desc = 'This field is required'
            }else {
                desc = '';
            }
            err.desc = desc;
        }
        if(data.hasOwnProperty('price')){
            if(data.price === ''){
                price = 'This field is required'
            }else {
                price = '';
            }
            err.price = price;
        }
        if(data.hasOwnProperty('image_url')){
            if(data.image_url === ''){
                image_url = 'This field is required'
            }else {
                image_url = '';
            }
            err.image_url = image_url;
        }
        if(data.hasOwnProperty('status')){
            if(data.status == ''){
                status = 'This field is required'
            }else {
                status = '';
            }
            err.status = status;
        }
        setFormData({
            ...formData,
            errors: {...formData.errors, ...err}
        })
        return err;
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const model = {
            product_name: formData.product_name,
            category_id: formData.category_id,
            category_name: formData.category_name,
            desc: formData.desc,
            price: formData.price,
            image_name: formData.image_name,
            image_url: formData.image_url,
            status: formData.status === 1 ? true : false,
        }
        console.log('-handleSubmit--model:', model);

        let err = validate(model);
        let flag = 1;
        for(let key in err){
            if(err[key] !== ''){
                console.log('err[key]:', err[key])
                flag = 0;
            }
        }
        
        if(flag){
            Axios.post(`${process.env.REACT_APP_API_SERVICE}/product/add`, model)
            .then((result) => {
                console.log('-handleSubmit--add product--success--:', result);
                enqueueSnackbar('Form submitted sucessfully!', { variant: 'success'});
                setTimeout(() => {
                    history('../manage-product');
                }, 2000)
            })
            .catch((error)=> {
                console.log('-handleSubmit--add product--error--:', error, error.response.data.message);
                if(error.response.status === 500){
                    setApiErrors(error.response.data.message)
                }
                enqueueSnackbar('Oops!, Something went wrong.', { variant: 'warning'})
            })
        }else {
            enqueueSnackbar('Kindly fix the highlighted errors.', { variant: 'error'})
        }
    }

    const getCategoryList = () => {
        Axios.get(`${process.env.REACT_APP_API_SERVICE}/category/getAll`)
        .then((result) => {
            console.log('-useEffect--get category list from server--success--:', result, result.data);
            let activeCategoryList = result.data.filter((item) => item.status === true);
            setCategoryList(activeCategoryList);
        })
        .catch((error)=> {
            console.log('-useEffect--get category list from server--error--:', error);
        })
    }

    useEffect(() => {
        getCategoryList();
    }, [1])

    return (
        <Box className="container">
        <Typography variant="h2.heading" component="h2" className="page-heading">Add Product</Typography>
        <Paper elevation={4} className="paper">
            <Grid container>
                {apiErrors!= '' ? (
                    <Grid item xs={12} sm={12} md={12} className="input-padding">
                        <h3 style={{color:'red'}}>{apiErrors}</h3>
                    </Grid>
                ) : ''}
                <Grid item xs={12} sm={12} md={6} className="input-padding">
                    <TextField
                        name="product_name"
                        fullWidth
                        id="outlined-error-helper-text"
                        label="Product Name"
                        color="secondary"
                        onChange={handleOnChange}
                        helperText={formData.errors.product_name ?? formData.errors.product_name}
                        error={formData.errors.product_name ?? formData.errors.product_name === '' ? true : false}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} className="input-padding">
                    <FormControl fullWidth>
                        <InputLabel color="secondary">Category</InputLabel>
                        <Select
                            name="category_id"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.category_id}
                            label="Category"
                            color="secondary"
                            onChange={handleOnChange}
                            error={formData.errors.category_id ?? formData.errors.category_id === '' ? true : false}
                        >
                            {categoryList.length > 0 ? (
                                categoryList.map((item) => <MenuItem key={item._id} value={item._id}>{item.category}</MenuItem>)
                            ) : ''}
                        </Select>
                        <FormHelperText style={{color: '#d32f2f'}}>{formData.errors.category_id ?? formData.errors.category_id}</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className="input-padding">
                    <TextField
                        name="desc"
                        fullWidth
                        id="outlined-error-helper-text-desc"
                        label="Short Description"
                        color="secondary"
                        onChange={handleOnChange}
                        helperText={formData.errors.desc ?? formData.errors.desc}
                        error={formData.errors.desc ?? formData.errors.desc === '' ? true : false}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} className="input-padding">
                    <TextField
                        name="price"
                        fullWidth
                        type="number"
                        id="outlined-error-helper-text-price"
                        label="Price"
                        color="secondary"
                        onChange={handleOnChange}
                        helperText={formData.errors.price ?? formData.errors.price}
                        error={formData.errors.price ?? formData.errors.price === '' ? true : false}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} className="input-padding">
                    <FormControl fullWidth>
                        <InputLabel color="secondary">Status</InputLabel>
                        <Select
                            name="status"
                            labelId="demo-simple-select-label2"
                            id="demo-simple-select2"
                            value={formData.status}
                            label="Status"
                            color="secondary"
                            onChange={handleOnChange}
                            error={formData.errors.status ?? formData.errors.status === '' ? true : false}
                            // helperText={formData.errors.status ?? formData.errors.status}
                        >
                            <MenuItem value={1}>Active</MenuItem>
                            <MenuItem value={2}>Inactive</MenuItem>
                        </Select>
                        <FormHelperText style={{color: '#d32f2f'}}>{formData.errors.status ?? formData.errors.status}</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className="input-padding">

                </Grid>
                <Grid item xs={12} sm={12} md={6} className="input-padding">
                    <UploadFile 
                        setFormData={setFormData} 
                        formData={formData}
                        // setFileName={setFileName}
                        />
                </Grid>
                <Grid item xs={12} sm={12} md={12} className="input-padding" justifyContent="flex-end">
                <Stack direction="row" spacing={2} mt={2} justifyContent="flex-end">
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        className="primary-button-dark"
                        onClick={handleSubmit}
                        >Save
                    </Button>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        className="primary-button-dark"
                        onClick={() => { history('../manage-product') }}
                        >Cancel
                    </Button>
                </Stack>
                </Grid>
            </Grid>
        </Paper>
        </Box>
    )
}

export default AddProduct;