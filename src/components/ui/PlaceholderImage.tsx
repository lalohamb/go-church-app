interface PlaceholderImageProps {
  label?: string
  className?: string
  style?: React.CSSProperties
  fill?: boolean
  aspectRatio?: string
}

/**
 * Drop-in placeholder for next/image while real assets are pending.
 * When fill=true it renders position:absolute inset-0 like next/image fill mode.
 */
export function PlaceholderImage({
  label = '',
  className = '',
  style = {},
  fill = false,
  aspectRatio,
}: PlaceholderImageProps) {
  const base: React.CSSProperties = {
    background: 'linear-gradient(135deg, #001a00 0%, #003c00 50%, #001a00 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...(fill
      ? { position: 'absolute', inset: 0 }
      : { width: '100%', aspectRatio: aspectRatio ?? '16/9' }),
    ...style,
  }

  return (
    <div className={className} style={base} aria-hidden="true">
      {label && (
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
            color: 'rgba(240,195,60,0.4)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            userSelect: 'none',
          }}
        >
          {label}
        </span>
      )}
    </div>
  )
}
