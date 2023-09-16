import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState('$'); // Default currency is Dollar

    const currencyOptions = [
        { symbol: '$', label: 'Dollar' },
        { symbol: '£', label: 'Pound' },
        { symbol: '€', label: 'Euro' },
        { symbol: '₹', label: 'Rupee' },
    ];

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    return (
        <div className='expense-total'>
            <label className='currency-label'>Currency:</label>
            <select className='currency-dropdown' value={selectedCurrency} onChange={handleCurrencyChange}>
                {currencyOptions.map((option) => (
                    <option key={option.symbol} value={option.symbol}>
                        {option.label} {option.symbol}
                    </option>
                ))}
            </select>
            <div className='alert alert-primary'>
                <span>Currency: {selectedCurrency} {totalExpenses.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default ExpenseTotal;

