import React from "react";
import ShareButtons from "./shareButtons";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

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
          <ShareButtons selectedQuote={selectedQuote} />
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default QuoteMachine;
