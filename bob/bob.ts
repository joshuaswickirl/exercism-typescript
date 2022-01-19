export function hey(message: string): string {
  message = message.trim()
  const isEmpty = !/[a-z0-9]/i.test(message)
  if (isEmpty) {
    return "Fine. Be that way!"
  }

  const isUpperCase = message === message.toUpperCase() && /[a-z]/i.test(message)
  const isQuestion = message[message.length-1] === "?"
  if (isUpperCase && isQuestion) {
    return "Calm down, I know what I'm doing!"
  }
  if (isUpperCase) {
    return "Whoa, chill out!"
  }
  if (isQuestion) {
    return "Sure."
  }
  return "Whatever."
}
