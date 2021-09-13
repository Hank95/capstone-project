import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { useAuth } from "../util/use-auth";
import { useHistory } from "react-router-dom";

function SearchBar({ setSearch }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutoComplete({
    // requestOptions: {
    //   location: { lat: () => 41.4605, lng: () => -76.57959 },
    //   radius: 100 * 1000,
    // },
  });

  const auth = useAuth();
  const history = useHistory();
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    console.log(address);
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      console.log(results[0].geometry.bounds);
      const { lat, lng } = await getLatLng(results[0]);
      setSearch({ lat, lng });
      if (auth.user) {
        history.push("/listings");
      } else {
        history.push("/login");
      }
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Find your boat"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default SearchBar;
