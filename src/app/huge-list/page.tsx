import { BadList } from "./BadList";
import { VirtualizedList } from "./VirtualizedList";

export const BIG_LIST_TEST_DATA = Array.from(
  { length: 50000 },
  (_, i) => `Test Item ${i}`
);

export default function Page() {
  return (
    <>
      <h1>Rendering huge lists</h1>
      <p>
        Loading all the DOM elements at once is slow, but react-window uses
        virtualizing to dynamically render only what should be in view.
      </p>
      <p>
        Note that this is not exactly the same as infinite scroll that requires
        API requests.
      </p>
      <hr />
      <BadList />
      <hr />
      <VirtualizedList />
    </>
  );
}
