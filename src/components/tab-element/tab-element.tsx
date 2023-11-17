import { type JSX } from 'solid-js/jsx-runtime'
import dayjs from 'dayjs'

interface TabElementProps {
  title: string
  company: string
  points: string[]
  startDate: Date
  endDate: Date | null,
  className: string,
}

export const TabElement = (props: TabElementProps): JSX.Element => {
  const { title, company, points, startDate, endDate, className } = props;
  console.log(title, company, points)
  return (
    <>
        <div class={className}>
            <div class='flex justify-between pb-6'>
              <p class='text-2xl'>{title}</p>
              <div class='text-xl'>
                  <span>{dayjs(startDate).format('MMM YYYY')}</span>
                  <span> - </span>
                  { (endDate !== null)
                    ? <span>{dayjs(endDate).format('MMM YYYY')}</span>
                    : <span>Present</span>
                  }
              </div>
            </div>
            <div class='text-[20px] pb-6 text-[#6cace4]'>{company}</div>
            <div>
                <ol>
                    {points.map(element => <li class='text-[20px] pb-6'>- {element}</li>)}
                </ol>
            </div>
        </div>
    </>
  )
}
