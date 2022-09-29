import './style.css'

type Variant = 'primary' | 'secondary'

type BadgePropsType = {
  name: string
  variant?: Variant
}

function Badge({ name, variant = 'primary' }: BadgePropsType) {
  const badgeClass = `badge badge-${variant}`

  return <div className={badgeClass}>{name}</div>
}

export default Badge
