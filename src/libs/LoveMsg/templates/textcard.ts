/**
 * @description 文本卡片模板 title + description
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

/**
 * 卡片类型模板定义
 * 模板内容配置
 * 微信通知 textcard类型的description内容限制512个字节
 */

import dayjs from '../../../utils/dayjs'

// 在一起的日子
const start_stamp = '2021-09-25'

export const textCardTemplate = (data: TextCardTemplateProps) => {
  const { weather, lunarInfo, oneWord } = data

  const { date, week } = weather
  // 今日、恋爱天数
  const today = `${date.replace('-', '年').replace('-', '月')}日`
  const dateLength = dayjs(date).diff(start_stamp, 'day')

  // 公历节日、农历节日和二十四节气
  const { festival, lunar_festival, jieqi, lubarmonth, lunarday } = lunarInfo
  const festival_info = festival ? `| ${festival}` : ''
  const lunar_festival_info = lunar_festival ? `| ${lunar_festival}` : ''
  const jieqi_info = jieqi ? `| ${jieqi}` : ''

  // 拼接内容
  let description = `${weather.area} | ${today} | ${week} ${festival_info}
农历 | ${lubarmonth}${lunarday} ${lunar_festival_info} ${jieqi_info}\n
今日天气状况：
天气：${weather.weather}
温度：${weather.lowest} ~ ${weather.highest}
湿度：${weather.humidity}%\n`

  if (oneWord) {
    description += `
『 ${oneWord.hitokoto} 』`
  }

  // 内容末尾，自定义
  description += `
  [ 点我有惊喜 ] ❤️ 🧡 💛 💚 💖`

  const meetDayCount = dateLength + 32 // 相识
  const loveDayCount = dateLength + 1 // 在一起
  let title = `老婆，今天是爱你的第 ${loveDayCount} 天 💖\n`
  const bigDays = [520, 600, 700, 800, 900, 1000]

  if (bigDays.includes(loveDayCount))
    title = `老婆，我们在一起 ${loveDayCount} 天啦！永远爱你 😘`
  if (bigDays.includes(meetDayCount))
    title = `老婆，我们认识 ${loveDayCount} 天啦！永远爱你 😘`
  if (loveDayCount == 696)
    title = `老婆，七夕前一天快乐！`
  if (loveDayCount == 697)
    title = `老婆，七夕快乐！永远爱宝子😘`

  return {
    msgtype: 'textcard',
    textcard: {
      title,
      description,
      // url: 'https://api.lovelive.tools/api/SweetNothings',
      // url: 'https://v1.jinrishici.com/all.svg',
      url: 'https://api.vvhan.com/api/60s', // 60s看世界
      btntxt: 'rugu',
    },
  }
}
