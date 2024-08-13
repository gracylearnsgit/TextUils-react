import React from 'react'
import PropTypes from 'prop-types'

function Alert(props) {

  const capitalize = (word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    props.propalert &&( <div>
      <div className={`alert alert-${(props.propalert.type)} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.propalert.type)}</strong>:{props.propalert.msg}
      {/*if type success hai, to mssg show kro */}
       </div>
    </div> )
  )
}

export default Alert

