import Link from './Link'
import { format, parseISO } from 'date-fns'
import Tags from './Tags'

const Company = ({ company, link, positions }) => {
  return (
    <div className="pb-6">
      <Link href={link} className="text-2xl font-bold text-primary-500 no-underline">
        {company}
      </Link>
      {positions.map((position, index) => {
        return (
          <div className="mb-4" key={index}>
            <div className="font-bold">{position.title}</div>
            <div>
              <span>{format(parseISO(position.start), 'MMM yyyy')}</span>
              <span> - </span>
              <span>
                {position.end !== null ? format(parseISO(position.end), 'MMM yyyy') : 'present'}
              </span>
            </div>
            <Tags tags={position.tags} />
            <div>
              {position.tasks.map((task, index) => (
                <div key={index} className="items-top flex flex-row">
                  <div className="text-primary-color dark:text-primary-color-dark mr-2 text-lg">
                    {' '}
                    &#8227;
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">{task}</div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Company
