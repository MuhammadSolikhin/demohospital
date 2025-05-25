import { useSpring, animated } from '@react-spring/web';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import Typography from '../atoms/Typography';

const Modal = ({
    children,
    title,
    isOpen,
    size = 'md',
    footer = true,
    onClose = () => null,
    onSubmit = () => null,
    submitText = 'Submit'
}) => {
    const bounceStyle = useSpring({
        from: { transform: 'scale(0.8)' },
        to: async (next) => {
            await next({ transform: 'scale(1)' });
        },
        config: { tension: 500, friction: 15 },
        reset: true,
    });
    
    const onHandleClose = () => {
        onClose();
    }

    return (
        isOpen && (
            <div className={`modal__wrapper bg-black/50 z-30 flex items-center justify-center w-full h-screen fixed top-0 left-0`}>
                <animated.div style={bounceStyle} className={`${size === 'sm' ? 'w-96' : size === 'md' ? 'w-1/2' : 'w-3/4'}`}>
                    <div className={`modal w-full bg-white shadow rounded-primary`}>
                        <div className="modal__header border-b p-4">
                            <div className="flex items-center justify-between">
                                <Typography variant='h4' className='!text-base'>{title}</Typography>
                                <Button 
                                    variant='none' 
                                    icon={'material-symbols:close-rounded'} 
                                    onClick={onHandleClose}
                                />
                            </div>
                        </div>
                        <div className="modal__content p-4 overflow-y-auto max-h-[80vh]">
                            {children}
                        </div>
                        {
                            footer && (
                                <div className="modal__footer flex gap-2 align-center justify-end p-4 border-t">
                                    <Button 
                                        variant='secondary' 
                                        label={'Close'} 
                                        onClick={onHandleClose}
                                    />

                                    {
                                        onsubmit && (
                                            <Button 
                                                variant='primary' 
                                                label={submitText} 
                                                onClick={onSubmit}
                                            />
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                </animated.div>
            </div>
        )
    )
}

Modal.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    footer: PropTypes.bool,
    onSubmit: PropTypes.func,
    submitText: PropTypes.string,
};

export default Modal;
