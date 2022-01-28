import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const onSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const onSearchSubmit = () => {
        navigate(`/search?search=${searchTerm}`);
    };

    return (
        <>
            <Paper
                component="form"
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search "
                    inputProps={{ 'aria-label': 'search Treatment' }}
                    onChange={onSearchChange}
                />
                <IconButton
                    type="submit"
                    sx={{
                        p: '10px',
                    }}
                    aria-label="search"
                    onClick={onSearchSubmit}
                >
                    <SearchIcon color="primary" />
                </IconButton>
            </Paper>
        </>
    );
};

export default SearchBox;
