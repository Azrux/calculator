import { Button, Grid, styled } from "@mui/material";

interface OperationButtonsProps {
  operation: string;
  selectOperation: (operation: string) => void;
  selectedOperation: string
}

const StyledButton = styled(Button) <{selected: boolean}>((props) => ({
  backgroundColor: props.selected ? '#50fece' : 'rgb(0,0,0,0.7)',
  borderColor: props.selected ? '#006b4d' : '#fff',
  color: props.selected ? '#000000' : '#fff',
}))

export const OperationButtons: React.FC<OperationButtonsProps> = ({
  operation,
  selectedOperation,
  selectOperation,
}) => {
  return (
    <Grid item xs={3}>
      <StyledButton 
      fullWidth 
      variant='outlined' 
      onClick={() => selectOperation(operation)}
      selected={selectedOperation === operation}
      >
        {operation}
      </StyledButton>

    </Grid>
  )
}