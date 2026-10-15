import { Link } from 'react-router-dom'
import Nav from '@/components/Nav/Nav'
import styles from './Docs.module.scss'

const Docs = () => {
  return (
    <article>
      <header>
        <Nav />
        <span className={styles.helpIcon}>?</span>
        <h1 className={styles.heading}>Помощь и частые вопросы</h1>
      </header>
      <main className={styles.container}>
        <details>
          <summary>Как создать игру?</summary>
          <ul>
            <li>На <Link to="/">главной странице</Link> нажмите кнопку <Link to="/create-room">Начать сессию оценки</Link></li>
            <li>Выберите колоду из списка (или пункт <b>Своя колода</b>)</li>
          </ul>
          <h5>Готовая колода</h5>
          <ul>
            <li>Решите, использовать ли всю колоду или только малые либо крупные значения</li>
            <li>Нажмите кнопку <b>Создать комнату</b>, чтобы начать игру</li>
          </ul>
          <h5>Своя колода</h5>
          <ul>
            <li>Введите значение карты и нажмите <code>enter</code>, чтобы добавить (клик по карточке удаляет её)</li>
            <li>Когда закончите, нажмите кнопку <b>Создать комнату</b>, чтобы начать игру</li>
          </ul>
        </details>
        <details>
          <summary>Как пригласить других игроков?</summary>
          <p>После создания игры вы получите трёхсловный код (напр. <i>Birds-Fly-Gracefully</i>)</p>
          <p>Отправьте этот код приглашаемым или просто скопируйте ссылку на страницу и перешлите её</p>
        </details>
        <details>
          <summary>Как присоединиться к чужой игре?</summary>
          <p>Перейдите по присланной ссылке или введите полученный код в поле на <Link to="/">главной странице</Link></p>
        </details>
        <details>
          <summary>Как узнать, что все проголосовали?</summary>
          <p>Когда игрок голосует, кружок рядом с его именем меняется с чёрного на зелёный:</p>
          <img src="/help_voting_status.png" />
        </details>
        <details>
          <summary>Что делать, если что-то не работает?</summary>
          <ul>
            <li>Убедитесь, что используете свежую версию современного браузера, например Chrome или Firefox</li>
            <li>Проверьте, что WebRTC не отключён в настройках браузера или через расширения</li>
            <li>Попробуйте пересоздать игру</li>
            <li>Создайте issue на <a title="Исходный код на GitHub" href="https://github.com/ceuk/planning-poker/" target="_blank" rel="noreferrer">GitHub ↗</a>
            </li>
          </ul>
        </details>
      </main>
    </article>
  )
}

export default Docs
