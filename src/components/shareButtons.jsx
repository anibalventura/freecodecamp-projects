import React from "react";
import { IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ShareButtons = ({ selectedQuote }) => {
  return (
    <React.Fragment>
      <IconButton
        id="tweet-quote"
        target="_blank"
        href={encodeURI(
          `https://twitter.com/intent/tweet?text="${selectedQuote.quote}" - ${selectedQuote.author}&hashtags=quoteoftheday`
        )}
      >
        <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
      </IconButton>
      <IconButton
        id="whatsapp-quote"
        href={`href="http://whatsapp://send?text=${selectedQuote.quote} - ${selectedQuote.author}"`}
      >
        <FontAwesomeIcon icon={faWhatsapp} size="md"></FontAwesomeIcon>
      </IconButton>
    </React.Fragment>
  );
};

export default ShareButtons;
