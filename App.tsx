import FigrathStajeckTergi from './FigrathStajeckTergi';
import React, { useEffect, useState } from 'react';
import {initMetaSdk} from './TirgaFoaeghtSrcJopjec/service/metaSdk';

function App() {
  useEffect(() => {
    initMetaSdk();
  }, []);

  return <FigrathStajeckTergi />;
}

export default App;