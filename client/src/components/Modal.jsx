// import { useState } from 'react';

import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const ShowModal = ({open,close, children}) => {
    
  // const [modal, setModal] = useState(false);

  // const toggle = () => setModal(!modal);
console.log(open);
  if (!open) return null;

  return (
    <>

      <Modal>

        <ModalBody>{children}</ModalBody>

        <ModalFooter>

          <Button color="primary" onClick={close}>Ok</Button>

        </ModalFooter>

      </Modal>

    </>

  );

}

export default ShowModal;