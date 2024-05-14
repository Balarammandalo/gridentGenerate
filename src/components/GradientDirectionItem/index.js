// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, clickGradientDirectionItem, isActive} = props
  const {displayText, value} = gradientDirectionDetails

  const onChangeGradientDirection = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <ListItem>
      <DirectionButton
        isActive={isActive}
        type="button"
        onClick={onChangeGradientDirection}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
