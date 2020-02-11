import { connect } from 'react-redux'
import { AddCar } from '../redux/actions'


const mapDispatchToProps = (dispatch) => {
  return {
      addCar: (car) => dispatch(AddCar(car)),
      // removeCar: (index) => dispatch(removeCar(index))

  }

}

export default connect(null, mapDispatchToProps)(AddCar)