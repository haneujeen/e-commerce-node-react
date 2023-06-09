import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';

function AddProduct({ add }) {
    const [title, setTitle] = useState('');
    const [material, setMaterial] = useState('');
    const [price, setPrice] = useState('');
    const [company, setCompany] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const product = {
            title: title,
            material: material,
            price: price,
            company: company,
            username: ''
        };
        add(product);
        setTitle('');
        setMaterial('');
        setPrice('');
        setUsername('');
    };

    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Typography variant="h6" gutterBottom>
                Add Product
            </Typography>
            <form onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        label="Title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        label="Material"
                        value={material}
                        onChange={(event) => setMaterial(event.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        label="Price"
                        type="number"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        label="Company"
                        value={company}
                        onChange={(event) => setCompany(event.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="outlined" color="primary">
                        Add Product
                    </Button>
                </Grid>
            </Grid>
            </form>
        </Paper>
    );
};

export default AddProduct;
