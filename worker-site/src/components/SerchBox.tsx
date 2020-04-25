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
  const [_, forceRender] = React.useState("");
  let filteredStock: string[] = [];
  React.useEffect(() => {
    filteredStock = options.filter((item) => item.indexOf(text) > 0);
    console.log(filteredStock);
    forceRender("");
  }, [text, options]);
  return (
    <Combobox>
      <ComboboxInput onChange={(e: any) => setText(e.target.value)} />
      <ComboboxPopover className="shadow-popup">
        {filteredStock.length > 0 ? (
          <ComboboxList>
            {filteredStock.slice(0, 10).map((result, index) => (
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
