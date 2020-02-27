const AddCar = (car) => {
  return {
      type: 'ADD_CAR',
      value: car
  }
}

const RemoveCar = (index) => {
  return {
      type: 'REMOVE_CAR',
      value: index
  }
}