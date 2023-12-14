/* eslint-disable react/prop-types */

const TabButton = (props) =>{
    return(
         <>
         {/* composition of the props children */}
         {/*React will automatically pass the special prop children to every custom componenent */}
          <button>{props.children}</button>
         </>
    )
}

export default TabButton;