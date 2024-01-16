

const DeviceItem = ({device, handleSelectDevice}) => {
    const {name, description, location, lastResult} = device;

    return (
        <div onClick={()=>handleSelectDevice({description, lastResult})} className="w-56 p-2 border-2 border-red-800 rounded-lg cursor-pointer">
            <h1>Device Name: <span className="text-stone-600 font-medium">{name}</span></h1>
            <p>Device Location: <span className="text-stone-600 font-medium">{name}</span></p>
        </div>
    );
};

export default DeviceItem;