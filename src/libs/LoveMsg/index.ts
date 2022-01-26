/**
 * @name loveMsg
 * @description 入口
 */
import dotenv from 'dotenv'
import { goodMorning } from './goodMorning'
import { goodAfternoon } from './goodAfternoon'
import { goodEvening } from './goodEvening'
dotenv.config()

const { MESSAGE_TYPE } = process.env

export default function main() {
  const typeMap = {
    goodMorning,
    goodAfternoon,
    goodEvening,
  }
  typeMap[MESSAGE_TYPE]?.()
}
