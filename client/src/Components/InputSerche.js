import HandelSearch from './HandelSearch';
import { useState } from 'react'; 
import React from 'react';
const InputSerche = () => {
const [value , setval]=useState('');
//const [ButtonCliked , isButtonClicked]=useState(false);
  return (
    <>
    <div className="input-group container py-5">
      <input type="search" className="form-control rounded"  id="form1"  placeholder="search by category" aria-label="Search" aria-describedby="search-addon"  value={value}  onChange={(e) => setval(e.target.value)} />
    </div>
     <HandelSearch val={value} />
   </>
  );
}
export default InputSerche