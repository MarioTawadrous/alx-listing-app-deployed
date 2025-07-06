export interface CardProps {
  title: string
  description: string
  imageUrl: string
}

export interface ButtonProps {
  label: string
  variant?: 'primary' | 'secondary'
  onClick: () => void
}
