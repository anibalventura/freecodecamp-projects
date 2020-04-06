import React from "react";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const QuoteMachine = ({ selectedQuote, handleNextQuote }) => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography id="text">
            {selectedQuote.quote}" -
            <span id="author"> {selectedQuote.author}</span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            id="new-quote"
            color="primary"
            size="small"
            onClick={handleNextQuote}
          >
            Next Quote
          </Button>
          <IconButton
            id="tweet-quote"
            target="_blank"
            href={encodeURI(
              `https://twitter.com/intent/tweet?text="${selectedQuote.quote}" - ${selectedQuote.author}&hashtags=quoteoftheday`
            )}
          >
            <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
          </IconButton>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default QuoteMachine;
