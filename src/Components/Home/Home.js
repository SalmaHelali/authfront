import React from 'react';
import AnimalList from '../AnimalList';
import './Home.css'
function Home() {

  
  return (
  <div className='adoptme'>


    <p className='homepara' >
      Teamanimo takes in abandoned, found, stray, pound and laboratory animals (cats and d  ogs).

We take care of them, vaccinate them, sterilize them and identify them before looking for an adoptive family that will meet their needs and make them happy. 

To fulfill this mission, we can count on the support of our foster families, who open the doors of their homes to these animals waiting to be adopted, who offer them their love... even if it is only for a few weeks. If you too would like to offer comfort and sometimes solace to a neglected animal, join us!

</p>
<AnimalList></AnimalList>

<div className='video' >

<iframe width={560} height={315} 

src="https://www.youtube.com/embed/dDu9PY1hpSI" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
</div>

  </div>
  
  );
}

export default Home; 

