import React from 'react';

const useNotifications = (title, options) => {
    if (!'Notification' in window) {
        return;
    }

    const fireNotif = () => {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    new Notification(title, options);
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, options);
        }
    };
    return fireNotif;
};
export default function useNotifications() {
    const triggerNotif = useNotifications('Can I steal your kimchi', { options: "I love kimchi don't you?" });
    return (
        <div>
            <button onClick={triggerNotif}>Hello</button>
        </div>
    );
}
