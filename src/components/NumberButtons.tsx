import { Button, Grid } from "@mui/material";

interface NumberButtonsProps {
  number: string;
  enterNumber: (number: string) => void;
  xs?: number
}

export const NumberButtons: React.FC<NumberButtonsProps> = ({
  number,
  enterNumber,
  xs = 3,
}) => {
  return (
    <Grid item xs={xs}>
      <Button fullWidth variant='outlined' onClick={() => enterNumber(number)}>
        {number}
      </Button>

    </Grid>
  )
}