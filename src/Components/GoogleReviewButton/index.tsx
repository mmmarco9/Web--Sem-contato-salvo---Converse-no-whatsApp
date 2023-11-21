import React from "react";

import FeedbackIcon from "@mui/icons-material/Feedback";

import { ButtonIcon } from "@/Theme/Buttons";

export default function GoogleReviewButton() {
  return (
    <ButtonIcon
      onClick={() =>
        window.open(
          "https://chrome.google.com/webstore/detail/sem-contato-salvo-convers/ffmjmnghgfdeiohbneipjfcekchmbeln/reviews?hl=pt-BR"
        )
      }
      color="primary"
      title="Deixe seu feedback"
      size="small"
    >
      <FeedbackIcon />
    </ButtonIcon>
  );
}
