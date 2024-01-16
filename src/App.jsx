import { useEffect, useState } from "react";
import DeviceItem from "./Components/DeviceItem";
import DeviceDetails from "./Components/DeviceDetails";
import SearchInput from "./Components/SearchInput";

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

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTermLowerCase = searchTerm.toLowerCase();
    const filtered = devices.filter(
      (device) =>
        device.name.toLowerCase().includes(searchTermLowerCase) ||
        device.description.toLowerCase().includes(searchTermLowerCase)
    );
    setFilteredDevices(filtered);
  };

  const handleSelectDevice = (selectedDeviceDetails) => {
    setDeviceDetails(selectedDeviceDetails);
  };

  return (
    <>
      <div>
        <SearchInput
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          setSearchTerm={setSearchTerm}
        />

        <div className="flex gap-6 justify-center p-4 mt-12">
          <div >
            <h1 className="font-bold text-3xl text-red-800">Devices List:</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDevices.map((device, index) => (
                <DeviceItem
                  key={index}
                  device={device}
                  handleSelectDevice={handleSelectDevice}
                />
              ))}
            </div>
          </div>
          <div>
            <h1 className="font-bold text-3xl text-red-800">
              Device Details:
            </h1>
            <DeviceDetails deviceDetails={deviceDetails} />
          </div>
        </div>
        
      </div>
    </>
  );
}

export default App;
