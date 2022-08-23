import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const ShowModal = ({open,close, children}) => {

  return (
    
    <>

      <Modal  isOpen={open} size="sm" >

        <ModalBody className='text-center p-4'>{children}</ModalBody>

        <ModalFooter className='border-top-0'>

          <Button id="btnbg" className=' m-auto' onClick={close}>Ok</Button>

        </ModalFooter>

      </Modal>

    </>

  );

}

export default ShowModal;