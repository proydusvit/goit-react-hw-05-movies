import { Wrapper, Input, Btn} from "components/SearchBox/searchBox.styled.js"
import { useState } from "react";

export const SearchBox = ({sendSearchName}) => {
  const [searchName, setSearchName] = useState('');
  
  const onChange = e => {
    setSearchName(e.target.value);
  };

    const send = () => {
        sendSearchName(searchName);
  };
 
  return (
    <Wrapper>
    
      <Input
        type="text"
        onChange={e => onChange(e)}
     
      />
      <Btn type="button" onClick={send}>Search</Btn>
      
    </Wrapper>
  );
};
