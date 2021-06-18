import { Box } from "@airtable/blocks/ui";
import React from "react";
import CustomRecordCard from "./RecordCard";

const CustomRecordCardList = ({ records, fields }) => {
  return records.map((record) => (
    <Box style={{ padding: "16px" }} border="default" key={record.id}>
      {fields.map((field) => (
        <CustomRecordCard key={field.id} record={record} field={field} />
      ))}
    </Box>
  ));
};

export default CustomRecordCardList;
