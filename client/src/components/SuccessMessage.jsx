import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const SuccessMessage = ({success, isClose}) => {

    return (
    
        <>

            <Modal  isOpen={success} size="sm" >

                <ModalBody className='text-center p-4'>check your email for ticket to the summit</ModalBody>

                <ModalFooter className='border-top-0'>

                    <Button id="btnbg" className=' m-auto' onClick={isClose}>Ok</Button>

                </ModalFooter>

            </Modal>

        </>
        
    )

    
}

export default SuccessMessage
