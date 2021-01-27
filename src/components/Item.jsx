
function Item(props) {
  const { icon='', name={}, qlty='white' } = props.item;
  const lang = props.lang;

  return (
      <div className={`row ${qlty}`}>
        <div className="col-auto col-sm-auto">
          <img src={icon} alt="" className="item_icon" title={name[lang]} />
        </div>
        <div className="col col-sm">
          <span className="item_name">{name[lang]}</span>
        </div>
      </div>
  );
}

export default Item;
