import { FC } from 'react'
import sprite from '../../assets/icons/sprite.svg'

type IconPropsType = {
  iconId: string
  className: string
  width: string
  height: string
}

export const Icon: FC<IconPropsType> = (props) => {
  const { iconId, width, height, className } = props

  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${sprite}#${iconId}`}></use>
    </svg>
  )
}
