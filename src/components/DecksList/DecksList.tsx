import { ChangeEvent } from 'react'
import List from '@/components/List/List'
import OptionCard from '@/components/OptionCard/OptionCard'
import { useAppDispatch } from '@/state/hooks'
import { Deck, selectCustom, selectDeck } from '@/state/slices/deck'

const decks: Deck[] = [
  { label: 'Фибоначчи', lowCards: ['1', '2', '3', '5', '8', '13'], highCards: ['21', '34', '55', '80', '150', '350'] },
  { label: 'Размеры футболок', lowCards: ['XS', 'S', 'M', 'L'], highCards: ['XL', 'XXL', 'XXXL'] },
  { label: 'Оценка в часах', lowCards: ['30m', '1h', '2h', '3h', '4h', '5h', '6h', '7h'], highCards: ['10h', '20h', '30h', '40h', '80h'] },
  { label: 'Оценка в днях', lowCards: ['1d', '2d', '3d', '4d', '1w'], highCards: ['6d', '8d', '2w', '12d', '3w'] },
  { label: 'Линейная', lowCards: ['1', '2', '3', '4', '5', '6', '7', '8'], highCards: ['9', '10', '11', '12', '13', '14', '15'] },
  { label: 'Степени двойки', lowCards: ['1', '2', '4', '8'], highCards: ['16', '32', '64', '128'] }
]

const DecksList = () => {
  const dispatch = useAppDispatch()
  const handleChange = (deck?: Deck) => (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      deck
        ? dispatch(selectDeck(deck))
        : dispatch(selectCustom())
    }
  }
  return (
    <List title="Тип колоды:">
      {decks.map((deck, i) => (
        <OptionCard
          onChange={handleChange(deck)}
          key={i}
          value={i}
          name="deck"
          label={deck.label}
          hint={deck.lowCards.slice(0, 5).join(', ')}
        />
      ))}
      <OptionCard
        onChange={handleChange()}
        name="deck"
        value={-1}
        label="Своя колода"
        hint="Создайте свою колоду карт"
        emphasis
      />
    </List>
  )
}

export default DecksList
