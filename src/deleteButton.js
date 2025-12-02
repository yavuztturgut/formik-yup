import React from 'react';
import { Button } from 'antd';


const DeleteButton = ({ userId, onDelete }) => {

    const handleClick = () => {
        onDelete(userId);
    };

    return (
        <Button onClick={handleClick} danger size="small">
            Sil
        </Button>
    );
};

export default DeleteButton;