import { Box, Modal, Rating } from "@mui/material";
import { FC, Dispatch, SetStateAction } from "react";
import FormInput from "../form-input";
import BtnWithLoading from "../btn-with-loading";

interface Props {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  ratingValue: number | null;
  setRatingValue: Dispatch<SetStateAction<number | null>>;
  comment: string;
  setComment: Dispatch<SetStateAction<string>>;
}

const AddReviewModal: FC<Props> = ({
  openModal,
  setOpenModal,
  ratingValue,
  setRatingValue,
  comment,
  setComment,
}): JSX.Element => {
  return (
    <>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-content-wrapper text-center">
          <p className="form-title">Why did you leave this rating?</p>
          <p className="form-input-label mt-2 !text-lg">Select your rating</p>
          <Rating
            size="large"
            name="simple-controlled"
            value={ratingValue}
            onChange={(event, newValue) => {
              setRatingValue(newValue);
            }}
            precision={0.5}
            className="mb-3"
          />

          <FormInput
            label=""
            textarea
            rows={6}
            id="comment"
            placeholder="Tell us about your own personal experience taking this course. Was it a good match for you?"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <BtnWithLoading content="Save And Publish" isLoading={false} />
        </Box>
      </Modal>
    </>
  );
};

export default AddReviewModal;
