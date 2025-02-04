import { useState, useCallback } from "react";

/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems = [] }) {
  let [menuItems, setMenuItems] = useState(initialMenuItems); // TODO 2
  let [newMenuItem, setNewMenuItem] = useState("");
  let [filter, setFilter] = useState("");

  // TODO 3: Implement the add menu item function
  const addMenuItem = useCallback(() => {
    if (newMenuItem.trim() !== "") {
      setMenuItems((prevItems) => [...prevItems, newMenuItem]);
      setNewMenuItem(""); // Reset input after adding
    }
  }, [newMenuItem]);

  //TODO 4: Filter menu items based on input (case-insensitive)
  const filteredItems = menuItems.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
        placeholder="Enter new item"
      />
      <br />
      <button onClick={addMenuItem}>Add Item</button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />
      <br />

      {/*TODO  */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
