// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`

export const Heading = styled.h1`
  font-size: 20px;
  color: white;
  text-align: center;
  font-weight: bold;
`

export const DirectionDescription = styled.p`
  color: #ededed;
  font-weight: 700;
  font-size: 22px;
`

export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const ColorsPickersDescription = styled.p`
  color: #ededed;
  font-size: 20px;
  font-weight: bold;
  `

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`

export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`

export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  height: 30px;
  width: 150px;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 10px;
`
