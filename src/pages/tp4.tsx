/*import Image from 'next/image';
import React from 'react';


function tp4() {
    return (
      <div>
        <image/>
      </div>
    );
  }
  
  export default tp4;*/
  import Link from 'next/link'
  import React from 'react';

function PokemonPage() {
  return (
    
    <div>
      <Link href="/">Home</Link><br />
      <Link href="/qui">QUI</Link><br />
      <img className="w-[200px] objectContain" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="1er Pokemon"/>
    </div>
  );
}

export default PokemonPage;