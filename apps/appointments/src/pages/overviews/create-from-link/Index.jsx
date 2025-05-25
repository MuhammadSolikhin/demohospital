import GuestForm from "../../../components/organisms/appointments/GuestForm";

const AppointmentGuestCreatePage = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <div className="w-full sm:w-5/6 md:w-4/5 xl:w-3/5 py-10">
                <GuestForm />
            </div>
        </div>
    )
}

export default AppointmentGuestCreatePage;
