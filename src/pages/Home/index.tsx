import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="">Vou trabalhar em </label>
          <TaskInput
            placeholder="Dê um nome ao seu projeto"
            id="task"
            list="task-suggestions"
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
          </datalist>

          <label>durante</label>
          <MinutesAmountInput
            step={5}
            min={5}
            max={60}
            placeholder="00"
            type="number"
            id="minutesAmount"
          />
          <span>minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Comecar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
