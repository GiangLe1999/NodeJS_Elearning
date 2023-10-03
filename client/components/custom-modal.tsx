import { Modal, Box } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  Component: FC<any>;
  setRoute?: Dispatch<SetStateAction<string>>;
}

const CustomModal: FC<Props> = ({
  openModal,
  setOpenModal,
  Component,
  setRoute,
}): JSX.Element => {
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] max-[480px]:w-[90%] bg-white dark:bg-slate-900 rounded-[5px] shadow p-6 outline-none">
        <Component setOpenModal={setOpenModal} setRoute={setRoute} />
      </Box>
    </Modal>
  );
};

export default CustomModal;
