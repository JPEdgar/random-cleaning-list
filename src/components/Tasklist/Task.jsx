import React from "react";

const Task = ({ taskData, index }) => {
  return (
    <>
      <div
        className="d-flex align-items-start testRow my-2 px-2 py-1"
        style={{
          margin: "0",
          padding: "0",
          lineHeight: "1.2rem",
          border: "1px solid red",
        }}
      >
        <span style={{ width: "1.6rem", minWidth: "1.6rem" }}>{index}.</span>
        <span style={{}} className="w-100">
          <div
            style={{
              height: "1.3rem",
              maxWidth: "40vw",
              wordBreak: "break-all",
              whiteSpace: "no-wrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {taskData.taskName}
          </div>
          {index !== 20 ? (
            <div style={{}}>{taskData.taskDamage} damage</div>
          ) : (
            <div>Earn extra rewards</div>
          )}
        </span>
      </div>
    </>
  );
};

export default Task;
