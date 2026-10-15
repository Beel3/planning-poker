import { useAppDispatch, useAppSelector } from '@/state/hooks'
import { reset } from '@/state/slices/round'
import styles from './ResetRoundButton.module.scss'

const ResetRoundButton = () => {
  const dispatch = useAppDispatch()
  const isOwner = useAppSelector(state => state.room.owner)

  if (isOwner) {
    return (
      <button
        className={styles.button}
        onClick={() => dispatch(reset())}
      >
        <b>Начать новый раунд</b>
      </button>
    )
  }

  return null
}

export default ResetRoundButton
