import Tag from './Tag'

const TagList = () => {
  return (
    <div className="md:self-stretch pt-8 pl-8 pr-4 pb-10 bg-white rounded-xl flex flex-wrap gap-4 items-start">
    <Tag title="UX" />
    <Tag title="UI" />
    <Tag title="Enhancement" />
    <Tag title="Bug" />
    <Tag title="Feature" />
  </div>
  )
}

export default TagList
