import {
  initializeBlock,
  useBase,
  useCursor,
  useRecords,
} from "@airtable/blocks/ui";
import React from "react";
import CustomRecordCardList from './RecordCardList';

function HelloWorldApp() {
  const base = useBase();
  const cursor = useCursor();
  const table = base.getTableById(cursor.activeTableId);
  const records = useRecords(table.getViewByIdIfExists(cursor.activeViewId));
  const fields = table.fields
  return  <CustomRecordCardList records={records}  fields={fields} />
}

initializeBlock(() => <HelloWorldApp />);
