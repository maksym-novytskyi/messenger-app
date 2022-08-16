import './OwnMessageItemComponent.scss'

const OwnMessageItemComponent = (props) => {
  return(
      <div className={'ownMessageItemComponent'}>
          <div className={'ownMessageItemComponent__position'}>
              <div>
                  {/*<img src="https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg" alt=""/>*/}
                  <span> My message</span>
              </div>
              <div>
                  data {props.data}
              </div>
          </div>
      </div>
  )
}

export default OwnMessageItemComponent;