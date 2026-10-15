import { useAppSelector, useAppDispatch } from '@/state/hooks'
import CardInput from '@/components/CardInput/CardInput'
import List from '@/components/List/List'
import styles from './CustomCardForm.module.scss'
import { removeCard } from '@/state/slices/deck'

const CustomCardForm = () => {
  const dispatch = useAppDispatch()
  const { cards } = useAppSelector(state => state.deck)
  return (
    <List>
      <h2>Своя колода</h2>
      {cards.length < 18 && <CardInput />}
      <ul className={styles.cardContainer}>
        {cards.map((card, i) => (
          <li
            onClick={() => dispatch(removeCard(i))}
            title="Удалить карту"
            key={i}
            className={styles.card}>
            {card}
          </li>
        ))}
      </ul>
    </List>
  )
}

export default CustomCardForm
