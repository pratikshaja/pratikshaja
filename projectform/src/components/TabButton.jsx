function TabButton({children , onSelect}){
   
    return(
        <>
          <button onClick={onSelect}>{children}</button>
        </>


    )
}
export default TabButton;