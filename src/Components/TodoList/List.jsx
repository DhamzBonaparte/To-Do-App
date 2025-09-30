import "./List.scss";
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

export default function List({ arr, setArr }) {
  function handleChange(e, id) {
    const val = e.target.value;
    setArr((a) =>
      a.map((items) => (id === items.id ? { ...items, value: val } : items))
    );
  }

  function handleEdit(id) {
    setArr((a) =>
      a.map((items) => (id === items.id ? { ...items, edit: true } : items))
    );
  }

  function handleDelete(id) {
    setArr(arr.filter((a) => a.id != id));
  }

  function handleDone(item, val) {
    setArr(
      arr.map((a) => (item === a.id ? { ...a, value: val, edit: false } : a))
    );
  }

  return (
    <>
      <div className="list">
        <ul type="none">
          {arr.map((items) => {
            return (
              <li key={items.id}>
                {<input type="checkbox" />}
                {items.edit ? (
                  <input
                    className="inp"
                    type="text"
                    onChange={(e) => handleChange(e, items.id)}
                    value={items.value}
                  />
                ) : (
                  <p>{items.value}</p>
                )}
                <div className="exec">
                  {items.edit ? (
                    <button
                      className="edit"
                      onClick={() => handleDone(items.id, items.value)}
                    >
                      <CheckIcon className="icon"/>
                    </button>
                  ) : (
                    <button
                      className="edit"
                      onClick={() => handleEdit(items.id)}
                    >
                      <EditNoteIcon className="icon"/>
                    </button>
                  )}
                  {
                    <button
                      className="edit"
                      onClick={() => handleDelete(items.id)}
                    >
                      <DeleteIcon className="icon"/>
                    </button>
                  }
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
