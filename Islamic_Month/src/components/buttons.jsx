function Buttons({text,onclick,styles}) {
    return(
      <button onClick={onclick} className={styles}>
        {text}
      </button>
    )
}

export default Buttons;