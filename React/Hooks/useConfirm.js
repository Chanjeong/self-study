import React from 'react';

const useConfirm = (message = '', onConfirm, onCancel) => {
    if (!onConfirm && typeof onConfirm !== 'function') {
        return;
    }
    if (onCancel && typeof onCancel !== 'function') {
        return;
    }

    const confirmAction = () => {
        if (confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    };
    return confirmAction;
};

export default function useConfirm() {
    const deleteWorld = () => console.log('Deleting the world...');
    const abort = () => console.log('Aborted');
    const confirmDelete = useConfirm('Are you sure', deleteWorld, abort);
    return (
        <div>
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    );
}
