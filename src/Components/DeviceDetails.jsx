const DeviceDetails = ({ deviceDetails }) => {
  const { description, lastResult } = deviceDetails;
  return (
    <div className="border border-zinc-500 w-72 h-96">
      {deviceDetails.description && deviceDetails.lastResult && (
        <>
          <h1 className="text-lg">Description: <span className="text-stone-600 font-medium">{description}</span></h1>
          <p className="text-lg">Last Result: <span className="text-stone-600 font-medium">{lastResult}</span></p>
        </>
      )}
    </div>
  );
};

export default DeviceDetails;
