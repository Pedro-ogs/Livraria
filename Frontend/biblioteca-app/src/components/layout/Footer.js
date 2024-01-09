import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: '#212529' , margin: 0, color: "white"}}>
        © 2023 Copyright
      </div>
    </MDBFooter>
  );
}