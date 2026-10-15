import { ChangeEvent, KeyboardEvent } from 'react'
import { useAppDispatch, useAppSelector } from '@/state/hooks'
import { addCard, updateCardInput } from '@/state/slices/deck'
import styles from './CardInput.module.scss'

const CardInput = () => {
  const dispatch = useAppDispatch()
  const inputValue = useAppSelector(state => state.deck.cardInputValue)
  const dispatchAddCard = () => dispatch(addCard())
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(updateCardInput(e.target.value))
  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && dispatchAddCard()
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="custom-card-input">
        Добавить карту
      </label>
      <input
        autoFocus
        type="text"
        id="custom-card-input"
        className={styles.input}
        placeholder="Введите значение карты"
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
        value={inputValue}
        maxLength={15}
      />
      <button onClick={dispatchAddCard} className={styles.button}>
        Нажмите Enter или нажмите сюда, чтобы добавить
      </button>
    </div>
  )
}

export default CardInput
