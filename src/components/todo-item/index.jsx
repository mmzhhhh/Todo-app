export default function TodoItem({item,onComplete,onDelete}){
    return (
        <li
              className={`row flex-right margin-small border border-1 ${
                item.completed
                  ? "background-primary"
                  : "padding-small paper border border-1 shadow shadow-hover"
              }`}
              onClick={() => onComplete(item.id)}
              style={{
                textDecoration: item.completed ? "line-through" : "none",
                wordWrap: "break-word",
                whiteSpace: "pre-wrap",
                maxWidth: "100%",
                overflow: "hidden",
                position: "relative",
                transition: "all .3s",
              }}
            >
              <span className="col-8 padding-small">{item.text}</span>
              <button
                onClick={(e) => onDelete(e, item.id)}
                className=" btn-small btn-danger padding-small margin-small"
              >
                删除
              </button>
            </li>
    )
} 