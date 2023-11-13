import { type JSX } from 'solid-js/jsx-runtime'
import dayjs from 'dayjs'

interface TabElementProps {
  title: string
  company: string
  points: string[]
  startDate: Date
  endDate: Date | null
}

export const TabElement = (props: TabElementProps): JSX.Element => {
  const { title, company, points, startDate, endDate } = props
  console.log(title, company, points)
  return (
    <div>
        <div>
            <div class='flex justify-between'>
              <p class='text-2xl'>{title}</p>
              <div>
                  <span>{dayjs(startDate).format('MMM YYYY')}</span>
                  <span> - </span>
                  { (endDate !== null)
                    ? <span>{dayjs(endDate).format('MMM YYYY')}</span>
                    : <span>Present</span>
                  }
              </div>
            </div>
            <div class='text-sm text-[#6cace4]'>{company}</div>
            <div>
                <ol>
                    {points.map(element => <li>- {element}</li>)}
                </ol>
            </div>
        </div>
    </div>
  )
}
