import { useEffect, useState } from "react";
import DeviceItem from "./Components/DeviceItem";
import DeviceDetails from "./Components/DeviceDetails";

function App() {
  const [devices, setDevices] = useState([]);
  const [filteredDevices, setFilteredDevices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [deviceDetails, setDeviceDetails] = useState({});

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/Tehnix/c9d53939b2ed600b321fed8e1898f3a7/raw/dfe7adaf6f73e320ae4ed42761d6b50cf25eb569/devices.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setDevices(data.devices);
        setFilteredDevices(data.devices);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = () => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    const filtered = devices.filter(
      (device) =>
        device.name.toLowerCase().includes(searchTermLowerCase) ||
        device.description.toLowerCase().includes(searchTermLowerCase)
    );
    setFilteredDevices(filtered);
  };

  const handleSelectDevice = (selectedDeviceDetails) =>{
      setDeviceDetails(selectedDeviceDetails);
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search devices..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onBlur={handleSearch}
        />

        <div className="flex gap-6 border border-purple-500 p-4">
          <div>
            <h1 className="font-bold text-3xl text-red-800">Devices List:</h1>
            <div className="flex-[3] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredDevices.map((device, index) => (
                <DeviceItem
                key={index}
                device={device}
                handleSelectDevice={handleSelectDevice}
                />
              ))}
            </div>
          </div>
          <div className="flex-[1]">
            <h1 className="font-bold text-3xl text-red-800">Devices Details:</h1>
            <DeviceDetails deviceDetails={deviceDetails} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
