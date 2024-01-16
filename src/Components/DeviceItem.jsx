

const DeviceItem = ({device}) => {
    const {name, description, location, lastResult} = device;

    return (
        <div className="w-56 p-2 border-2 border-red-400 rounded-lg">
            <h1>Device Name: {name}</h1>
            <p>Device Location: {location}</p>
        </div>
    );
};

export default DeviceItem;