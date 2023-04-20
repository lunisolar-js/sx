import { JD } from '../../src/class/jd'

// import { JD as JDX } from '../../src/utils/jd'

describe('test JD Class', () => {
  it('test JD', () => {
    const jd = JD.fromGre({ year: 2023, month: 4, day: 14, hour: 12 }, { isUTC: true })
    expect(jd.jdn).toBe(2460049)
    expect(jd.format(`YYYY-MM-DD HH:mm:ss`)).toBe('2023-04-14 12:00:00')
  })
})
