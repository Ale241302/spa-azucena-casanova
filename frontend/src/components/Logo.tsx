interface LogoProps {
  className?: string
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <img
      src="/logo.png"
      alt="SPA Azucena Casanova López"
      className={className}
    />
  )
}

export default Logo

