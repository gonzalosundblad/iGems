import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import { getGems } from './redux/actions'



 function Videos({taste, mins, gems, getGems}) {


  useEffect(() => {getGems()}, []) 

     return (
         <div>
            <p>genre: {taste}</p>
            <p>length: {mins}</p>
    aca mapeo los videos de la database que tengan prop.taste=genre y prop.length=duracion

    <div>
 
    {
       gems.filter(video => ((video.genre === taste) && (video.time == mins))).map((vid, i) => (
          <div key={i}>
            <a target="_blank" rel="noreferrer" href={vid.link}>{vid.name}</a> {/* el noreferrer es importante por seguridad */}
            <button>Fav</button>
          </div>
            )
        )
        }

    </div>
        </div>
    )
  
}



function mapStateToProps(state) {
    return {
        taste: state.taste,
        mins: state.mins,
        gems: state.gems

    }
};
  
const mapDispatchToProps = dispatch => {
  return {
    getGems: () => dispatch(getGems()),
  }
}

  export default connect(
    mapStateToProps, mapDispatchToProps
  )(Videos)
