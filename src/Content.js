import ItemList from "./ItemList";

function Content({ items, handleCheck, handleDelete }) {

  return (
    <main>
        { 
        (() => {
            if (items.length) { 
                return(
                    <ItemList
                        items={items}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                )
            } else {
                return(
                <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
                )
            }
        })()}
    </main>
  )
}

export default Content
