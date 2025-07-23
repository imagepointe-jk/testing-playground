"use client";

import { CSSProperties, useState } from "react";
import { FixedSizeList } from "react-window";
import { BIG_LIST_TEST_DATA } from "./page";

function RowFn({
  data, //the full dataset to pull from
  index, //the index to pull from the dataset to render this row
  style, //see important note below
}: {
  index: number;
  style: CSSProperties;
  data: string[];
}) {
  return (
    <div
      //IMPORTANT NOTE: the "style" prop is passed down from FixedSizeList, and its values MUST remain unchanged for the list to render properly.
      //here, "style" is spread so that we can retain react-window's styles, while also adding some of our own.
      style={{ ...style, textDecoration: "underline" }}
      //className is put directly on this div because, unlike "style", no className is passed down from FixedSizeList.
      //className can be used directly without causing any issues.
      className="row-class"
    >
      {data[index]}
    </div>
  );
}

export function VirtualizedList() {
  const [showList, setShowList] = useState(false);

  return (
    <div>
      <h2>Virtualized List</h2>
      <p>
        But there is almost no performance cost to mount the virtualized list
        from react-window, despite &quot;rendering&quot; the exact same number
        of items.
      </p>
      <p>
        In the dev tools you can see the divs appearing and disappearing from
        the DOM as you scroll.
      </p>
      <div>
        <button onClick={() => setShowList(true)}>Show List</button>
        <button onClick={() => setShowList(false)}>Hide List</button>
      </div>
      {showList && (
        <FixedSizeList
          height={300}
          itemCount={BIG_LIST_TEST_DATA.length}
          itemSize={37}
          width={"100%"}
          itemData={BIG_LIST_TEST_DATA}
          style={{ border: "1px solid gray" }}
        >
          {/* react-window requires passing the FUNCTION itself, not an actual ReactNode (e.g. what's returned when you do <RowFn />). */}
          {/* The function used should return whatever JSX should be rendered per row, and should at least take the dataset and item index as props. */}
          {RowFn}
        </FixedSizeList>
      )}
    </div>
  );
}
