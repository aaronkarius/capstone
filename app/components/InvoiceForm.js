import React, { useState } from 'react';

const InvoiceForm = () => {
    const [formData, setFormData] = useState({
        patientName: '',
        dateOfVisit: '',
        price: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/generate-invoice', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle response here. For example, you can display a success message
                // or download the generated PDF.
                alert('Invoice submitted successfully!');
            } else {
                // Handle errors
                alert('Failed to submit the invoice.');
            }
        } catch (error) {
            // Handle network errors
            alert('An error occurred while submitting the invoice.');
            console.error('Submit error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Patient Name:</label>
                <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Date of Visit:</label>
                <input
                    type="date"
                    name="dateOfVisit"
                    value={formData.dateOfVisit}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Generate Invoice</button>
        </form>
    );
};

export default InvoiceForm;
