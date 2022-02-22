import React from 'react';
import { DoIncrement, DoDecrement, DoReset, DoStep, DoMax } from './state/action';
import { connect } from 'react-redux';
import styles from 'styled-components'

const Wrapper = styles.div`
  margin-top: 3rem;
`
const Counter = styles.div`
  font-size: 2rem;
  text-align: center;
  letter-spacing: 0.08rem;
  font-weight: bold;
  color: #7a7a8c;
`
const CountValueHeader = styles.h2`
  font-size: 12rem;
  text-align: center;
  margin-top: 2rem;
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  font-weight: 700;
  border: none;
`
const ButtonWrapper = styles.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;
  flex-wrap: wrap;
`
const Button = styles.button`
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.6rem;
  padding: 0.3rem 0.5rem;
  border: 1px solid tomato;
  border-radius: 0.3rem;
  font-weight: 500;
  letter-spacing: 0.06rem;
  margin: 0.2rem 0.5rem;
  cursor: pointer;
`
const Para = styles.p`
  color: tomato;
  margin-top: 2rem;
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 0.08rem;
`
const FormContainer = styles.div`
padding: .5rem;
`
const StepInput = styles.input`
  width: 4rem;
  height:1.9rem;
`
class CounterApp extends React.Component {
  constructor() {
    super()
    this.state = {
      step: 0
    }
  }
  handleChange = (event) => {
    this.setState({ step: event.target.value })
  }
  render() {
    let { count, step, max, dispatch } = this.props
    return (
      <Wrapper>
        <Counter>{`Count by ${step} and max up to ${max}`}</Counter>
        <CountValueHeader>{count}</CountValueHeader>
        <ButtonWrapper>
          <Button onClick={() => dispatch(DoIncrement())}>
            Increment
          </Button>
          <Button onClick={() => dispatch(DoDecrement())}>
            Decrement{' '}
          </Button>
          <Button onClick={() => dispatch(DoReset())}>
            Reset
          </Button>
        </ButtonWrapper>
        <Para>STEP</Para>
        <ButtonWrapper>
          {[5, 10, 15].map((num, index) => (
            <Button
              key={index}
              onClick={() => dispatch(DoStep(num))}
              className={`btn1 ${step === num ? ' active' : ''}  `}
            >
              {num}
            </Button>
          ))}
          <FormContainer >
            <StepInput type='number' value={this.state.step} onChange={(event) => this.handleChange(event)} />
            <Button onClick={() => dispatch(DoStep(this.state.step))}>SetStep</Button>
          </FormContainer>
        </ButtonWrapper>
        <Para>MAX</Para>
        <ButtonWrapper>
          {[50, 100, 150, 200, 250, 300].map((num, index) => (
            <Button
              key={index}
              onClick={() => dispatch(DoMax(num))}
              className={` ${max === num ? ' active' : ''}  `}
            >
              {num}
            </Button>
          ))}
        </ButtonWrapper>
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return { count: state.count, step: state.step, max: state.max };
}


export default connect(mapStateToProps)(CounterApp);
