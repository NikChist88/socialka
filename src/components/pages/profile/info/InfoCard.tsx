import './InfoCard.scss'
import { InfoColumnType } from '../../../../redux/store'

type InfoCardPropsType = {
  infoCard: InfoColumnType
}

export const InfoCard: React.FC<InfoCardPropsType> = ({ infoCard }) => {
  return (
    <div className="InfoCard">
      <h3 className="InfoCard__title">{infoCard.mainTitle}</h3>
      <div className="InfoCard__body">
        <div className="InfoCard__col">
          {infoCard.column.map((field, index) => {
            return (
              <div className="InfoCard__field" key={index}>
                <h4 className="InfoCard__subtitle">{field.title}</h4>
                <span className="InfoCard__text">{field.text}</span>
              </div>
            )
          })}
        </div>
        <div className="InfoCard__col">
          {infoCard.column2.map((field, index) => {
            return (
              <div className="InfoCard__field" key={index}>
                <h4 className="InfoCard__subtitle">{field.title}</h4>
                <span className="InfoCard__text">{field.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
