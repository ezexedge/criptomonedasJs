import React from 'react'

const Criptomoneda= ({criptomonedas}) => {

    const {Name , FullName} = criptomonedas.CoinInfo
    return(

        <option value={Name}>{FullName}</option>

    )

}
export default Criptomoneda
