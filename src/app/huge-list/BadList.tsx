"use client";

import { useState } from "react";
import { BIG_LIST_TEST_DATA } from "./page";

export function BadList() {
  const [showList, setShowList] = useState(false);

  return (
    <>
      <h2>Bad List</h2>
      <p>
        Click &quot;Show List&quot; and note the lag spike from mounting a list
        of {BIG_LIST_TEST_DATA.length} items.
      </p>
      <div>
        <button onClick={() => setShowList(true)}>Show List</button>
        <button onClick={() => setShowList(false)}>Hide List</button>
      </div>
      {showList && (
        <div
          style={{
            border: "1px solid gray",
            overflow: "auto",
            height: "300px",
          }}
        >
          {BIG_LIST_TEST_DATA.map((item) => (
            <div key={item} style={{ height: "35px" }}>
              {item}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
