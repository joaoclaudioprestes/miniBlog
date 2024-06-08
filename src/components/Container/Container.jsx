import style from "./Container.module.css";

// eslint-disable-next-line react/prop-types
function Container({children}) {
  return ( 
    <div className={style.container}>
      {children}
    </div>
   );
}

export default Container;