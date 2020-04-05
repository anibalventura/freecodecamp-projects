import React from "react";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

const QuoteMachine = (props) => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography>
            {props.selectedQuote
              ? `"${props.selectedQuote.quote}" - ${props.selectedQuote.author}`
              : ""}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" size="small" onClick={props.handleNextQuote}>
            Next Quote
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default QuoteMachine;
