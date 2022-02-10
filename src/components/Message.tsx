import { MessageType } from "../App"
type Props ={
  message: MessageType,
  outgoing: Boolean
}

function Message ({ message, outgoing }:Props) {
  return (
    <li className={outgoing ? 'outgoing' : 'incoming'}>
      <p>{message.messageText}</p>
    </li>
  )
}

export default Message
