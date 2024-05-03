import './index.css'

const EachSearchList = props => {
  const {HistoryList, deleteSearch} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryList
  const onDelete = () => {
    deleteSearch(id)
  }

  return (
    <li className="eachSearch">
      <p className="time">{timeAccessed}</p>
      <div className="logoAndTitleUrlContainer">
        <img src={logoUrl} className="logo" alt="domain logo" />
        <div className="titleAndUrl">
          <p className="title">{title}</p>
          <p className="url">{domainUrl}</p>
        </div>
        <button
          className="deleteButton"
          type="button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="deleteImg"
          />
        </button>
      </div>
    </li>
  )
}

export default EachSearchList
