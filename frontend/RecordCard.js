import {
  CellRenderer,
} from "@airtable/blocks/ui";
import React from "react";

const CustomRecordCard = ({ record, field }) => {
  return (
    <div style={{ marginTop: "16px" }}>
      <span
        style={{
          fontSize: "13px",
          lineHeight: "16px",
          color: "rgb(117, 117, 117)",
          fontWeight: "500"
        }}
      >
        {field.name}
      </span>
      <div style={{ marginTop: "6px", }}>
       <CellRenderer field={field} record={record} />
      </div>
    </div>
  );
};

export default CustomRecordCard;
