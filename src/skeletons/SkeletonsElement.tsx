import "./skeleton.css"
const SkeletonElement = ({type}:{type:"title"|"text"}) => {
  const classes=`skeleton ${type}`
  return (
    <div className={classes}>
    </div>
  )
}

export default SkeletonElement
