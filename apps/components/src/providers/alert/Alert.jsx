import Swal from 'sweetalert2';

const Alert = {
    success: (title, message = '') => {
        Swal.fire({
            icon: 'success',
            title: title,
            text: message,
        });
    },
    error: (title, message = '') => {
        Swal.fire({
            icon: 'error',
            title: title,
            text: message,
        });
    },
    info: (title, message = '') => {
        Swal.fire({
            icon: 'info',
            title: title,
            text: message,
        });
    },
    warning: (title, message = '') => {
        Swal.fire({
            icon: 'warning',
            title: title,
            text: message,
        });
    },
    confirmation: async (title, message, confirmText = 'Yes', cancelText, confirmButtonColor = '#333AD0', cancelButtonColor = '#6e7881') => {
        const result = await Swal.fire({
            title: title,
            text: message,
            icon: 'warning',
            showCancelButton: !cancelText ? false : true,
            confirmButtonText: confirmText,
            confirmButtonColor,
            cancelButtonText: cancelText,
            cancelButtonColor
        });

        return result.isConfirmed;
    },
    html: (html) => {
        Swal.fire({
            html,
        });
    }
};

export default Alert;
