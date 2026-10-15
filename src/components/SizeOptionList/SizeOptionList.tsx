import { ChangeEvent } from 'react'
import List from '@/components/List/List'
import OptionCard from '@/components/OptionCard/OptionCard'
import { useAppDispatch, useAppSelector } from '@/state/hooks'
import { selectCards } from '@/state/slices/deck'

const SizeOptionList = () => {
  const dispatch = useAppDispatch()
  const selectedCards = useAppSelector(state => state.deck.cards)
  const { highCards, lowCards } = useAppSelector(state => state.deck.selectedDeck!)
  const handleChange = (cards: string[]) => (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(selectCards(cards))
    }
  }
  return (
    <List title="Диапазон значений:">
      <OptionCard
        onChange={handleChange(lowCards)}
        name="cards"
        value="lowCards"
        label="Малые значения"
        hint={`напр. ${lowCards.slice(0, 5).join(', ')}`}
        checked={selectedCards === lowCards}
      />
      <OptionCard
        onChange={handleChange(highCards)}
        name="cards"
        value="highCards"
        label="Крупные значения"
        hint={`напр. ${highCards.slice(0, 5).join(', ')}`}
        checked={selectedCards === highCards}
      />
      <OptionCard
        onChange={handleChange(lowCards.concat(highCards))}
        name="cards"
        value="allCards"
        label="Все значения"
        hint="Полезно, когда оцениваете смесь историй и эпиков"
      />
    </List>
  )
}

export default SizeOptionList
