

const DeviceItem = ({device, handleSelectDevice}) => {
    const {name, description, location, lastResult} = device;

    return (
        <div onClick={()=>handleSelectDevice({description, lastResult})} className="w-56 p-2 border-2 border-red-400 rounded-lg cursor-pointer">
            <h1>Device Name: {name}</h1>
            <p>Device Location: {location}</p>
        </div>
    );
};

export default DeviceItem;