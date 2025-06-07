const HelpText = ({ helpText }: { helpText: string }) => {
  return <span className='absolute text-xs text-muted-foreground mt-1'>* {helpText}</span>
}

export default HelpText
