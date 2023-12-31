import Typography from '@l3-lib/ui-core/dist/Typography'
import { useTheme } from 'styled-components'

export default function TypographyTertiary(props: any) {
  const theme = useTheme()
  return <Typography customColor={theme.typography.contentTertiary} {...props} />
}
