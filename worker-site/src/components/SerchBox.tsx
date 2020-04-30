import * as React from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

export interface SearchBoxProps {
  options: string[];
  setText: (input: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ options, setText }) => {
  const onSelectFunc = (e: any) => {
    console.log(e);
    setText(e);
  };

  return (
    <Combobox onSelect={onSelectFunc}>
      <ComboboxInput onChange={(e: any) => setText(e.target.value)} />
      <ComboboxPopover className="shadow-popup">
        {options.length > 0 ? (
          <ComboboxList>
            {options.slice(0, 10).map((result, index) => (
              <ComboboxOption key={index} value={result} />
            ))}
          </ComboboxList>
        ) : (
          <span style={{ display: "block", margin: 8 }}>No results found</span>
        )}
      </ComboboxPopover>
    </Combobox>
  );
};

export default SearchBox;
