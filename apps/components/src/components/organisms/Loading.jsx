import { asset } from "../../helpers/url.helper";
import Typography from "../atoms/Typography";

const Loading = () => {
    return (
        <div className="flex items-center justify-center w-full min-h-[80vh]">
            <div className="space-y-8 text-center">
                <img
                    src={`${asset('loading.gif')}`}
                    width={50} alt="loading"
                    className="m-auto"
                />
                <Typography variant='p'>Loading, Please Wait.</Typography>
            </div>
        </div>
    )
}

export default Loading;
