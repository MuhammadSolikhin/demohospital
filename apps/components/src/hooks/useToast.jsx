import { toast as toastify } from 'react-toastify';

const useToast = () => {
    const toast = (message, type) => (
        toastify(message, {
            type,
            position: 'top-right'
        })
    )

    return {
        toast,
    }
}

export default useToast;
