const Tags = ({ tags }) => (
  <div className="flex flex-wrap">
    {tags.map((tag, index) => (
      <div key={index} className="flex">
        <span className="text-primary-500">{tag}</span>
        <span className="text-primary-500">{index + 1 < tags.length ? <pre> - </pre> : ''}</span>
      </div>
    ))}
  </div>
)

export default Tags
