

const DeviceDetails = ({deviceDetails}) => {
    const { description, lastResult } = deviceDetails;
    return (
        <div className="border border-zinc-500 h-96">
            <h1 className="text-lg">Description: {description}</h1>
            <p className="text-lg">Last Result: {lastResult}</p>  
        </div>
    );
};

export default DeviceDetails;