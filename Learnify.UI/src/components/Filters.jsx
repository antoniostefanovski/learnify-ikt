import { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';

const categories = [
    { value: 'cs', label: 'Computer Science' },
    { value: 'ds', label: 'Data Science' },
    { value: 'ai', label: 'AI' },
    { value: 'web', label: 'Web Dev' }
];

const authors = [
    { value: 'john', label: 'John' },
    { value: 'anna', label: 'Anna' },
    { value: 'mark', label: 'Mark' }
];

export default function Filters() {
    const [filters, setFilters] = useState({
        search: '',
        category: '',
        author: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="flex items-end gap-8 mb-6">
            <div className="flex flex-col">
                <label className="text-sm text-gray-700 font-medium mb-1">Search</label>
                <TextField
                    size="medium"
                    variant="outlined"
                    placeholder="Search courses..."
                    value={filters.search}
                    onChange={handleChange}
                    name="search"
                    className="bg-white min-w-[220px] rounded-md"
                />
            </div>

            <div className="flex flex-col">
                <label className="text-sm text-gray-700 font-medium mb-1">Category</label>
                <FormControl size="medium" variant="outlined" className="bg-white min-w-[240px] rounded-md">
                    <InputLabel>Category</InputLabel>
                    <Select
                        label="Category"
                        value={filters.category}
                        onChange={handleChange}
                        name="category"
                        className="min-w-[240px]"
                    >
                        {categories.map((cat) => (
                            <MenuItem key={cat.value} value={cat.value}>
                                {cat.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            <div className="flex flex-col">
                <label className="text-sm text-gray-700 font-medium mb-1">Author</label>
                <FormControl size="medium" variant="outlined" className="bg-white min-w-[240px] rounded-md">
                    <InputLabel>Author</InputLabel>
                    <Select
                        label="Author"
                        value={filters.author}
                        onChange={handleChange}
                        name="author"
                        className="min-w-[240px]"
                    >
                        {authors.map((auth) => (
                            <MenuItem key={auth.value} value={auth.value}>
                                {auth.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}

