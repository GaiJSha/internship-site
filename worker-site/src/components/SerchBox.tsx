import * as React from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { useEffect } from "react";

export interface SearchBoxProps {
  options: string[];
  text: string;
  setText: (input: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ options, text, setText }) => {
  return (
    <Combobox>
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
