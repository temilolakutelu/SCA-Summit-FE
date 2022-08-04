import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const ShowModal = (args) => {
    
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>Click Me</Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalBody>
          User has already been registered 
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Ok</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ShowModal;