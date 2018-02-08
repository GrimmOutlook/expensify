import React from 'react';

const EditExpense = (props) => {
  console.log(props.match.params.id);
  return (
    <div>
      The Edit Expense Number { props.match.params.id}
    </div>
  );
}

export default EditExpense;
