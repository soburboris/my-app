

import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import styled from 'styled-components';

const Toggless = styled.div`
    margin-top:10px;
    display: flex;
    align-items: flex-start;
    justify-content: start;
   
    
    `;
    const Collapses = {
      marginLeft: "10px" 

    };
     
     
    
    

const Toggles = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Toggless>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
      <Collapse isOpen={isOpen} style={Collapses} >
        <Card>
          <CardBody>
          Anim pariatur cliche reprehenderit,
           enim eiusmod high life accusamus terry richardson ad squid. Nihil
           anim keffiyeh helvetica, craft beer labore wes anderson cred
           nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
    </Toggless>
  );
}

export default Toggles;
