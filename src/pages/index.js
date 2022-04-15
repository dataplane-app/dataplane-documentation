import React from 'react';
import {Redirect} from '@docusaurus/router';

export default function Home() {
  return <Redirect to="/create-a-data-pipeline" />;
};


// import React from 'react';
// import useBaseUrl from '@docusaurus/useBaseUrl';


// export default function Home() {
//   React.useEffect(() => {
//     window.location.href = useBaseUrl('/get-started');
//   }, []);
//   return null;
// }
