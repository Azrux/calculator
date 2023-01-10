import React, { useState } from 'react';
import { Paper, Container, styled, Grid, Button } from '@mui/material'
import { OperationButtons } from './components/OperationButtons';
import { NumberButtons } from './components/NumberButtons';

const OutputContainer = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'right',
  height: '2em',
  padding: theme.spacing(2),
  fontSize: '3em',
  overflow: 'hidden'
}));


const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15,
}));

function App() {
  const [currentValue, setCurrentValue] = useState('0');
  const [operation, setOperation] = useState('');
  const [prevValue, setPrevValue] = useState('');
  const [overwrite, setOverwrite] = useState(true);

  const calculate = () => {
    
    if (!prevValue || !operation) return currentValue;
    
    let result;
    const curr = parseFloat(currentValue);
    const prev = parseFloat(prevValue);

    switch(operation) {
      case '+':
        result = prev + curr;
        break;
        case '-':
        result = prev - curr;
        break;
        case '*':
        result = prev * curr;
        break;
        case '/':
        result = prev / curr;
        break;
    }
    return result;
  }

  const equal = () => {
    const val = calculate();
    setCurrentValue(`${val}`);
    setPrevValue('');
    setOperation('');
    setOverwrite(true)
  }

  const clear = () => {
    setPrevValue('');
    setOperation('');
    setCurrentValue('0');
    setOverwrite(true);
  }

  const del = () => {
    setCurrentValue('0');
    setOverwrite(true);
  }

  const percent = () => {
    const curr = parseInt(currentValue);
    setCurrentValue((curr / 100).toString());
  }

  const selectOperation = (operation: string) => {
    if(prevValue) {
      const val = calculate()
      setCurrentValue(`${val}`)
      setPrevValue(`${val}`)
    } else {
      setPrevValue(currentValue);
    }
    setOperation(operation);
    setOverwrite(true);
  }

  const setNumber = (number: string) => {
    if (currentValue[0] === '0' && number === '0') return;
    if (currentValue.includes('.') && number === '.') return;
    if (overwrite && number !== '.') {
      setCurrentValue(number)
    } else {
      setCurrentValue(`${currentValue}${number}`);
    }
    setOverwrite(false);
  }

  return (
    <Container maxWidth='sm'>
      <CalculatorBase elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <OutputContainer>{currentValue}</OutputContainer>
          </Grid>
          <Grid item container columnSpacing={1}>
            <OperationButtons
              operation={'AC'}
              selectOperation={clear}
              selectedOperation={operation}
            />
            <OperationButtons
              operation={'C'}
              selectOperation={del}
              selectedOperation={operation}
            />
            <OperationButtons
              operation={'%'}
              selectOperation={percent}
              selectedOperation={operation}
            />
            <OperationButtons
              operation={'/'}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <NumberButtons number={'7'} enterNumber={setNumber} />
            <NumberButtons number={'8'} enterNumber={setNumber} />
            <NumberButtons number={'9'} enterNumber={setNumber} />
            <OperationButtons
              operation={'*'}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <NumberButtons number={'4'} enterNumber={setNumber} />
            <NumberButtons number={'5'} enterNumber={setNumber} />
            <NumberButtons number={'6'} enterNumber={setNumber} />
            <OperationButtons
              operation={'-'}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <NumberButtons number={'1'} enterNumber={setNumber} />
            <NumberButtons number={'2'} enterNumber={setNumber} />
            <NumberButtons number={'3'} enterNumber={setNumber} />
            <OperationButtons
              operation={'+'}
              selectOperation={selectOperation}
              selectedOperation={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <NumberButtons number={'0'} enterNumber={setNumber} xs={6} />
            <NumberButtons number={'.'} enterNumber={setNumber} />
            <Grid item xs={3}>
              <Button fullWidth variant='contained' onClick={equal}>
                =
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CalculatorBase>
    </Container>
  );
}

export default App;
